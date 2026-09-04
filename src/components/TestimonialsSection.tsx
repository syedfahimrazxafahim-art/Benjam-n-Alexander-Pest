import React from 'react';
import { TESTIMONIALS } from '../data/servicesData';
import { Star, CheckCircle, MessageSquareQuote, MapPin } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-20 bg-white border-t border-green-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header - Clean, No Eyebrow */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B4332] tracking-tight">
            Trusted by Houston Homeowners
          </h2>
          <p className="text-base text-[#52796F] mt-2">
            Real feedback from local residents and property managers who trust Benjamín Alexander for safe, enduring pest defense.
          </p>
        </div>

        {/* Reviews Grid in Natural Tones Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-[#F7FBF7] rounded-3xl p-6 sm:p-8 border border-green-100 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Verification Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#2D6A4F] text-[#2D6A4F]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-[#2D6A4F] bg-[#D8F3DC] px-2.5 py-0.5 rounded-full flex items-center space-x-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified Client</span>
                  </span>
                </div>

                {/* Comment */}
                <p className="text-sm text-[#2D3A2D] leading-relaxed italic mb-6">
                  "{test.comment}"
                </p>
              </div>

              {/* Author & Service Meta */}
              <div className="pt-4 border-t border-green-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-[#1B4332]">{test.name}</h4>
                  <div className="text-xs text-[#52796F] flex items-center space-x-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#2D6A4F]" />
                    <span>{test.neighborhood}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-semibold text-[#2D6A4F] bg-white px-2.5 py-1 rounded-lg border border-green-100">
                    {test.service}
                  </span>
                  <div className="text-[10px] text-[#52796F] mt-1">{test.date}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
