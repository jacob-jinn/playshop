import React from 'react';
import { Sparkles, Calendar, MapPin } from 'lucide-react';

interface HeroCardProps {
  onRSVPClick: () => void;
}

export const HeroCard: React.FC<HeroCardProps> = ({ onRSVPClick }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-pink-pastel via-cream-pastel to-sky-pastel rounded-3xl shadow-2xl p-8 md:p-12 text-center animate-fade-in">
      {/* Decorative elements */}
      <div className="absolute top-4 left-4 text-4xl animate-float">✨</div>
      <div className="absolute top-8 right-8 text-3xl animate-float" style={{ animationDelay: '0.5s' }}>🎉</div>
      <div className="absolute bottom-8 left-12 text-3xl animate-float" style={{ animationDelay: '1s' }}>🎈</div>

      {/* Content */}
      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-white shadow-lg">
          <Sparkles className="w-8 h-8 text-pink-500" />
        </div>

        <h1 className="text-4xl md:text-6xl font-serif font-bold text-text-primary mb-4">
          Kakao PlayShop 2025
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          여러분을 특별한 자리에 초대합니다
        </p>

        {/* Event Info */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <div className="flex items-center gap-2 text-gray-700">
            <Calendar className="w-5 h-5 text-pink-500" />
            <span className="font-medium">2025년 11월 15일 (토) 14:00</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-400" />
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin className="w-5 h-5 text-sky-500" />
            <span className="font-medium">판교 알파돔시티 ○○홀</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onRSVPClick}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-400 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
        >
          <span>참석 신청하기</span>
          <Sparkles className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
