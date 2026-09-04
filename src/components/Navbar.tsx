import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBooking?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exact navigation sections requested: Home, Services, Gallery, Contact
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-green-100/80 shadow-xs">
      {/* Minimal, clean, modern header without top bar or location clutter */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        
        {/* Logo & Company Name */}
        <div
          onClick={() => handleNavClick('home')}
          className="cursor-pointer transition-opacity hover:opacity-90 flex items-center"
        >
          <BrandLogo variant="dark" showSubtitle={false} />
        </div>

        {/* Desktop Navigation Links: Home, Services, Gallery, Contact */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#40514E]">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors text-sm py-1 relative ${
                  isActive
                    ? 'text-[#2D6A4F] font-bold'
                    : 'text-[#52796F] hover:text-[#1B4332]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2D6A4F] rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Call to Action Button for Contact */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => handleNavClick('contact')}
            className="bg-[#2D6A4F] hover:bg-[#1B4332] text-white text-xs sm:text-sm font-semibold px-5 py-2 rounded-full transition-all shadow-xs flex items-center space-x-2"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Contact Us</span>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center space-x-2 md:hidden">
          <button
            onClick={() => handleNavClick('contact')}
            className="bg-[#2D6A4F] text-white text-xs font-semibold px-3 py-1.5 rounded-full"
          >
            Contact
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-[#1B4332] hover:bg-green-50 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-green-100 px-5 py-4 shadow-lg animate-in slide-in-from-top duration-150">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2 px-3 rounded-xl text-sm font-medium transition-colors ${
                  activeTab === item.id
                    ? 'bg-[#D8F3DC] text-[#1B4332] font-bold'
                    : 'text-[#2D3A2D] hover:bg-green-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full bg-[#2D6A4F] hover:bg-[#1B4332] text-white text-sm font-semibold py-2.5 rounded-xl transition-all flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

