import React, { useState } from 'react';
import { X, Image as ImageIcon } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

// Placeholder images - let's fill these together!
const images: GalleryImage[] = [
  { id: 1, src: '', alt: '📸' },
  { id: 2, src: '', alt: '🌼' },
  { id: 3, src: '', alt: '🍂' },
  { id: 4, src: '', alt: '🎨' },
  { id: 5, src: '', alt: '✨' },
  { id: 6, src: '', alt: '💝' },
];

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="max-w-6xl mx-auto animate-slide-up">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-3">
          <ImageIcon className="w-6 h-6 text-pink-500" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary">
            갤러리
          </h2>
        </div>
        <p className="text-gray-600">
          이 사진들을 같이 채워나가 보아요 📸
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-gradient-to-br from-pink-pastel via-cream-pastel to-sky-pastel flex items-center justify-center animate-slide-up"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="text-center">
              <div className="text-5xl md:text-6xl mb-2 opacity-60">
                {image.alt.includes('📸') ? '📸' :
                 image.alt.includes('🌼') ? '🌼' :
                 image.alt.includes('🍂') ? '🍂' :
                 image.alt.includes('🎨') ? '🎨' :
                 image.alt.includes('✨') ? '✨' : '💝'}
              </div>
              <p className="text-sm text-gray-500 px-4">곧 채워질 추억</p>
            </div>
          </div>
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
