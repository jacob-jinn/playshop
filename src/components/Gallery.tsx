import React, { useState } from 'react';
import { X, Image as ImageIcon } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

// Dummy images - replace with actual images
const images: GalleryImage[] = [
  { id: 1, src: 'https://via.placeholder.com/400x300/FFCFEF/222222?text=Image+1', alt: 'Gallery Image 1' },
  { id: 2, src: 'https://via.placeholder.com/400x300/C6E6FF/222222?text=Image+2', alt: 'Gallery Image 2' },
  { id: 3, src: 'https://via.placeholder.com/400x300/FFF6D6/222222?text=Image+3', alt: 'Gallery Image 3' },
  { id: 4, src: 'https://via.placeholder.com/400x300/FFCFEF/222222?text=Image+4', alt: 'Gallery Image 4' },
  { id: 5, src: 'https://via.placeholder.com/400x300/C6E6FF/222222?text=Image+5', alt: 'Gallery Image 5' },
  { id: 6, src: 'https://via.placeholder.com/400x300/FFF6D6/222222?text=Image+6', alt: 'Gallery Image 6' },
];

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="max-w-6xl mx-auto animate-slide-up">
      <div className="flex items-center justify-center gap-2 mb-8">
        <ImageIcon className="w-6 h-6 text-pink-500" />
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary text-center">
          갤러리
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:scale-105 animate-slide-up"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-full rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
