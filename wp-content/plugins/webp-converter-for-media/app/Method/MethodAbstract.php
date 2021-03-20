<?php

  namespace WebpConverter\Method;

  use WebpConverter\Convert\Directory;
  use WebpConverter\Convert\Server;
  use WebpConverter\Convert\Size;
  use WebpConverter\Method\MethodInterface;

  abstract class MethodAbstract implements MethodInterface
  {
    private $settings = [];

    public function __construct()
    {
      $this->settings = apply_filters('webpc_get_values', []);
    }

    /* ---
      Functions
    --- */

    public function getSettings($settingsKey)
    {
      return $this->settings[$settingsKey] ?? null;
    }

    public function convertImage($path)
    {
      Server::setSettings();

      try {
        $sourcePath = $this->getImageSourcePath($path);
        $image      = $this->createImageByPath($sourcePath);
        $outputPath = $this->getImageOutputPath($sourcePath);

        if (file_exists($outputPath . Size::DELETED_FILE_EXTENSION)) {
          unlink($outputPath . Size::DELETED_FILE_EXTENSION);
        }

        $this->convertImageToWebP($image, $sourcePath, $outputPath);
        do_action('webpc_convert_after', $outputPath, $sourcePath);

        return [
          'success' => true,
          'message' => null,
          'data'    => $this->getConversionStats($sourcePath, $outputPath),
        ];
      } catch (\Exception $e) {
        if (in_array('debug_enabled', $this->getSettings('features'))) {
          error_log(sprintf('WebP Converter for Media: %s', $e->getMessage()));
        }

        return [
          'success' => false,
          'message' => apply_filters('webpc_convert_error', $e->getMessage(), $e->status),
          'data'    => null,
        ];
      }
    }

    public function getImageSourcePath($sourcePath)
    {
      $path = urldecode($sourcePath);
      if (!$status = Server::checkIfFileExists($path)) {
        $e         = new \Exception(sprintf('Source path "%s" for image does not exist.', $path));
        $e->status = 'file_unreadable';
        throw $e;
      }

      return $path;
    }

    public function getImageOutputPath($sourcePath)
    {
      if (!$outputPath = Directory::getPath($sourcePath, true)) {
        $e         = new \Exception(sprintf('An error occurred creating destination directory for "%s" file.', $sourcePath));
        $e->status = 'output_path';
        throw $e;
      }

      return $outputPath;
    }

    public function getConversionStats($sourcePath, $outputPath)
    {
      $sizeBefore = filesize($sourcePath);
      $sizeAfter  = (file_exists($outputPath)) ? filesize($outputPath) : $sizeBefore;

      return [
        'size_before' => $sizeBefore,
        'size_after'  => $sizeAfter,
      ];
    }
  }