import React, { useState } from 'react';
import { SERVICES } from '../data/servicesData';
import { ServiceItem } from '../types';
import { 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  Calendar, 
  Leaf, 
  Layers, 
  Bug, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface ServicesSectionProps {
  onOpenBooking: () => void;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenBooking,
  onSelectService,
}) => {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial' | 'specialized'>('all');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const filteredServices = filter === 'all' 
    ? SERVICES 
    : SERVICES.filter((s) => s.category === filter);

  return (
    <section id="services" className="py-16 sm:py-20 bg-[#F7FBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B4332] tracking-tight">
              Specialized Pest Control Services
            </h2>
            <p className="text-base text-[#52796F] mt-2 max-w-xl">
              Scientifically engineered protocols for Houston's climate, protecting properties with zero lingering airborne toxins.
            </p>
          </div>

          {/* Filter Pills in Natural Tones theme */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0 bg-white p-1.5 rounded-full border border-green-100 shadow-xs self-start md:self-auto">
            {(['all', 'residential', 'commercial', 'specialized'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all capitalize ${
                  filter === cat
                    ? 'bg-[#2D6A4F] text-white shadow-xs'
                    : 'text-[#52796F] hover:text-[#1B4332] hover:bg-green-50'
                }`}
              >
                {cat === 'all' ? 'All Services' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-green-100 shadow-xs hover:shadow-md hover:border-[#2D6A4F]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Card Top Category & Eco Badge */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#2D6A4F] bg-[#D8F3DC] px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                  <span className="text-[11px] font-semibold text-[#52796F] flex items-center space-x-1">
                    <Leaf className="w-3.5 h-3.5 text-[#40916C]" />
                    <span>{service.ecoRating}</span>
                  </span>
                </div>

                {/* Service Name */}
                <h3 className="text-xl font-bold text-[#1B4332] group-hover:text-[#2D6A4F] transition-colors mb-2">
                  {service.name}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-[#52796F] leading-relaxed mb-5">
                  {service.shortDesc}
                </p>

                {/* Core Features list */}
                <div className="space-y-2 mb-6 pt-4 border-t border-green-50">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-center text-xs text-[#2D3A2D]">
                      <Check className="w-4 h-4 text-[#2D6A4F] mr-2 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="pt-4 border-t border-green-50 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalService(service)}
                  className="text-xs font-bold text-[#2D6A4F] hover:text-[#1B4332] transition-colors flex items-center space-x-1"
                >
                  <span>Protocol Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => {
                    onSelectService(service);
                    onOpenBooking();
                  }}
                  className="bg-[#2D6A4F] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#1B4332] transition-colors shadow-xs"
                >
                  Book Free Inspection
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Free Inspection Guarantee Banner */}
        <div className="mt-12 bg-[#1B4332] rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg border-[6px] border-white">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold">Unsure which pest is causing damage?</h3>
            <p className="text-sm text-[#D8F3DC]/90 max-w-xl">
              Benjamín Alexander personally inspects your property with acoustic and moisture diagnostic tools at zero obligation.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="bg-white/15 hover:bg-white/25 border border-white/30 text-white px-5 py-3 rounded-2xl font-bold text-sm transition-colors flex items-center space-x-2"
            >
              <PhoneCall className="w-4 h-4 text-[#B7E4C7]" />
              <span>(346) 846-3170</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="bg-[#D8F3DC] text-[#1B4332] hover:bg-white px-6 py-3 rounded-2xl font-bold text-sm shadow-md transition-all hover:scale-105"
            >
              Claim Free Inspection
            </button>
          </div>
        </div>

      </div>

      {/* Protocol Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-green-100 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#2D6A4F] bg-[#D8F3DC] px-3 py-1 rounded-full">
                  {activeModalService.category} protocol
                </span>
                <h3 className="text-2xl font-bold text-[#1B4332] mt-2">
                  {activeModalService.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalService(null)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-full text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-[#52796F] leading-relaxed mb-6">
              {activeModalService.fullDesc}
            </p>

            <div className="bg-[#F7FBF7] rounded-2xl p-4 border border-green-100 space-y-2.5 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1B4332]">
                Key Application Features:
              </div>
              {activeModalService.features.map((feat, idx) => (
                <div key={idx} className="flex items-center text-xs text-[#2D3A2D]">
                  <Check className="w-4 h-4 text-[#2D6A4F] mr-2 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6 text-center">
              <div className="bg-green-50 p-2.5 rounded-xl">
                <div className="text-[10px] uppercase text-[#52796F] font-bold">Inspection</div>
                <div className="text-xs font-bold text-[#1B4332] mt-0.5">{activeModalService.inspectionTime}</div>
              </div>
              <div className="bg-green-50 p-2.5 rounded-xl">
                <div className="text-[10px] uppercase text-[#52796F] font-bold">Efficacy</div>
                <div className="text-xs font-bold text-[#1B4332] mt-0.5">{activeModalService.efficacyRate}</div>
              </div>
              <div className="bg-green-50 p-2.5 rounded-xl">
                <div className="text-[10px] uppercase text-[#52796F] font-bold">Eco Grade</div>
                <div className="text-xs font-bold text-[#1B4332] mt-0.5">{activeModalService.ecoRating}</div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  onSelectService(activeModalService);
                  setActiveModalService(null);
                  onOpenBooking();
                }}
                className="flex-1 bg-[#2D6A4F] text-white py-3 rounded-2xl font-bold text-sm hover:bg-[#1B4332] shadow-md transition-all"
              >
                Schedule Free Inspection
              </button>
              <button
                onClick={() => setActiveModalService(null)}
                className="px-5 py-3 rounded-2xl border border-gray-200 text-[#52796F] font-semibold text-sm hover:bg-gray-50"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
