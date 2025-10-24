import React from 'react';
import { Mail } from 'lucide-react';
import glamping from '../asset/glamping.jpg';

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 mt-20 overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${glamping})` }}>
      {/* Blurred overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <p className="text-lg md:text-xl font-serifTitle text-white mb-4 leading-relaxed font-semibold">
          가을날의 소풍을 함께 즐길 여러분을 기다립니다 🍂
        </p>
        <p className="text-base font-sansBody text-white/90 mb-6">
          교환권선포비팀 드림
        </p>
        <div className="flex items-center justify-center gap-2 mb-3">
          <Mail className="w-4 h-4 text-white/80" />
          <a
            href="mailto:playshop@example.com"
            className="text-white/90 font-sansBody hover:text-pink-300 transition-colors"
          >
            playshop@example.com
          </a>
        </div>
        <p className="text-sm font-sansBody text-white/70">
          © 2025 PlayShop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
