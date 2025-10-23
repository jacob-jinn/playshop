import React from 'react';
import { Heart, Users } from 'lucide-react';

export const IntroSection: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto animate-slide-up">
      {/* Intro Text */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-6">
          따뜻한 마음을 담아 초대합니다
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
          언제나 함께 성장하고 즐거움을 나누는 우리 팀이<br />
          특별한 PlayShop을 준비했습니다.<br />
          소중한 시간을 함께 하며 새로운 경험과 영감을 나눌 수 있는<br />
          뜻깊은 자리에 여러분을 초대합니다.
        </p>
      </div>

      {/* Dual Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Play Card */}
        <div className="bg-gradient-to-br from-pink-pastel to-pink-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow animate-slide-up">
          <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-white shadow-md mx-auto">
            <Heart className="w-7 h-7 text-pink-500" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-text-primary text-center mb-3">
            Play
          </h3>
          <p className="text-gray-700 text-center leading-relaxed">
            즐거움과 창의성이 넘치는<br />
            특별한 경험을 함께 나눠요
          </p>
        </div>

        {/* Shop Card */}
        <div className="bg-gradient-to-br from-sky-pastel to-sky-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow animate-slide-up animate-delay-100">
          <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-white shadow-md mx-auto">
            <Users className="w-7 h-7 text-sky-500" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-text-primary text-center mb-3">
            Shop
          </h3>
          <p className="text-gray-700 text-center leading-relaxed">
            함께 배우고 성장하며<br />
            새로운 아이디어를 발견해요
          </p>
        </div>
      </div>
    </section>
  );
};
