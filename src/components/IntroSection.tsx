import React from 'react';
import { Heart, Users } from 'lucide-react';

export const IntroSection: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto animate-slide-up">
      {/* Intro Text */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-6">
          따뜻한 마음을 담아 초대합니다 💝
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
          바쁜 일상 속에서도 웃음을 잃지 않는 우리.<br />
          이번엔 잠시 업무를 내려놓고,<br />
          함께 웃고, 놀고, 맛있는 시간을 보내요.<br />
          교환권선포비팀이 준비한 가을 소풍에 초대합니다!
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
