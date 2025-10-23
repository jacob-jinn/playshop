import React from 'react';
import { Timeline } from './Timeline';
import { Accordion } from './Accordion';
import { Info } from 'lucide-react';

const scheduleItems = [
  { time: '14:00', title: '입장 및 환영', description: '웰컴 드링크' },
  { time: '14:30', title: '오프닝', description: '행사 소개' },
  { time: '15:00', title: '워크샵', description: '메인 세션' },
  { time: '16:30', title: '휴식', description: '티타임' },
  { time: '17:00', title: '네트워킹', description: '교류 시간' },
  { time: '18:00', title: '마무리', description: '폐회' },
];

const faqItems = [
  {
    title: '주차는 어떻게 하나요?',
    content: '알파돔시티 건물 지하 주차장을 이용하실 수 있습니다. 주차권은 행사장 접수처에서 받으실 수 있어요.',
  },
  {
    title: '복장은 어떻게 해야 하나요?',
    content: '편안한 캐주얼 복장으로 오시면 됩니다. 워크샵 활동이 있으니 활동하기 편한 옷을 추천드려요!',
  },
  {
    title: '준비물이 필요한가요?',
    content: '특별한 준비물은 없습니다. 필기구와 노트북은 필요하신 분만 개인적으로 준비해주세요.',
  },
  {
    title: '동반 인원도 참석 가능한가요?',
    content: '네, 가능합니다! RSVP 신청 시 동반 인원 수를 함께 입력해주시면 됩니다. (최대 5명)',
  },
];

export const DetailsSection: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto space-y-16">
      {/* Schedule */}
      <div className="animate-slide-up">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Info className="w-6 h-6 text-pink-500" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary text-center">
            일정 안내
          </h2>
        </div>
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <Timeline items={scheduleItems} />
        </div>
      </div>

      {/* Dress Code & Tips */}
      <div className="grid md:grid-cols-2 gap-6 animate-slide-up animate-delay-100">
        <div className="bg-gradient-to-br from-cream-pastel to-yellow-50 rounded-2xl p-6 shadow-md">
          <h3 className="text-xl font-serif font-bold text-text-primary mb-3">드레스 코드</h3>
          <p className="text-gray-700 leading-relaxed">
            편안한 캐주얼 복장을 권장해요. 워크샵 활동을 고려하여 움직이기 편한 옷차림을 추천드립니다!
          </p>
        </div>
        <div className="bg-gradient-to-br from-sky-pastel to-blue-50 rounded-2xl p-6 shadow-md">
          <h3 className="text-xl font-serif font-bold text-text-primary mb-3">준비물</h3>
          <p className="text-gray-700 leading-relaxed">
            모든 자료는 현장에서 제공됩니다. 필요하신 분은 개인 노트북과 필기구를 지참해주세요.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="animate-slide-up animate-delay-200">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary text-center mb-8">
          자주 묻는 질문
        </h2>
        <Accordion items={faqItems} />
      </div>
    </section>
  );
};
