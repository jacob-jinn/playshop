import React, { useRef } from 'react';
import { HeroCard } from '@/components/HeroCard';
import { IntroSection } from '@/components/IntroSection';
import { DetailsSection } from '@/components/DetailsSection';
import { LocationCard } from '@/components/LocationCard';
import { Gallery } from '@/components/Gallery';
import { RSVPForm } from '@/components/RSVPForm';
import { ActionBar } from '@/components/ActionBar';
import { Footer } from '@/components/Footer';
import { useConfetti } from '@/hooks/useConfetti';

export const Home: React.FC = () => {
  const rsvpRef = useRef<HTMLDivElement>(null);
  const canvasRef = useConfetti(true);

  const scrollToRSVP = () => {
    rsvpRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Confetti */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Main Content */}
      <main className="relative z-10 px-4 py-8 md:py-16 space-y-20">
        {/* Hero Section */}
        <HeroCard onRSVPClick={scrollToRSVP} />

        {/* Intro Section */}
        <IntroSection />

        {/* Details Section */}
        <DetailsSection />

        {/* Location Section */}
        <LocationCard />

        {/* Gallery Section */}
        <Gallery />

        {/* Action Bar */}
        <ActionBar />

        {/* RSVP Form */}
        <div ref={rsvpRef}>
          <RSVPForm />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
