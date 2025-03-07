<?php
/**
 * @package ContentRestriction
 * @since   1.0.0
 * @version 1.0.0
 */

namespace ContentRestriction\Modules\Blur;

class Blur extends \ContentRestriction\Common\RestrictViewBase {

	public function __construct( $who_can_see, $what_content, array $rule ) {
		$this->type         = 'restrict-view';
		$this->module       = 'blur';
		$this->rule         = $rule;
		$this->who_can_see  = $who_can_see;
		$this->what_content = $what_content;
		$this->options      = $this->rule['rule'][$this->type][$this->module] ?? [];
		$this->protection   = new Protection( $what_content, $this->options, $this->rule );
	}

	public function boot(): void {
		$if = ( new $this->who_can_see( $this->rule ) );
		if ( $if->has_access() ) {
			return;
		}

		add_filter( 'content_restriction_the_title', [$this, 'the_title'], 10 );
		add_filter( 'content_restriction_the_excerpt', [$this, 'the_excerpt'], 1 );
		add_filter( 'content_restriction_the_content', [$this, 'the_content'] );
	}

	public function the_title( $title ) {
		\ContentRestriction\Utils\Analytics::add( [
			'user_id' => get_current_user_id(),
			'post_id' => get_the_ID(),
			'context' => 'locked',
			'id'      => $this->rule['id'],
		] );

		$this->protection->set_post_id( get_the_ID() );

		if ( $this->apply_to( 'title' ) ) {
			$title = $this->protection->add( $title );
		}

		return $title;
	}

	public function the_excerpt( $excerpt ) {
		if ( $this->apply_to( 'excerpt' ) ) {
			$excerpt = $this->protection->add( $excerpt );
		}

		return $excerpt;
	}

	public function the_content( $content ) {
		if ( $this->apply_to( 'content' ) ) {
			$content = $this->protection->add( $content );
		}

		return $content;
	}

	private function apply_to( string $t ): bool {
		$arr = $this->options['apply_to'] ?? [];
		if ( in_array( $t, $arr ) ) {
			return true;
		}

		return false;
	}
}