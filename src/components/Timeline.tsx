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
    <div className="space-y-6 md:space-y-0 md:flex md:gap-4 md:justify-center">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex md:flex-col items-start md:items-center gap-4 md:gap-2 animate-slide-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Icon */}
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-pink-pastel to-sky-pastel flex items-center justify-center shadow-md">
            <Clock className="w-5 h-5 text-text-primary" />
          </div>

          {/* Content */}
          <div className="flex-1 md:text-center">
            <p className="text-sm font-medium text-pink-500">{item.time}</p>
            <h4 className="font-semibold text-text-primary mt-1">{item.title}</h4>
            {item.description && (
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            )}
          </div>

          {/* Connector (desktop only) */}
          {index < items.length - 1 && (
            <div className="hidden md:block w-8 h-0.5 bg-gradient-to-r from-pink-pastel to-sky-pastel mt-6" />
          )}
        </div>
      ))}
    </div>
  );
};
