<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInit2fb4f21ca87f7604b1cc1f55fc0f56d5
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInit2fb4f21ca87f7604b1cc1f55fc0f56d5', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInit2fb4f21ca87f7604b1cc1f55fc0f56d5', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInit2fb4f21ca87f7604b1cc1f55fc0f56d5::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
