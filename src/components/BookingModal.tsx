import React, { useState } from 'react';
import { ServiceItem } from '../types';
import { BUSINESS_INFO } from '../data/servicesData';
import { ShieldCheck, Check, Calendar, Phone, MessageCircle, X, Sparkles, MapPin } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: ServiceItem | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    propertyType: 'single-family',
    pestType: preselectedService ? preselectedService.name : 'Ants & Insects',
    preferredTime: 'Morning (8am - 12pm)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello Benjamín Alexander Pest Control!%0A%0AI would like to book a FREE Inspection in Houston:%0A- Name: ${encodeURIComponent(formData.name || 'Resident')}%0A- Phone: ${encodeURIComponent(formData.phone || '')}%0A- Address: ${encodeURIComponent(formData.address || 'Houston, TX')}%0A- Property Type: ${encodeURIComponent(formData.propertyType)}%0A- Pest Concern: ${encodeURIComponent(formData.pestType)}%0A- Preferred Time: ${encodeURIComponent(formData.preferredTime)}`;
    return `https://wa.me/${BUSINESS_INFO.rawPhone}?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full border border-green-100 shadow-2xl overflow-hidden my-8 animate-in zoom-in-95 duration-200">
        
        {/* Header matching Natural Tones */}
        <div className="bg-[#1B4332] p-6 sm:p-7 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <h3 className="text-2xl font-extrabold text-white">
            Schedule Your Houston Inspection
          </h3>
          <p className="text-xs sm:text-sm text-[#D8F3DC]/90 mt-1">
            Zero cost, zero obligation. Benjamín Alexander will conduct a thorough on-site evaluation.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-[#D8F3DC] text-[#2D6A4F] rounded-full flex items-center justify-center mx-auto shadow-md">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <h4 className="text-2xl font-bold text-[#1B4332]">
              Inspection Request Received!
            </h4>
            <p className="text-sm text-[#52796F] max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-[#1B4332]">{formData.name}</strong>. Benjamín Alexander has received your request for <strong>{formData.pestType}</strong> at <strong>{formData.address || 'your Houston address'}</strong>.
            </p>

            <div className="bg-[#F7FBF7] p-4 rounded-2xl border border-green-100 max-w-md mx-auto text-xs text-left space-y-1.5 text-[#40514E]">
              <div><strong>Status:</strong> Dispatched to technician queue</div>
              <div><strong>Response Window:</strong> Under 30 minutes during business hours</div>
              <div><strong>Direct Contact:</strong> (346) 846-3170</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2D6A4F] text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-md hover:bg-[#1B4332] transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 text-[#B7E4C7]" />
                <span>Confirm Instantly via WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-2xl border border-gray-200 text-[#52796F] font-semibold text-sm hover:bg-gray-50"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            
            {/* Step 1: Property Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#52796F] mb-2">
                Property Type in Houston Area:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'single-family', label: 'Single Home' },
                  { id: 'apartment', label: 'Apartment' },
                  { id: 'commercial', label: 'Commercial' },
                  { id: 'pre-slab', label: 'Pre-Slab' },
                ].map((type) => (
                  <button
                    type="button"
                    key={type.id}
                    onClick={() => setFormData({ ...formData, propertyType: type.id })}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                      formData.propertyType === type.id
                        ? 'bg-[#2D6A4F] text-white border-[#2D6A4F]'
                        : 'bg-[#F7FBF7] text-[#2D3A2D] border-green-100 hover:border-[#2D6A4F]'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Primary Pest Issue */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#52796F] mb-1.5">
                Primary Pest Concern:
              </label>
              <select
                value={formData.pestType}
                onChange={(e) => setFormData({ ...formData, pestType: e.target.value })}
                className="w-full bg-[#F7FBF7] border border-green-100 rounded-xl p-3 text-sm font-semibold text-[#1B4332] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
              >
                <option value="Ants & Insects">Ants Removal & Eradication</option>
                <option value="Termite Inspection">Termite Inspection & Defense</option>
                <option value="Pre-Slab Construction">Pre-Slab Soil Barrier (Before Pour)</option>
                <option value="Cockroaches & Crickets">Cockroaches & Crickets Eradication</option>
                <option value="Rodents & Wildlife">Rodents & Attic Wildlife Exclusion</option>
                <option value="Bed Bug Removal">Bed Bug Thermal Remediation</option>
                <option value="Mosquito Yard Barrier">Mosquito Barrier System</option>
                <option value="Commercial Pest Defense">Commercial / Restaurant IPM Program</option>
                <option value="General Preventative">General Preventative Inspection</option>
              </select>
            </div>

            {/* Step 3: Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#52796F] mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maria Gonzalez"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#F7FBF7] border border-green-100 rounded-xl p-3 text-sm text-[#2D3A2D] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#52796F] mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(346) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#F7FBF7] border border-green-100 rounded-xl p-3 text-sm text-[#2D3A2D] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#52796F] mb-1">
                Houston Street Address / Neighborhood *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. 1420 Heights Blvd, Houston, TX"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full bg-[#F7FBF7] border border-green-100 rounded-xl p-3 text-sm text-[#2D3A2D] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
              />
            </div>

            {/* Preferred Timing */}
            <div>
              <label className="block text-xs font-bold text-[#52796F] mb-1">
                Preferred Inspection Window:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  'Morning (8am - 12pm)',
                  'Afternoon (12pm - 4pm)',
                  'Emergency / ASAP',
                ].map((time) => (
                  <button
                    type="button"
                    key={time}
                    onClick={() => setFormData({ ...formData, preferredTime: time })}
                    className={`p-2 rounded-xl text-[11px] font-semibold border text-center transition-all ${
                      formData.preferredTime === time
                        ? 'bg-[#1B4332] text-white border-[#1B4332]'
                        : 'bg-[#F7FBF7] text-[#52796F] border-green-100 hover:border-[#2D6A4F]'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 bg-[#2D6A4F] text-white py-3.5 rounded-2xl font-bold text-sm hover:bg-[#1B4332] shadow-md transition-all flex items-center justify-center space-x-2"
              >
                <ShieldCheck className="w-4 h-4 text-[#B7E4C7]" />
                <span>Submit Free Inspection</span>
              </button>

              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1B4332] text-[#D8F3DC] hover:text-white px-5 py-3.5 rounded-2xl font-bold text-xs flex items-center justify-center space-x-1.5 transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#B7E4C7]" />
                <span>Send via WhatsApp</span>
              </a>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
