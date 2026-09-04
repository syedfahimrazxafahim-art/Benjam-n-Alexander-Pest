import React from 'react';
import { BUSINESS_INFO } from '../data/servicesData';
import { BrandLogo } from './BrandLogo';
import { Phone, Mail, MapPin, Facebook, MessageCircle, ShieldCheck, Check } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onNavigate: (tabId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <footer id="contact" className="bg-white border-t border-green-50 pt-12 pb-8 px-4 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Grid matching Natural Tones layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Col 1: Brand & Work Thumbnail Showcase (col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <BrandLogo variant="dark" />
            <p className="text-xs text-[#52796F] leading-relaxed max-w-sm">
              Professional eco-friendly pest control, termite defense, and wildlife exclusion serving the Greater Houston metropolitan area. Protecting homes, protecting families.
            </p>

            {/* Our Pest Control Work Mini-Grid with Real Thumbnails */}
            <div>
              <h3 className="text-[#1B4332] font-bold text-xs mb-3">
                Our Pest Control Work
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { img: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788550242/b3.jpg', label: 'Clean PPE' },
                  { img: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788550680/b1.avif', label: 'Field' },
                  { img: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788550679/b2.webp', label: 'Shield' },
                  { img: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788550161/service1.jpg', label: 'Services' },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => onNavigate('gallery')}
                    className="aspect-square rounded-xl overflow-hidden border border-green-100 shadow-xs hover:border-[#2D6A4F] transition-all group relative bg-green-50"
                  >
                    <img
                      src={item.img}
                      alt={item.label}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Contact Info matching Natural Tones design (col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="text-[#1B4332] font-bold text-sm mb-4">
              Contact & Dispatch
            </h3>
            <div className="space-y-3.5">
              
              {/* Phone item */}
              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="flex items-center space-x-3 text-sm group"
              >
                <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#D8F3DC] transition-colors">
                  <Phone className="w-4 h-4 text-[#2D6A4F]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#52796F]">Direct Phone</span>
                  <span className="text-[#40514E] group-hover:text-[#1B4332] font-semibold">{BUSINESS_INFO.phone}</span>
                </div>
              </a>

              {/* Facebook item */}
              <a
                href={BUSINESS_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm group"
              >
                <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#D8F3DC] transition-colors">
                  <Facebook className="w-4 h-4 text-[#2D6A4F]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#52796F]">Facebook Page</span>
                  <span className="text-[#40514E] group-hover:text-[#1B4332] font-semibold">{BUSINESS_INFO.facebookDisplay}</span>
                </div>
              </a>

              {/* Email item */}
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center space-x-3 text-sm group"
              >
                <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#D8F3DC] transition-colors">
                  <Mail className="w-4 h-4 text-[#2D6A4F]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#52796F]">Email Support</span>
                  <span className="text-[#40514E] group-hover:text-[#1B4332] font-semibold text-xs truncate max-w-[180px]">{BUSINESS_INFO.email}</span>
                </div>
              </a>

              {/* Address item */}
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[#2D6A4F]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#52796F]">Mailing Address</span>
                  <span className="text-[#40514E] font-medium text-xs">{BUSINESS_INFO.address}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Col 3: Fast Support WhatsApp Card matching Natural Tones design (col-span-5) */}
          <div className="lg:col-span-5 bg-[#1B4332] rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border-[4px] border-white">
            <div className="space-y-1.5 text-center sm:text-left">
              <div className="text-xl sm:text-2xl font-bold">
                WhatsApp Support Available
              </div>
              <p className="text-sm text-[#D8F3DC] opacity-90">
                Get a free quote in minutes via direct chat.
              </p>
              <div className="text-[11px] text-[#B7E4C7] flex items-center justify-center sm:justify-start space-x-1 pt-1">
                <Check className="w-3.5 h-3.5" />
                <span>Response time typically under 15 mins</span>
              </div>
            </div>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D8F3DC] text-[#1B4332] px-6 py-3.5 rounded-2xl font-bold shadow-lg hover:scale-105 transition-transform flex items-center space-x-2 flex-shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-[#1B4332]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-green-100 flex flex-col sm:flex-row items-center justify-between text-xs text-[#52796F] gap-4">
          <p>© {new Date().getFullYear()} Benjamín Alexander Pest Control. All rights reserved. Houston, TX.</p>
          <div className="flex items-center space-x-6">
            <button onClick={() => onNavigate('home')} className="hover:text-[#1B4332]">Home</button>
            <button onClick={() => onNavigate('services')} className="hover:text-[#1B4332]">Services</button>
            <button onClick={() => onNavigate('defense')} className="hover:text-[#1B4332]">3D Defense</button>
            <button onClick={() => onNavigate('gallery')} className="hover:text-[#1B4332]">Our Work</button>
            <button onClick={() => onNavigate('about')} className="hover:text-[#1B4332]">About</button>
            <button onClick={() => onNavigate('contact')} className="hover:text-[#1B4332]">Contact</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
