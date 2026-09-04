import React, { useState } from 'react';
import { Shield, Home, Sparkles, Layers, CheckCircle2, ChevronRight, AlertTriangle, Droplets } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface InteractiveDefenseProps {
  onOpenBooking: () => void;
}

interface DefenseZone {
  id: string;
  name: string;
  pestsBlocked: string[];
  protocol: string;
  chemicalGrade: string;
  duration: string;
  color: string;
  summary: string;
  depthOffset: string;
}

export const InteractiveDefense: React.FC<InteractiveDefenseProps> = ({ onOpenBooking }) => {
  const [selectedZone, setSelectedZone] = useState<string>('pre-slab');

  const defenseZones: DefenseZone[] = [
    {
      id: 'pre-slab',
      name: '1. Pre-Slab & Soil Sub-Barrier',
      pestsBlocked: ['Subterranean Termites', 'Soil Beetles', 'Burrowing Ants'],
      protocol: 'Continuous liquid termiticide trenching and sub-slab horizontal vapor saturation before and after concrete pour.',
      chemicalGrade: 'EPA Class-1 Soil Bonding (100% Non-Volatile)',
      duration: 'Up to 10-Year Soil Barrier Warranty',
      color: '#1B4332',
      summary: 'Houston’s humid soil is prime habitat for subterranean termites. We saturate the foundation base to seal structural access.',
      depthOffset: 'translate-y-6',
    },
    {
      id: 'perimeter',
      name: '2. Exterior Yard & Garden Ring',
      pestsBlocked: ['Mosquitoes', 'Fire Ants', 'Ticks & Fleas', 'Wasps'],
      protocol: 'Micro-droplet botanical foliage misting targeting shaded shrubbery resting zones + standing water eco-larvicides.',
      chemicalGrade: 'Organic-derived Botanical Pyrethrins (Bee-Safe)',
      duration: '30-45 Day Extended Protection',
      color: '#2D6A4F',
      summary: 'Stops mosquitoes and outdoor insects before they ever approach your patio, windows, or front door.',
      depthOffset: 'translate-y-3',
    },
    {
      id: 'openings',
      name: '3. Windows, Doors & Expansion Joints',
      pestsBlocked: ['German & American Cockroaches', 'Spiders', 'Crickets'],
      protocol: 'Micro-encapsulated water-resistant residual barrier sprayed along window frames, door thresholds, and weep holes.',
      chemicalGrade: 'Odorless Micro-Encapsulated Suspension',
      duration: '90-Day Weatherproof Seal',
      color: '#40916C',
      summary: 'Weep holes and door sills are Houston’s #1 insect highway. Our microscopic capsules adhere to insect exoskeletons.',
      depthOffset: 'translate-y-0',
    },
    {
      id: 'interior',
      name: '4. Living Spaces & Kitchen Sanity',
      pestsBlocked: ['Kitchen Roaches', 'Ghost Ants', 'Silverfish', 'Pantry Pests'],
      protocol: 'Precision gel bait placement inside wall voids, appliance motor housings, and pipe penetrations without aerosol fumes.',
      chemicalGrade: 'Food-Safe Mineral Borate & Target Bait Gels',
      duration: 'Continuous Colony Disruption',
      color: '#52796F',
      summary: 'Zero airborne chemicals. 100% child-safe and pet-safe application targeting only hidden pest nesting crevices.',
      depthOffset: '-translate-y-3',
    },
    {
      id: 'attic',
      name: '5. Attic, Soffits & Roofline Exclusion',
      pestsBlocked: ['Roof Rats', 'Mice', 'Raccoons', 'Birds & Grackles'],
      protocol: '16-gauge galvanized steel mesh installation across all roof louvers, fascia boards, and attic vents with pheromone neutralization.',
      chemicalGrade: 'Heavy-Duty Physical Steel Exclusion',
      duration: 'Permanent Structural Seal',
      color: '#1B4332',
      summary: 'Houston heat drives rodents into cool attic insulation. We physically close every gap greater than 1/4 inch.',
      depthOffset: '-translate-y-6',
    },
  ];

  const currentZone = defenseZones.find((z) => z.id === selectedZone) || defenseZones[0];

  return (
    <section id="defense" className="py-16 sm:py-20 bg-white border-y border-green-50 relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D8F3DC] rounded-full filter blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#B7E4C7] rounded-full filter blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header with Natural Tones aesthetics - Clean, No Eyebrow */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B4332] tracking-tight">
            5-Layer Biological Home Defense Barrier
          </h2>
          <p className="text-base sm:text-lg text-[#52796F] mt-3 leading-relaxed">
            Pests never invade at random. Explore how our systematic Houston defense shield secures your property from sub-soil to roof peak.
          </p>
        </div>

        {/* Interactive 3D Model & Control Center */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive 3D Layer Stack */}
          <div className="lg:col-span-6 bg-[#F7FBF7] rounded-[32px] p-6 sm:p-8 border border-green-100 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm font-bold text-[#1B4332]">
                  Select Structural Layer
                </span>
                <span className="text-xs text-[#52796F] bg-white px-3 py-1 rounded-full border border-green-100 font-medium">
                  Houston Climate Spec
                </span>
              </div>

              {/* 3D Stacked Layers */}
              <div className="space-y-3">
                {defenseZones.map((zone, idx) => {
                  const isSelected = selectedZone === zone.id;
                  return (
                    <button
                      key={zone.id}
                      onClick={() => setSelectedZone(zone.id)}
                      className={`w-full text-left p-4 rounded-2xl transition-all duration-200 flex items-center justify-between border ${
                        isSelected
                          ? 'bg-[#1B4332] text-white border-[#1B4332] shadow-md scale-[1.01]'
                          : 'bg-white text-[#2D3A2D] border-green-100 hover:border-[#2D6A4F] hover:bg-green-50/50'
                      }`}
                    >
                      <div className="flex items-center space-x-3.5">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm ${
                            isSelected
                              ? 'bg-[#D8F3DC] text-[#1B4332]'
                              : 'bg-green-50 text-[#2D6A4F]'
                          }`}
                        >
                          {idx + 1}
                        </div>
                        <div>
                          <div className={`font-bold text-sm ${isSelected ? 'text-white' : 'text-[#1B4332]'}`}>
                            {zone.name.split('. ')[1]}
                          </div>
                          <div className={`text-xs ${isSelected ? 'text-[#B7E4C7]' : 'text-[#52796F]'}`}>
                            Blocks: {zone.pestsBlocked.join(', ')}
                          </div>
                        </div>
                      </div>

                      <ChevronRight
                        className={`w-5 h-5 transition-transform ${
                          isSelected ? 'text-[#B7E4C7] translate-x-1' : 'text-gray-300'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Houston Fact Box */}
            <div className="mt-8 bg-white p-4 rounded-2xl border border-green-100 flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0 text-[#2D6A4F]">
                <Droplets className="w-5 h-5" />
              </div>
              <div className="text-xs text-[#52796F]">
                <strong className="text-[#1B4332] block">Houston Moisture & Soil Factor:</strong>
                Sub-tropical humidity requires soil-binding chemical bonds that won't leach away during Gulf rainstorms.
              </div>
            </div>
          </div>

          {/* Right Column: Zone Deep-Dive Detail Card in Natural Tones Deep Green */}
          <div className="lg:col-span-6 bg-[#1B4332] text-white rounded-[32px] p-6 sm:p-9 shadow-xl border-[6px] border-white flex flex-col justify-between relative overflow-hidden">
            
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2D6A4F]/30 rounded-full filter blur-2xl pointer-events-none" />
            
            <div className="relative z-10">
              
              <div className="flex justify-between items-start mb-6">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-semibold text-[#D8F3DC]">
                  <Sparkles className="w-3.5 h-3.5 text-[#B7E4C7]" />
                  <span>Layer Analysis Protocol</span>
                </div>
                <span className="text-xs font-bold bg-[#D8F3DC] text-[#1B4332] px-3 py-1 rounded-full">
                  Verified Safe
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                {currentZone.name}
              </h3>

              <p className="text-sm sm:text-base text-[#D8F3DC]/90 leading-relaxed mb-6">
                {currentZone.summary}
              </p>

              {/* Targeted Pests Badges */}
              <div className="mb-6">
                <span className="text-xs uppercase tracking-wider text-[#B7E4C7] font-bold block mb-2">
                  Targeted & Prevented Pests:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentZone.pestsBlocked.map((pest, pIdx) => (
                    <span
                      key={pIdx}
                      className="bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs px-3 py-1 rounded-full font-medium"
                    >
                      ✓ {pest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Protocol Spec Box */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/20 space-y-3 mb-6">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#B7E4C7] font-bold">Treatment Protocol</div>
                  <div className="text-sm font-medium text-white mt-0.5">{currentZone.protocol}</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-white/15">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#B7E4C7] font-bold">Formula Grade</div>
                    <div className="text-xs text-[#D8F3DC] font-semibold">{currentZone.chemicalGrade}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#B7E4C7] font-bold">Residual Longevity</div>
                    <div className="text-xs text-[#D8F3DC] font-semibold">{currentZone.duration}</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Booking Trigger */}
            <div className="relative z-10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/15">
              <div className="text-xs text-[#D8F3DC]">
                Included in our <strong className="text-white">Houston Free Inspection</strong>
              </div>
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto bg-[#D8F3DC] text-[#1B4332] px-6 py-3 rounded-2xl font-bold text-sm shadow-lg hover:bg-white hover:scale-105 transition-all flex items-center justify-center space-x-2"
              >
                <span>Schedule This Layer</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
