

import { UploadDropzone } from '@/lib/uploadthing';
import { Pencil } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function ImageInput({
  label,
  imageUrl,
  setImageUrl,
  endpoint = "imageUploader",
  className = "col-span-full"
}) {
  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-4">
        <label
          htmlFor="course-image"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        {imageUrl && (
          <button
            onClick={() => setImageUrl("")}
            type="button"
            className="flex space-x-2 bg-slate-900 rounded-md shadow text-slate-100"
          >
            <Pencil className="w-5 h-5" />
            <span>Change Image</span>
          </button>
        )}
      </div>

      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Uploaded image"
          width={1000}
          height={667}
          className="w-full h-64 object-cover"
        />
      ) : (
        <UploadDropzone
          endpoint={endpoint}
          onClientUploadComplete={(res) => {
            if (res && res.length > 0) {
              const uploadedImageUrl = res[0].url;
              console.log("Files:", res);
              console.log("Upload Completed");
              setImageUrl(uploadedImageUrl);
            }
          }}
          onUploadError={(error) => {
            console.log(`ERROR! ${error.message}`);
          }}
        />
      )}
    </div>
  );
}
