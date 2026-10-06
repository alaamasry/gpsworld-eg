"use client";

import { useState } from "react";
import Image from "next/image";

type DeviceGalleryProps = {
  images: string[];
  deviceName: string;
};

export default function DeviceGallery({
  images,
  deviceName,
}: DeviceGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      <div className="flex min-h-[400px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-950/40">
        <Image
          src={selectedImage}
          alt={`جهاز ${deviceName} لتتبع السيارات GPS`}
          width={900}
          height={900}
          priority
          className="h-[400px] w-full object-contain"
        />
      </div>

      <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setSelectedImage(image)}
            aria-label={`عرض صورة ${deviceName} رقم ${index + 1}`}
            aria-pressed={selectedImage === image}
            className={`flex h-24 items-center justify-center overflow-hidden rounded-xl border-2 bg-white p-1 transition ${
              selectedImage === image
                ? "border-cyan-400 shadow-md shadow-cyan-400/20"
                : "border-white/10 hover:border-cyan-400/50"
            }`}
          >
            <Image
              src={image}
              alt={`صورة ${deviceName} رقم ${index + 1}`}
              width={180}
              height={140}
              className="h-full w-full object-contain"
            />
          </button>
        ))}
      </div>

      <p className="text-center text-sm text-slate-500">
        اضغط على أي صورة لمشاهدتها بالحجم الكبير
      </p>
    </div>
  );
}