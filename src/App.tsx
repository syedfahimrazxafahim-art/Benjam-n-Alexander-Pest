import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveDefense } from './components/InteractiveDefense';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';
import { ServiceItem } from './types';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from './data/servicesData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<ServiceItem | null>(null);

  const handleOpenBookingWithService = (service?: ServiceItem) => {
    if (service) {
      setSelectedServiceForBooking(service);
    } else {
      setSelectedServiceForBooking(null);
    }
    setIsBookingOpen(true);
  };

  const handleNavigate = (tabId: string) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7FBF7] font-sans text-[#2D3A2D] selection:bg-[#B7E4C7] selection:text-[#1B4332]">
      
      {/* Primary Header & Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBooking={() => handleOpenBookingWithService()}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* Hero Section matching Natural Tones layout */}
        <div id="home">
          <Hero
            onOpenBooking={() => handleOpenBookingWithService()}
            onExploreDefense={() => handleNavigate('defense')}
          />
        </div>

        {/* Interactive 3D Pest Defense Perimeter Explorer */}
        <InteractiveDefense
          onOpenBooking={() => handleOpenBookingWithService()}
        />

        {/* Comprehensive Services Section */}
        <ServicesSection
          onOpenBooking={() => handleOpenBookingWithService()}
          onSelectService={(service) => setSelectedServiceForBooking(service)}
        />

        {/* Real Field Operations Gallery: Our Pest Control Work */}
        <GallerySection />

        {/* Houston Family Dedication & Philosophy */}
        <AboutSection
          onOpenBooking={() => handleOpenBookingWithService()}
        />

        {/* Houston Verified Testimonials */}
        <TestimonialsSection />

      </main>

      {/* Footer matching Natural Tones design */}
      <Footer
        onOpenBooking={() => handleOpenBookingWithService()}
        onNavigate={handleNavigate}
      />

      {/* Free Inspection Request Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedService={selectedServiceForBooking}
      />

      {/* Floating Mobile Quick Contact Action Pill */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center space-x-2.5 sm:hidden">
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1B4332] text-white p-3.5 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-transform flex items-center justify-center border-2 border-white"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-[#B7E4C7]" />
        </a>
        <a
          href={`tel:${BUSINESS_INFO.rawPhone}`}
          className="bg-[#2D6A4F] text-white px-4 py-3 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-transform font-bold text-xs flex items-center space-x-1.5 border-2 border-white"
        >
          <Phone className="w-4 h-4" />
          <span>Call 346-846-3170</span>
        </a>
      </div>

    </div>
  );
}
