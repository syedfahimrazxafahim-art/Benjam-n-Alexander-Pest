import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/servicesData';
import { WorkGalleryItem } from '../types';
import { MapPin, Eye, CheckCircle, X } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<WorkGalleryItem | null>(null);

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white border-t border-green-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Clean, No Eyebrow Label */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B4332] tracking-tight">
              Our Pest Control Work
            </h2>
            <p className="text-base text-[#52796F] mt-2 max-w-xl">
              Authentic field operations, certified equipment, specialized treatments, and protective barriers across Houston.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0 bg-[#F7FBF7] p-1.5 rounded-full border border-green-100 shadow-xs self-start md:self-auto">
            {[
              { id: 'all', label: 'All Operations' },
              { id: 'residential', label: 'Residential' },
              { id: 'commercial', label: 'Commercial' },
              { id: 'safety', label: 'Safety & Exclusion' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-[#2D6A4F] text-white shadow-xs'
                    : 'text-[#52796F] hover:text-[#1B4332] hover:bg-green-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid with Properly Framed Real Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="bg-[#F7FBF7] rounded-3xl overflow-hidden border border-green-100/90 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between group"
            >
              {/* Properly Styled and Framed Image Container */}
              <div className="relative h-64 w-full bg-[#1B4332]/5 overflow-hidden flex items-center justify-center">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-[#1B4332] text-[11px] font-bold px-3 py-1 rounded-full shadow-xs border border-green-100 flex items-center space-x-1">
                  <MapPin className="w-3 h-3 text-[#2D6A4F]" />
                  <span>{item.location}</span>
                </div>

                {/* Hover Eye Overlay */}
                <div className="absolute inset-0 bg-[#1B4332]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2 text-white font-bold text-sm backdrop-blur-xs">
                  <Eye className="w-5 h-5 text-[#B7E4C7]" />
                  <span>View Full Photo</span>
                </div>
              </div>

              {/* Information Content */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-bold text-[#1B4332] mb-2 leading-snug group-hover:text-[#2D6A4F] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#52796F] leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-green-100 flex items-center justify-between text-xs">
                  <span className="text-[#2D6A4F] font-semibold flex items-center space-x-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>{item.badge}</span>
                  </span>
                  <span className="text-[#52796F] group-hover:text-[#1B4332] font-semibold">
                    View Details →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Case Detail Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden border border-green-100 shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Frame */}
            <div className="relative max-h-[420px] bg-black flex items-center justify-center overflow-hidden">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 text-white hover:text-white bg-black/60 hover:bg-black/80 p-2 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                className="w-full max-h-[420px] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 sm:p-7 space-y-4">
              <div>
                <div className="flex items-center justify-between text-xs text-[#52796F] mb-1">
                  <span>Houston Operation Area: {selectedItem.location}</span>
                  <span className="font-bold text-[#2D6A4F]">{selectedItem.badge}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1B4332]">
                  {selectedItem.title}
                </h3>
                <p className="text-sm text-[#2D3A2D] mt-2 leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="bg-[#2D6A4F] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#1B4332] transition-colors"
                >
                  Close Photo
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
