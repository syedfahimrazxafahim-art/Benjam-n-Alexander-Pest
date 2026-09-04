export interface ServiceItem {
  id: string;
  name: string;
  category: 'residential' | 'commercial' | 'specialized';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  inspectionTime: string;
  efficacyRate: string;
  ecoRating: string;
}

export interface WorkGalleryItem {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'pre-slab' | 'safety';
  description: string;
  location: string;
  svgIcon: string;
  badge: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  neighborhood: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface InspectionBooking {
  name: string;
  phone: string;
  email: string;
  address: string;
  propertyType: 'single-family' | 'apartment' | 'commercial' | 'pre-slab';
  pestIssues: string[];
  preferredTime: string;
  notes: string;
}
