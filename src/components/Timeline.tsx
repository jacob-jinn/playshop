import React from 'react';
import { Clock } from 'lucide-react';

interface TimelineItem {
  time: string;
  title: string;
  description?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2 md:gap-4 animate-slide-up opacity-0"
          style={{
            animationDelay: `${index * 100}ms`,
            animationFillMode: 'forwards'
          }}
        >
          {/* Time */}
          <div className="flex-shrink-0 w-20 md:w-32 text-right">
            <p className="text-xs md:text-sm font-semibold font-sansBody text-pink-500">{item.time}</p>
          </div>

          {/* Icon */}
          <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-pink-pastel to-sky-pastel flex items-center justify-center shadow-md">
            <Clock className="w-3 h-3 md:w-4 md:h-4 text-text-primary" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h4 className="font-semibold font-sansBody text-text-primary text-sm md:text-lg">{item.title}</h4>
            {item.description && (
              <p className="text-xs md:text-sm font-sansBody text-gray-600 mt-1">{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
