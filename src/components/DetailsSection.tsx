import React from 'react';
import { Timeline } from './Timeline';
import { Accordion } from './Accordion';
import { Info } from 'lucide-react';
import glamping2 from '../asset/glamping2.jpg';

const scheduleItems = [
  { time: '10:00~10:50', title: '🍳 비앙또아 브런치', description: '10시까지 모여주세요' },
  { time: '11:00~11:30', title: '🚗 의왕 레일바이크로 이동', description: '' },
  { time: '11:30~12:40', title: '🚲 의왕 레일 바이크 + 사진미션', description: '' },
  { time: '12:40~13:30', title: '☕ 카페 (카페막시 왕송호수점)', description: '' },
  { time: '13:30~14:00', title: '🚗 글램핑장으로 이동', description: '' },
  { time: '14:00~15:00', title: '🏸 글램핑장 베드민턴', description: '' },
  { time: '15:00~16:30', title: '🍖 글램핑장 바베큐!', description: '' },
  { time: '16:30~17:00', title: '🏢 판교역으로 이동', description: '' },
];

const faqItems = [
  {
    title: '사진미션은 어떻게 하나요?',
    content: '레일바이크 타는 동안 4명이 함께 찍은 사진을 촬영해서 팀 단톡방에 인증해주시면 됩니다! 자세한 미션 내용과 채점 방식은 당일에 공지될 예정이에요 📸',
  },
  {
    title: '복장은 어떻게 해야 하나요?',
    content: '편안한 캐주얼 복장으로 오시면 됩니다. 베드민턴과 야외 활동이 있으니 활동하기 편한 옷차림을 추천드려요!',
  },
  {
    title: '준비물이 필요한가요?',
    content: '특별한 준비물은 없습니다! 편안한 신발과 가을 날씨에 맞는 겉옷 정도만 챙겨주세요.',
  },
  {
    title: '베드민턴 경기는 필수인가요?',
    content: '네! 다같이 조를 나눠 참여합니다 😊 자세한 경기 방식은 당일에 공지될 예정이에요.',
  },
];

export const DetailsSection: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto space-y-16">
      {/* Schedule */}
      <div className="animate-slide-up">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Info className="w-6 h-6 text-pink-500" />
          <h2 className="text-3xl md:text-4xl font-serifTitle font-bold text-text-primary text-center">
            일정 안내
          </h2>
        </div>
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <Timeline items={scheduleItems} />
          <p className="text-center text-sm font-sansBody text-gray-500 mt-6">
            * 일정은 상황에 따라 조율될 수 있습니다.
          </p>
        </div>
      </div>

      {/* Activities */}
      <div className="grid md:grid-cols-3 gap-6 animate-slide-up animate-delay-100">
        <div className="bg-gradient-to-br from-pink-pastel to-pink-50 rounded-2xl p-6 shadow-md">
          <h3 className="text-xl font-serifTitle font-bold text-text-primary mb-3">📸 사진미션</h3>
          <p className="text-gray-700 font-sansBody leading-relaxed">
            4명이 함께 찍은 사진 촬영 후 단톡방에 인증! 자세한 내용은 당일 공지.
          </p>
        </div>
        <div className="bg-gradient-to-br from-sky-pastel to-blue-50 rounded-2xl p-6 shadow-md">
          <h3 className="text-xl font-serifTitle font-bold text-text-primary mb-3">🏸 베드민턴</h3>
          <p className="text-gray-700 font-sansBody leading-relaxed">
            다같이 조를 나눠 참여하며, 팀 대항 친선전을 펼칩니다! 자세한 내용은 당일 공지.
          </p>
        </div>
        <div className="bg-gradient-to-br from-cream-pastel to-yellow-50 rounded-2xl p-6 shadow-md overflow-hidden">
          <h3 className="text-xl font-serifTitle font-bold text-text-primary mb-3">🍖 바베큐</h3>
          <p className="text-gray-700 font-sansBody leading-relaxed mb-3">
            고기 + 음료와 함께 맛있는 시간을 함께해요!
          </p>
          <img
            src={glamping2}
            alt="글램핑장 전경"
            className="w-full h-24 object-cover rounded-lg shadow-sm mt-2"
          />
        </div>
      </div>

      {/* FAQ */}
      <div className="animate-slide-up animate-delay-200">
        <h2 className="text-3xl md:text-4xl font-serifTitle font-bold text-text-primary text-center mb-8">
          자주 묻는 질문
        </h2>
        <Accordion items={faqItems} />
      </div>
    </section>
  );
};
