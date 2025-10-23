import React from 'react';
import { Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Mail className="w-4 h-4 text-gray-500" />
          <a
            href="mailto:playshop@kakao.com"
            className="text-gray-600 hover:text-pink-500 transition-colors"
          >
            playshop@kakao.com
          </a>
        </div>
        <p className="text-sm text-gray-500">
          © 2025 Kakao PlayShop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
