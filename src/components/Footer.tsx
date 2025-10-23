import React from 'react';
import { Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-pink-pastel via-cream-pastel to-sky-pastel py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
          가을날의 소풍을 함께 즐길 여러분을 기다립니다 🍂
        </p>
        <p className="text-base text-gray-600 mb-6">
          교환권선포비팀 드림
        </p>
        <div className="flex items-center justify-center gap-2 mb-3">
          <Mail className="w-4 h-4 text-gray-600" />
          <a
            href="mailto:jacob.jinn@kakaocorp.com"
            className="text-gray-600 hover:text-pink-500 transition-colors"
          >
            jacob.jinn@kakaocorp.com
          </a>
        </div>
        <p className="text-sm text-gray-500">
          © 2025 Kakao PlayShop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
