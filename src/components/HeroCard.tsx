import React from 'react';
import { Sparkles, Calendar, MapPin } from 'lucide-react';
import glamping from '../asset/glamping.jpg';

interface HeroCardProps {
  onRSVPClick: () => void;
}

export const HeroCard: React.FC<HeroCardProps> = ({ onRSVPClick }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl shadow-2xl p-8 md:p-12 text-center animate-fade-in bg-cover bg-center" style={{ backgroundImage: `url(${glamping})` }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Decorative elements */}
      <div className="absolute top-4 left-4 text-4xl animate-float z-10">🍂</div>
      <div className="absolute top-8 right-8 text-3xl animate-float z-10" style={{ animationDelay: '0.5s' }}>🌼</div>
      <div className="absolute bottom-8 left-12 text-3xl animate-float z-10" style={{ animationDelay: '1s' }}>🍁</div>

      {/* Content */}
      <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-white shadow-lg">
          <Sparkles className="w-8 h-8 text-pink-500" />
        </div>

        <h1 className="text-4xl md:text-6xl font-serifTitle font-bold text-text-primary mb-4">
          교환권선포비팀 PlayShop 2025 하반기 🍂
        </h1>

        <p className="text-lg md:text-xl font-sansBody text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          가을 햇살 아래, 우리 함께 떠나요 🌼
        </p>

        {/* Event Info */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <div className="flex items-center gap-2 text-gray-700 font-sansBody">
            <Calendar className="w-5 h-5 text-pink-500" />
            <span className="font-medium">2025.10.30 (목)</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-400" />
          <div className="flex items-center gap-2 text-gray-700 font-sansBody">
            <MapPin className="w-5 h-5 text-sky-500" />
            <span className="font-medium">의왕 레일바이크 & 오매기 744 글램핑장</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onRSVPClick}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-400 text-white font-sansBody font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
        >
          <span>초대 수락하기 💌</span>
          <Sparkles className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
