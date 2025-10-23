import React, { useState } from 'react';
import { MapPin, Navigation, ChevronDown } from 'lucide-react';

export const LocationCard: React.FC = () => {
  const [selectedMap1, setSelectedMap1] = useState<'kakao' | 'google' | 'naver'>('kakao');
  const [selectedMap2, setSelectedMap2] = useState<'kakao' | 'google' | 'naver'>('kakao');

  const location1Links = {
    kakao: 'https://map.kakao.com/?q=경기+의왕시+왕송못로+209',
    google: 'https://maps.google.com/?q=경기+의왕시+왕송못로+209',
    naver: 'https://map.naver.com/p/search/경기+의왕시+왕송못로+209',
  };

  const location2Links = {
    kakao: 'https://map.kakao.com/?q=경기+의왕시+왕송못동길+64',
    google: 'https://maps.google.com/?q=경기+의왕시+왕송못동길+64',
    naver: 'https://map.naver.com/p/search/경기+의왕시+왕송못동길+64',
  };

  return (
    <section className="max-w-5xl mx-auto animate-slide-up space-y-8">
      <div className="flex items-center justify-center gap-2 mb-8">
        <MapPin className="w-6 h-6 text-pink-500" />
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary text-center">
          주요 방문지
        </h2>
      </div>

      {/* Location 1: 의왕 레일바이크 */}
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="relative h-48 md:h-64 bg-gradient-to-br from-sky-pastel via-cream-pastel to-pink-pastel flex items-center justify-center">
          <div className="text-center">
            <span className="text-6xl mb-4">🚲</span>
            <p className="text-white text-lg font-medium">의왕 레일바이크</p>
          </div>
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-serif font-bold text-text-primary mb-2">
            의왕 레일바이크
          </h3>
          <p className="text-gray-600 mb-6">
            경기 의왕시 왕송못로 209
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <select
                value={selectedMap1}
                onChange={(e) => setSelectedMap1(e.target.value as typeof selectedMap1)}
                className="w-full appearance-none px-4 py-3 pr-10 rounded-xl border-2 border-gray-200 bg-white font-medium text-text-primary cursor-pointer hover:border-pink-300 transition-colors"
              >
                <option value="kakao">카카오맵</option>
                <option value="google">구글맵</option>
                <option value="naver">네이버지도</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
            </div>
            <a
              href={location1Links[selectedMap1]}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-400 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              <Navigation className="w-5 h-5" />
              <span>길 안내 보기</span>
            </a>
          </div>
        </div>
      </div>

      {/* Location 2: 오매기744 글램핑장 */}
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="relative h-48 md:h-64 bg-gradient-to-br from-pink-pastel via-cream-pastel to-sky-pastel flex items-center justify-center">
          <div className="text-center">
            <span className="text-6xl mb-4">🏕️</span>
            <p className="text-white text-lg font-medium">오매기744 글램핑장</p>
          </div>
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-serif font-bold text-text-primary mb-2">
            오매기744 글램핑장
          </h3>
          <p className="text-gray-600 mb-6">
            경기 의왕시 왕송못동길 64
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <select
                value={selectedMap2}
                onChange={(e) => setSelectedMap2(e.target.value as typeof selectedMap2)}
                className="w-full appearance-none px-4 py-3 pr-10 rounded-xl border-2 border-gray-200 bg-white font-medium text-text-primary cursor-pointer hover:border-pink-300 transition-colors"
              >
                <option value="kakao">카카오맵</option>
                <option value="google">구글맵</option>
                <option value="naver">네이버지도</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
            </div>
            <a
              href={location2Links[selectedMap2]}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-400 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              <Navigation className="w-5 h-5" />
              <span>길 안내 보기</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
