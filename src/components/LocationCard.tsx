import React, { useState } from 'react';
import { MapPin, Navigation, ChevronDown } from 'lucide-react';

export const LocationCard: React.FC = () => {
  const [selectedMap, setSelectedMap] = useState<'kakao' | 'google' | 'naver'>('kakao');

  const mapLinks = {
    kakao: 'https://map.kakao.com/',
    google: 'https://maps.google.com/',
    naver: 'https://map.naver.com/',
  };

  return (
    <section className="max-w-4xl mx-auto animate-slide-up">
      <div className="flex items-center justify-center gap-2 mb-8">
        <MapPin className="w-6 h-6 text-pink-500" />
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary text-center">
          오시는 길
        </h2>
      </div>

      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Map Placeholder */}
        <div className="relative h-64 md:h-96 bg-gradient-to-br from-sky-pastel via-cream-pastel to-pink-pastel flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-white mx-auto mb-4 opacity-80" />
            <p className="text-white text-lg font-medium">지도 영역</p>
            <p className="text-white/80 text-sm mt-2">실제 지도는 지도 API를 연동하여 표시됩니다</p>
          </div>
        </div>

        {/* Location Info */}
        <div className="p-8">
          <h3 className="text-2xl font-serif font-bold text-text-primary mb-2">
            판교 알파돔시티 ○○홀
          </h3>
          <p className="text-gray-600 mb-6">
            경기도 성남시 분당구 판교역로 146번길 20
          </p>

          {/* Transportation */}
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-pastel flex items-center justify-center">
                <span className="text-sm font-bold text-sky-700">🚇</span>
              </div>
              <div>
                <p className="font-medium text-text-primary">지하철</p>
                <p className="text-sm text-gray-600">신분당선 판교역 1번 출구, 도보 5분</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-pastel flex items-center justify-center">
                <span className="text-sm font-bold text-pink-700">🚗</span>
              </div>
              <div>
                <p className="font-medium text-text-primary">자가용</p>
                <p className="text-sm text-gray-600">경부고속도로 판교IC 이용, 건물 지하 주차장 완비</p>
              </div>
            </div>
          </div>

          {/* Map Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <select
                value={selectedMap}
                onChange={(e) => setSelectedMap(e.target.value as typeof selectedMap)}
                className="w-full appearance-none px-4 py-3 pr-10 rounded-xl border-2 border-gray-200 bg-white font-medium text-text-primary cursor-pointer hover:border-pink-300 transition-colors"
              >
                <option value="kakao">카카오맵</option>
                <option value="google">구글맵</option>
                <option value="naver">네이버지도</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
            </div>
            <a
              href={mapLinks[selectedMap]}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-400 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              <Navigation className="w-5 h-5" />
              <span>길 안내 열기</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
