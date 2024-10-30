<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit2fb4f21ca87f7604b1cc1f55fc0f56d5
{
    public static $prefixLengthsPsr4 = array (
        'C' => 
        array (
            'ContentRestriction\\' => 19,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'ContentRestriction\\' => 
        array (
            0 => __DIR__ . '/../..' . '/app',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit2fb4f21ca87f7604b1cc1f55fc0f56d5::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit2fb4f21ca87f7604b1cc1f55fc0f56d5::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit2fb4f21ca87f7604b1cc1f55fc0f56d5::$classMap;

        }, null, ClassLoader::class);
    }
}
