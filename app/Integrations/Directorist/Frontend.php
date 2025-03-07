<?php
/**
 * @package ContentRestriction
 * @since   1.0.0
 * @version 1.0.0
 */

namespace ContentRestriction\Integrations\Directorist;

use ContentRestriction\Common\IntegrationBase;

class Frontend extends IntegrationBase {
	public function boot(): void {

		add_filter( 'content_restriction_module_group_list', [$this, 'add_group'] );
		add_filter( 'content_restriction_what_content_module_list', [$this, 'directorist_listings'] );

		/**
		 * Code goes here
		 */
	}

	public function add_group( array $groups ): array {
		$groups['directorist'] = [
			'title' => __( 'Directorist', 'content-restriction' ),
			'icon'  => $this->get_icon( 'Directorist' ),
		];

		return $groups;
	}

	public function directorist_listings( array $modules ): array {
		$modules[] = [
			'name'  => __( 'All Listings', 'content-restriction' ),
			'key'   => 'directorist_all_listings',
			'group' => 'directorist',
			'meta'  => ['listings', 'directorist', 'all listings'],
			'icon'  => $this->get_icon( 'Directorist' ),
			'desc'  => __( 'All the listings will be accessible when the set rule is applied.', 'content-restriction' ),
		];

		$modules[] = [
			'name'    => __( 'Specific Listings', 'content-restriction' ),
			'key'     => 'directorist_specific_listings',
			'group'   => 'directorist',
			'meta'    => ['listings', 'directorist', 'all listings'],
			'icon'    => $this->get_icon( 'Directorist' ),
			'desc'    => __( 'Specific listing will be accessible when the set rule is applied.', 'content-restriction' ),
			'type'    => 'section',
			'options' => [
				'listings' => [
					'title'   => __( 'Select Listings', 'content-restriction' ),
					'type'    => 'multi-select',
					'options' => $this->listing_list(),
				],
			],
		];

		$modules[] = [
			'name'    => __( 'Listings With Categories', 'content-restriction' ),
			'key'     => 'directorist_listings_with_categories',
			'meta'    => ['listings', 'directorist', 'all listings'],
			'group'   => 'directorist',
			'icon'    => $this->get_icon( 'Directorist' ),
			'desc'    => __( 'Listing with the category will be accessible when the set rule is applied.', 'content-restriction' ),
			'type'    => 'section',
			'options' => [
				'categories' => [
					'title'   => __( 'Select Categories', 'content-restriction' ),
					'type'    => 'multi-select',
					'options' => $this->term_list( 'at_biz_dir-category' ),
				],
			],
			'is_pro'  => true,
		];

		$modules[] = [
			'name'    => __( 'Listings With Locations', 'content-restriction' ),
			'key'     => 'directorist_listings_with_locations',
			'meta'    => ['listings', 'directorist', 'all listings'],
			'group'   => 'directorist',
			'icon'    => $this->get_icon( 'Directorist' ),
			'desc'    => __( 'Listing with the location will be accessible when the set rule is applied.', 'content-restriction' ),
			'type'    => 'section',
			'options' => [
				'locations' => [
					'title'   => __( 'Select Locations', 'content-restriction' ),
					'type'    => 'multi-select',
					'options' => $this->term_list( 'at_biz_dir-location' ),
				],
			],
			'is_pro'  => true,
		];

		$modules[] = [
			'name'    => __( 'Listings With Directory Type', 'content-restriction' ),
			'key'     => 'directorist_listings_with_directory_type',
			'meta'    => ['listings', 'directorist', 'all listings'],
			'group'   => 'directorist',
			'icon'    => $this->get_icon( 'Directorist' ),
			'desc'    => __( 'Listing with the directory type will be accessible when the set rule is applied.', 'content-restriction' ),
			'type'    => 'section',
			'options' => [
				'directory_type' => [
					'title'   => __( 'Select Directory Type', 'content-restriction' ),
					'type'    => 'multi-select',
					'options' => $this->term_list( 'at_biz_dir-location' ),
				],
			],
			'is_pro'  => true,
		];

		$modules[] = [
			'name'     => __( 'Listing Sections', 'content-restriction' ),
			'key'      => 'directorist_listing_sections',
			'meta'     => ['listings', 'directorist', 'all listings'],
			'group'    => 'directorist',
			'icon'     => $this->get_icon( 'Directorist' ),
			'desc'     => __( 'Listing with the location will be accessible when the set rule is applied.', 'content-restriction' ),
			'type'     => 'section',
			'options'  => [
				'directory_type' => [
					'title'   => __( 'Select Directory Type', 'content-restriction' ),
					'type'    => 'multi-select',
					'options' => $this->term_list( 'at_biz_dir-location' ),
				],
				'sections'       => [
					'title'   => __( 'Select Sections', 'content-restriction' ),
					'type'    => 'multi-select',
					'options' => $this->term_list( 'at_biz_dir-location' ),
				],
			],
			'upcoming' => true,
		];

		$modules[] = [
			'name'     => __( 'Listing Contact Information', 'content-restriction' ),
			'key'      => 'directorist_listing_contact_information',
			'meta'     => ['listings', 'directorist', 'all listings'],
			'group'    => 'directorist',
			'icon'     => $this->get_icon( 'Directorist' ),
			'desc'     => __( 'Listing with the location will be accessible when the set rule is applied.', 'content-restriction' ),
			'type'     => 'section',
			'options'  => [
				'directory_type' => [
					'title'   => __( 'Select Directory Type', 'content-restriction' ),
					'type'    => 'multi-select',
					'options' => $this->term_list( 'at_biz_dir-location' ),
				],
				'sections'       => [
					'title'   => __( 'Select Sections', 'content-restriction' ),
					'type'    => 'multi-select',
					'options' => $this->term_list( 'at_biz_dir-location' ),
				],
			],
			'upcoming' => true,
		];

		return $modules;
	}

	public function listing_list() {
		$posts = get_posts( [
			'post_type'   => 'at_biz_dir',
			'post_status' => 'publish',
		] );

		$options = [];
		foreach ( $posts as $key => $post ) {
			$options[$post->ID] = $post->post_title;
		}

		return $options;
	}

	public function term_list( string $taxonomy ) {
		$terms = get_terms( [
			'taxonomy'   => $taxonomy,
			'hide_empty' => true,
		] );

		$options = [];
		foreach ( $terms as $key => $term ) {
			$options[$term->term_id] = $term->name;
		}

		return $options;
	}
}