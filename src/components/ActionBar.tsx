import React, { useState } from 'react';
import { Calendar, Share2, Check } from 'lucide-react';
import { downloadICS } from '@/utils/ics';
import { shareEvent } from '@/utils/sharing';

export const ActionBar: React.FC = () => {
  const [shareSuccess, setShareSuccess] = useState(false);

  const eventData = {
    title: '교환권선포비팀 PlayShop 2025 하반기',
    description: '가을 햇살 아래, 우리 함께 떠나요 🌼 의왕 레일바이크 & 오매기 744 글램핑장',
    location: '판교 비앙또아 (집결)',
    startTime: new Date('2025-10-30T10:00:00+09:00'),
    endTime: new Date('2025-10-30T17:00:00+09:00'),
  };

  const handleAddToCalendar = () => {
    downloadICS(eventData);
  };

  const handleShare = async () => {
    const success = await shareEvent({
      title: eventData.title,
      text: `${eventData.title} - ${eventData.description}`,
      url: window.location.href,
    });

    if (success) {
      setShareSuccess(true);
      setTimeout(() => setShareSuccess(false), 2000);
    }
  };

  return (
    <section className="max-w-4xl mx-auto animate-slide-up">
      <div className="bg-gradient-to-r from-pink-pastel via-cream-pastel to-sky-pastel rounded-3xl shadow-lg p-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Add to Calendar Button */}
          <button
            onClick={handleAddToCalendar}
            className="flex items-center gap-2 px-6 py-3 bg-white text-text-primary font-semibold rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
            aria-label="캘린더에 추가"
          >
            <Calendar className="w-5 h-5 text-pink-500" />
            <span>캘린더에 추가</span>
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-6 py-3 bg-white text-text-primary font-semibold rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
            aria-label="공유하기"
          >
            {shareSuccess ? (
              <>
                <Check className="w-5 h-5 text-green-500" />
                <span>공유 완료!</span>
              </>
            ) : (
              <>
                <Share2 className="w-5 h-5 text-sky-500" />
                <span>공유하기</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
