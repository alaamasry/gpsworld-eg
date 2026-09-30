"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  "/images/QBIT.jpeg",
  "/images/QBIT-2.jpeg",
  "/images/QBIT-3.jpeg",
  "/images/QBIT-4.jpeg",
  "/images/QBIT-5.jpeg",
];

export default function QbitGallery() {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      <div className="flex min-h-[400px] items-center justify-center overflow-hidden rounded-3xl bg-white p-6 shadow-md">
        <Image
          src={selectedImage}
          alt="جهاز QBIT GPS لتتبع السيارات والمقتنيات"
          width={800}
          height={700}
          priority
          className="h-[400px] w-full object-contain"
        />
      </div>

      <div className="grid grid-cols-5 gap-3">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setSelectedImage(image)}
            aria-label={`عرض صورة QBIT رقم ${index + 1}`}
            aria-pressed={selectedImage === image}
            className={`flex h-20 items-center justify-center overflow-hidden rounded-xl border-2 bg-white p-1 transition sm:h-24 ${
              selectedImage === image
                ? "border-blue-700 shadow-md"
                : "border-gray-200 hover:border-blue-400"
            }`}
          >
            <Image
              src={image}
              alt={`صورة QBIT رقم ${index + 1}`}
              width={160}
              height={120}
              className="h-full w-full object-contain"
            />
          </button>
        ))}
      </div>

      <p className="text-center text-sm text-gray-500">
        اضغط على أي صورة لمشاهدتها بالحجم الكبير
      </p>
    </div>
  );
}
