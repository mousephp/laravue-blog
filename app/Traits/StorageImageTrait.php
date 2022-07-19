<?php

namespace App\Traits;

use Illuminate\Support\Str;
use Illuminate\Http\UploadedFile;
use Storage;

trait StorageImageTrait
{
    public function storageTraitUpload($request, $fieldName, $foderName)
    {
        if ($request->hasFile($fieldName)) {
            $file = $request->$fieldName;
            $fileNameOrigin = $file->getClientOriginalName();
            $fileNameHash = Str::random(10) . '.' . $file->getClientOriginalExtension();
            $filePath = $request->file($fieldName)->storeAs('public/' . $foderName, $fileNameHash);// . '/' . auth()->id()
            $dataUploadTrait = [
                'file_name' => $fileNameOrigin,
                'file_path' => Storage::url($filePath)
            ];
            return $dataUploadTrait;
        }
        return null;
    }

    public function storageTraitUploadSetting($request, $fieldName, $foderName)
    {
        if ($request->hasFile($fieldName)) {
            $file = $request->$fieldName;
            $fileNameHash = Str::random(10) . '.' . $file->getClientOriginalExtension();
            $filePath = $request->file($fieldName)->storeAs('public/' . $foderName, $fileNameHash);
            $dataUploadTrait = [
                'file_path' => Storage::url($filePath)
            ];
            return $dataUploadTrait;
        }
        return null;
    }

    public function storageTraitUploadMutiple($file, $foderName)
    {
        $fileNameOrigin = $file->getClientOriginalName();
        $fileNameHash = Str::random(10) . '.' . $file->getClientOriginalExtension();
        $filePath = $file->storeAs('public/' . $foderName, $fileNameHash);// . '/' . auth()->id()
        $dataUploadTrait = [
            'file_name' => $fileNameOrigin,
            'file_path' => Storage::url($filePath)
        ];
        return $dataUploadTrait;
    }

    public function uploadOne(UploadedFile $file, $folder = null, $filename = null)
    {
        $name = !is_null($filename)
            ? $filename
            : pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);

        return $file->storeAs(
            $folder,
            $name . "_" . date('mdYHis') . "_" . uniqid() . "." . $file->getClientOriginalExtension()
        );
    }

}
