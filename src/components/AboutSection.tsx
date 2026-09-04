import React from 'react';
import { Heart, Award, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-[#F7FBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Story & Principles - Clean, No Eyebrow */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B4332] tracking-tight leading-[1.15]">
              Protecting Houston Homes,{' '}
              <span className="text-[#52796F] font-medium italic block">
                Protecting What Truly Matters.
              </span>
            </h2>

            <p className="text-base text-[#52796F] leading-relaxed">
              Founded by Benjamín Alexander, our company was built on a simple, uncompromising promise:
              deliver pest-free living environments to Houston families without saturating their homes with toxic, hazardous chemicals.
            </p>

            <p className="text-sm text-[#2D3A2D] leading-relaxed">
              In Texas, pest control often meant indiscriminate spraying of harsh chemicals. We do things differently.
              By applying modern biological science, precision entry point exclusion, and targeted botanical baiting,
              we stop pests outside your foundation before they can cross your threshold.
            </p>

            {/* Core Values Bullets in Natural Tones Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-2xl border border-green-100 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center text-[#2D6A4F] mb-3">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#1B4332] text-sm">Family & Pet Centric</h4>
                <p className="text-xs text-[#52796F] mt-1">
                  Formulas specifically selected to be safe around toddlers, infants, dogs, and cats.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-green-100 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center text-[#2D6A4F] mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#1B4332] text-sm">Owner On-Site Quality</h4>
                <p className="text-xs text-[#52796F] mt-1">
                  You deal directly with licensed professionals who care about long-term solutions, not rushed quotas.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="bg-[#2D6A4F] text-white px-7 py-3 rounded-full hover:bg-[#1B4332] transition-colors shadow-sm font-semibold text-sm"
              >
                Schedule Free Assessment
              </button>
              <a
                href={BUSINESS_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#1B4332] border border-green-200 hover:border-[#2D6A4F] px-5 py-3 rounded-full font-semibold text-xs flex items-center space-x-2 transition-colors"
              >
                <span>Connect on Facebook ({BUSINESS_INFO.facebookDisplay})</span>
              </a>
            </div>

          </div>

          {/* Right Column: Properly Framed Team Photo and Trust Card */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* The Official Team Photo Framed Beautifully */}
            <div className="bg-white rounded-3xl p-3 sm:p-4 border border-green-100 shadow-md">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#1B4332]/5">
                <img
                  src="https://res.cloudinary.com/fzobzdco/image/upload/v1788550159/team6789087.jpg"
                  alt="Benjamín Alexander and Family Team"
                  className="w-full h-full object-cover object-center hover:scale-102 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-3 text-center">
                <div className="text-sm font-bold text-[#1B4332]">
                  The Alexander Family & Field Team
                </div>
                <div className="text-xs text-[#52796F] mt-0.5">
                  Proudly protecting homes and families across Houston, Texas
                </div>
              </div>
            </div>

            {/* Direct Houston Contact & Accountability Card */}
            <div className="bg-[#1B4332] text-white rounded-3xl p-6 shadow-md border border-green-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3 bg-white/10 p-3.5 rounded-2xl border border-white/15">
                  <MapPin className="w-5 h-5 text-[#B7E4C7] flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="text-white/70 block">Dispatch Center:</span>
                    <strong className="text-white">{BUSINESS_INFO.address}</strong>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-white/10 p-3.5 rounded-2xl border border-white/15">
                  <Phone className="w-5 h-5 text-[#B7E4C7] flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="text-white/70 block">Direct Emergency Phone:</span>
                    <strong className="text-white">(346) 846-3170</strong>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

