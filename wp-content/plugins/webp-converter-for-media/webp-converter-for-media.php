<?php

  /*
    Plugin Name: WebP Converter for Media
    Description: Speed up your website by serving WebP images instead of standard formats JPEG, PNG and GIF.
    Version: 2.4.0
    Author: Mateusz Gbiorczyk
    Author URI: https://gbiorczyk.pl/
    Text Domain: webp-converter-for-media
    Network: true
  */

  define('WEBPC_VERSION', '2.4.0');
  define('WEBPC_FILE',    __FILE__);
  define('WEBPC_NAME',    plugin_basename(__FILE__));
  define('WEBPC_PATH',    plugin_dir_path(__FILE__));
  define('WEBPC_URL',     plugin_dir_url(__FILE__));

  require_once __DIR__ . '/vendor/autoload.php';
  new WebpConverter\WebpConverter();