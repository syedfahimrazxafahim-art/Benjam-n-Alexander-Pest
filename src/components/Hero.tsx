import React, { useState } from 'react';
import { Shield, Clock, CheckCircle2, Phone, MessageCircle, Bug, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreDefense: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreDefense }) => {
  const [activePestShield, setActivePestShield] = useState<'termites' | 'ants' | 'roaches' | 'rodents'>('termites');
  const [protectionLevel, setProtectionLevel] = useState<number>(98);

  const pestShields = [
    { id: 'termites', label: 'Termites', efficacy: '100% Barrier', desc: 'Pre-slab & sub-soil perimeter defense' },
    { id: 'ants', label: 'Ants', efficacy: 'Colony Eradication', desc: 'Deep-nest transfer without toxic sprays' },
    { id: 'roaches', label: 'Cockroaches', efficacy: 'Zero Residual', desc: 'Kitchen & pantry micro-barrier gel' },
    { id: 'rodents', label: 'Rodents', efficacy: 'Full Exclusion', desc: 'Roofline & vent galvanized steel seals' },
  ] as const;

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-[#F7FBF7]">
      {/* Soft natural ambient blurred glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#D8F3DC] rounded-full filter blur-3xl opacity-50 -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#B7E4C7] rounded-full filter blur-3xl opacity-30 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition & Natural Tones Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Display Headline with High-Contrast Deep Green & Italic Accent */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-[#1B4332] mb-6 tracking-tight">
              Total Home Protection,{' '}
              <span className="text-[#52796F] font-medium italic block sm:inline">
                Guaranteed.
              </span>
            </h1>

            {/* Natural Tones Subtitle */}
            <p className="text-base sm:text-lg text-[#52796F] mb-8 max-w-xl leading-relaxed">
              Eco-friendly, professional, and reliable pest solutions for Houston homes.
              We don't just treat pests; we create lasting biological barriers for your family’s peace of mind.
            </p>

            {/* Key Value Cards from the Natural Tones Theme */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-xl">
              
              {/* Safety First Card */}
              <div className="flex items-center bg-white p-4 rounded-2xl shadow-sm border border-green-50 hover:border-green-200 transition-all">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Shield className="w-6 h-6 text-[#2D6A4F]" />
                </div>
                <div>
                  <div className="font-bold text-[#1B4332] text-sm sm:text-base">Child & Pet Safe</div>
                  <div className="text-xs text-[#52796F]">Botanical-based options</div>
                </div>
              </div>

              {/* Availability Card */}
              <div className="flex items-center bg-white p-4 rounded-2xl shadow-sm border border-green-50 hover:border-green-200 transition-all">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#2D6A4F]" />
                </div>
                <div>
                  <div className="font-bold text-[#1B4332] text-sm sm:text-base">24-Hour Response</div>
                  <div className="text-xs text-[#52796F]">Direct owner dispatch</div>
                </div>
              </div>

            </div>

            {/* Call to Action Row */}
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                onClick={onOpenBooking}
                className="bg-[#2D6A4F] text-white px-7 py-3.5 rounded-full hover:bg-[#1B4332] transition-all duration-200 shadow-md hover:shadow-lg font-bold text-sm flex items-center space-x-2.5 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book Free Inspection</span>
                <ArrowRight className="w-4 h-4 text-[#B7E4C7]" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="bg-white text-[#1B4332] border border-green-200 hover:border-[#2D6A4F] px-6 py-3.5 rounded-full font-bold text-sm flex items-center space-x-2 transition-all shadow-xs hover:bg-green-50/50"
              >
                <Phone className="w-4 h-4 text-[#2D6A4F]" />
                <span>Call (346) 846-3170</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1B4332] text-[#D8F3DC] hover:text-white px-5 py-3.5 rounded-full font-semibold text-xs flex items-center space-x-1.5 transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#B7E4C7]" />
                <span>WhatsApp Quote</span>
              </a>
            </div>

            {/* Service Area Micro-Notice */}
            <div className="mt-6 flex items-center space-x-2 text-xs text-[#52796F]">
              <CheckCircle2 className="w-4 h-4 text-[#2D6A4F]" />
              <span>Serving Houston, Katy, Sugar Land, Pearland, Memorial & surrounding communities</span>
            </div>

          </div>

          {/* Right Column: Interactive 3D Shield Card matching Natural Tones Container */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient backlight glow */}
            <div className="absolute w-80 h-80 bg-[#D8F3DC] rounded-full filter blur-3xl opacity-60 -z-10" />

            {/* Dark Green Hero Card with 12px white border and curved corners */}
            <div className="relative w-full min-h-[480px] bg-[#1B4332] rounded-[36px] sm:rounded-[40px] shadow-2xl overflow-hidden flex flex-col justify-between p-6 sm:p-8 border-[8px] sm:border-[12px] border-white transition-all">
              
              {/* Background gradient & radar scan ripple */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332] via-[#1B4332]/85 to-[#2D6A4F]/30 z-0 pointer-events-none" />
              
              {/* 3D Radar Circle Graphics */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#52796F]/20 rounded-full animate-ping pointer-events-none" style={{ animationDuration: '4s' }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#B7E4C7]/20 rounded-full pointer-events-none" />

              {/* Card Header Content */}
              <div className="relative z-20 flex justify-between items-center">
                <div className="inline-flex items-center space-x-1.5 bg-white/15 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[#D8F3DC] border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-[#B7E4C7] animate-pulse" />
                  <span>3D Active Defense Radar</span>
                </div>
                <span className="text-xs font-bold text-[#1B4332] bg-[#D8F3DC] px-2.5 py-1 rounded-full">
                  100% Free Inspection
                </span>
              </div>

              {/* Card Center: Interactive Shield Selector */}
              <div className="relative z-20 my-6 text-center">
                <div className="inline-block p-4 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-inner mb-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-[#B7E4C7] flex items-center justify-center">
                    <Shield className="w-14 h-14 drop-shadow-[0_0_12px_rgba(183,228,199,0.5)]" />
                  </div>
                </div>

                <div className="text-white font-bold text-lg sm:text-xl">
                  Benjamín Alexander Shield
                </div>
                <p className="text-xs text-[#D8F3DC]/80 mt-1 max-w-xs mx-auto">
                  {pestShields.find(p => p.id === activePestShield)?.desc}
                </p>

                {/* Pest Selector Tabs */}
                <div className="grid grid-cols-4 gap-1.5 mt-5 bg-black/20 p-1 rounded-2xl backdrop-blur-xs">
                  {pestShields.map((pest) => (
                    <button
                      key={pest.id}
                      onClick={() => {
                        setActivePestShield(pest.id);
                        setProtectionLevel(pest.id === 'termites' ? 100 : pest.id === 'ants' ? 99 : 98);
                      }}
                      className={`py-1.5 px-2 rounded-xl text-[11px] font-bold transition-all ${
                        activePestShield === pest.id
                          ? 'bg-[#D8F3DC] text-[#1B4332] shadow-sm'
                          : 'text-white/70 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {pest.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom Elements: Active Shield Progress & Licensed Badge */}
              <div className="relative z-20 space-y-4">
                
                {/* Active Shield Protection Progress from Natural Tones design */}
                <div className="bg-white/15 backdrop-blur-md p-4 rounded-2xl border border-white/25">
                  <div className="flex justify-between items-center text-white text-xs font-bold uppercase tracking-wider mb-2">
                    <span className="flex items-center space-x-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#B7E4C7]" />
                      <span>Active Shield Protection</span>
                    </span>
                    <span className="text-[#B7E4C7] font-extrabold">{protectionLevel}%</span>
                  </div>
                  <div className="h-2.5 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#B7E4C7] shadow-[0_0_10px_#B7E4C7] transition-all duration-500 rounded-full"
                      style={{ width: `${protectionLevel}%` }}
                    />
                  </div>
                </div>

                {/* Licensed & Insured Professionals Badge */}
                <div className="flex items-center space-x-3 text-white">
                  <div className="w-8 h-8 rounded-full bg-[#40916C] flex items-center justify-center shadow-lg flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm leading-snug">Licensed & Insured Professionals</span>
                    <span className="text-[10px] text-[#B7E4C7] font-normal">Houston, TX Texas Dept. of Agriculture Standards</span>
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
