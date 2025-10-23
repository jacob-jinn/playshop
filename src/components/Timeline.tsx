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
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-4 animate-slide-up opacity-0"
          style={{
            animationDelay: `${index * 100}ms`,
            animationFillMode: 'forwards'
          }}
        >
          {/* Time */}
          <div className="flex-shrink-0 w-32 text-right">
            <p className="text-sm font-semibold text-pink-500">{item.time}</p>
          </div>

          {/* Icon */}
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-pink-pastel to-sky-pastel flex items-center justify-center shadow-md">
            <Clock className="w-4 h-4 text-text-primary" />
          </div>

          {/* Content */}
          <div className="flex-1 pb-8 border-l-2 border-pink-100 pl-6 -ml-5">
            <h4 className="font-semibold text-text-primary text-lg">{item.title}</h4>
            {item.description && (
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
