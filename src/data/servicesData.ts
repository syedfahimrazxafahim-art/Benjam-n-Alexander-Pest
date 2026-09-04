import { ServiceItem, WorkGalleryItem, Testimonial } from '../types';

export const BUSINESS_INFO = {
  name: 'Benjamín Alexander Pest Control',
  tagline: 'Protecting Homes. Protecting Families.',
  logoUrl: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788550156/LOGO56560.png',
  teamPhotoUrl: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788550159/team6789087.jpg',
  phone: '346-846-3170',
  rawPhone: '13468463170',
  whatsappUrl: 'https://wa.me/13468463170?text=Hello%20Benjam%C3%ADn%20Alexander%20Pest%20Control,%20I%20would%20like%20to%20request%20information%20for%20Houston.',
  email: 'dg.pestcontrol@outlook.com',
  facebook: 'https://www.facebook.com/Benji.alex',
  facebookDisplay: 'fb.me/Benji.alex',
  city: 'Houston, Texas',
  address: 'P.O. Box 45037, Houston, TX 77045',
  serviceAreas: ['Houston Metro', 'The Heights', 'Katy', 'Sugar Land', 'Pearland', 'Memorial', 'Cypress', 'The Woodlands', 'Spring', 'Pasadena'],
  hours: 'Mon - Sat: 7:00 AM - 8:00 PM | 24/7 Emergency Dispatch',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'ants-removal',
    name: 'Ants Removal & Eradication',
    category: 'residential',
    shortDesc: 'Deep-nest baiting and perimeter micro-barrier technology targeting carpenter, fire, and ghost ants.',
    fullDesc: 'Ant infestations in Texas require targeted queen disruption. We deploy undetectable, non-repellent eco-transfer formulas that workers carry directly back to the subterranean colonies, eliminating entire nests at the source without toxic fumes.',
    iconName: 'Ant',
    features: ['Queen colony extermination', 'Indoor crack & crevice sealing', 'Subterranean yard perimeter', 'Child & pet safe botanical formulas'],
    inspectionTime: '30-45 mins',
    efficacyRate: '99.8%',
    ecoRating: 'EPA Class-1 Certified'
  },
  {
    id: 'termites',
    name: 'Termite Inspections & Defense',
    category: 'residential',
    shortDesc: 'Subterranean termite bait barriers, thermal soil imaging, and perimeter liquid shield defense.',
    fullDesc: 'Houston humidity makes subterranean termites a constant threat to structural timber. Our specialized liquid soil trenches and advanced monitored bait stations create an impenetrable barrier around foundations, saving thousands in potential structural damage.',
    iconName: 'BugOff',
    features: ['Foundation perimeter trenching', 'Wood-destroying insect (WDI) reports', 'Bait station placement & tracking', 'Multi-year structural warranty'],
    inspectionTime: '60 mins',
    efficacyRate: '100%',
    ecoRating: 'Targeted Sub-Soil'
  },
  {
    id: 'pre-slab',
    name: 'Pre-Slab Construction Treatment',
    category: 'specialized',
    shortDesc: 'Mandatory pre-construction soil treatment before concrete pouring to lock out subterranean termites for decades.',
    fullDesc: 'Essential for Houston contractors, homebuilders, and remodelers. We treat horizontal soil beds and vertical foundation walls before concrete is poured, creating an unbreakable subterranean barrier compliant with local Texas building codes and HUD requirements.',
    iconName: 'Construction',
    features: ['Texas building code certified', 'Pre-pour vapor barrier treatment', 'Permit compliance documentation', 'Heavy-duty commercial warranties'],
    inspectionTime: 'Flexible scheduling',
    efficacyRate: '100%',
    ecoRating: 'Code Compliant'
  },
  {
    id: 'cockroach-insects',
    name: 'Cockroach & Crickets Control',
    category: 'residential',
    shortDesc: 'Precision gel baiting, growth regulators (IGR), and dust barrier applications for German and American roaches.',
    fullDesc: 'Cockroaches pose severe asthma and sanitation hazards. Our technicians use high-potency insect growth regulators (IGR) to halt reproduction while applying food-safe mineral dust in wall voids, kitchen backsplashes, and plumbing penetrations.',
    iconName: 'ShieldAlert',
    features: ['Kitchen & pantry sanitation focus', 'Insect growth regulator (IGR)', 'Drain & plumbing penetrations', 'Zero residual chemical scent'],
    inspectionTime: '45 mins',
    efficacyRate: '99.4%',
    ecoRating: 'Low-Toxicity Mineral'
  },
  {
    id: 'rodents-wildlife',
    name: 'Rodent & Wildlife Control',
    category: 'residential',
    shortDesc: 'Full attic exclusion, entry hole sealing, humane trapping, and sanitized insulation clean-up.',
    fullDesc: 'Rats, mice, squirrels, and raccoons frequently invade Houston attics during weather shifts. We identify and seal all exterior entry holes larger than 1/4 inch using galvanized steel mesh, followed by complete eviction, humane trapping, and sanitization.',
    iconName: 'Rat',
    features: ['100% full perimeter exclusion', 'Galvanized steel barrier sealing', 'Humane removal & relocation', 'Pheromone neutralization'],
    inspectionTime: '45-60 mins',
    efficacyRate: '99.9%',
    ecoRating: 'Non-toxic Exclusion'
  },
  {
    id: 'bed-bugs',
    name: 'Bed Bug Thermal & Precision Removal',
    category: 'residential',
    shortDesc: 'Comprehensive mattress, baseboard, and furniture remediation with residual preventive protection.',
    fullDesc: 'Bed bugs are resilient against standard sprays. We combine targeted thermal treatments with specialized desiccant dusts and residual barriers across headboards, baseboards, and carpet lines to guarantee total eradication from egg to adult.',
    iconName: 'Bed',
    features: ['Multi-stage lifecycle targeting', 'Zero luggage or furniture disposal required', 'Rapid re-entry capability', '30-day post-treatment re-inspection'],
    inspectionTime: '60 mins',
    efficacyRate: '99.7%',
    ecoRating: 'Eco-Mineral Barrier'
  },
  {
    id: 'mosquito-system',
    name: 'Mosquito Barrier & Yard System',
    category: 'residential',
    shortDesc: 'Automated yard misting barriers and botanical foliage sprays to reclaim your Houston outdoor patio.',
    fullDesc: 'Houston summers shouldn’t trap you indoors. Our specialized micro-droplet foliage sprays coat the undersides of leaves and shaded bushes where adult mosquitoes rest, while eco-larvicides in standing water sources halt breeding cycles for weeks.',
    iconName: 'TreePine',
    features: ['Under-leaf resting zone treatment', 'Standing water larvicide treatment', 'Outdoor event special prep', 'Safe for pollinator flowers & bees'],
    inspectionTime: '30 mins',
    efficacyRate: '95%',
    ecoRating: 'Botanical Safe'
  },
  {
    id: 'bird-control',
    name: 'Bird Control & Deterrents',
    category: 'commercial',
    shortDesc: 'Architectural netting, humane shock tracks, and roosting spikes for commercial and residential roofs.',
    fullDesc: 'Pigeons, grackles, and swallows create corrosive droppings that degrade roofs and commercial facades. We engineer discreet physical deterrents that humanely redirect birds away from signage, eaves, and solar panel arrays.',
    iconName: 'Feather',
    features: ['Discreet solar panel bird guards', 'Stainless steel bird spikes', 'HVAC rooftop deterrents', 'Guano cleanup & disinfection'],
    inspectionTime: '45 mins',
    efficacyRate: '98%',
    ecoRating: 'Humane Physical'
  },
  {
    id: 'fumigation',
    name: 'Whole-Structure Fumigation',
    category: 'specialized',
    shortDesc: 'Full tenting and specialized deep structural gas treatment for severe drywood termite or beetle infestations.',
    fullDesc: 'When pests penetrate deep within interior structural beams beyond reach of surface sprays, controlled fumigation achieves 100% penetration throughout every cubic inch of the structure, leaving zero chemical residue behind.',
    iconName: 'Wind',
    features: ['Drywood termite total elimination', 'Laboratory air clearance testing', 'Strict state protocol adherence', 'Certified master fumigator on-site'],
    inspectionTime: 'Custom schedule',
    efficacyRate: '100%',
    ecoRating: 'Residue-Free Gas'
  },
  {
    id: 'commercial',
    name: 'Commercial & Facility Defense',
    category: 'commercial',
    shortDesc: 'Discreet, health-inspector compliant pest defense programs for restaurants, offices, and warehouses.',
    fullDesc: 'Custom Integrated Pest Management (IPM) tailored to Texas health department standards. We provide digital documentation logs, trap monitoring barcodes, and off-peak application to protect your brand reputation.',
    iconName: 'Building2',
    features: ['Health department compliance logs', 'Discreet evening servicing', 'Drain & grease trap defense', 'Multi-location corporate accounts'],
    inspectionTime: 'Custom audit',
    efficacyRate: '99.9%',
    ecoRating: 'HACCP & IPM Compliant'
  }
];

export const GALLERY_ITEMS: WorkGalleryItem[] = [
  {
    id: 'work-1',
    title: 'Precision Interior Crack & Crevice Cleanout',
    category: 'residential',
    description: 'Certified technician in protective gear applying non-volatile botanical micro-treatments under Houston kitchen cabinetry.',
    location: 'Houston Heights',
    svgIcon: 'kitchen',
    badge: 'Certified Clean Tech',
    imageUrl: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788550242/b3.jpg'
  },
  {
    id: 'work-2',
    title: 'Targeted Foundation & Yard Barrier Application',
    category: 'residential',
    description: 'Targeted outdoor barrier misting stopping termites, ants, and spiders before foundation crossing.',
    location: 'Memorial, Houston',
    svgIcon: 'garden',
    badge: 'Eco Barrier Safe',
    imageUrl: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788550680/b1.avif'
  },
  {
    id: 'work-3',
    title: 'Zero-Tolerance Pest Defense Shield',
    category: 'safety',
    description: 'Multi-layer barrier preventing rodents, roaches, and wood-destroying insect infestations from entering living areas.',
    location: 'Greater Houston Area',
    svgIcon: 'sensor',
    badge: 'Targeted Exclusion',
    imageUrl: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788550679/b2.webp'
  },
  {
    id: 'work-4',
    title: 'Houston Specialized Pest & Termite Control',
    category: 'residential',
    description: 'Comprehensive pest management program targeting subterranean termites, carpenter ants, and pests with long-term guarantees.',
    location: 'Katy & Sugar Land',
    svgIcon: 'commercial',
    badge: 'Guaranteed Protection',
    imageUrl: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788550216/gpt.png'
  },
  {
    id: 'work-5',
    title: 'Commercial & Residential Termite Treatment',
    category: 'commercial',
    description: 'Complete pest control, termite defense, pre-slab preparations, and immediate dispatch across Houston.',
    location: 'Houston & Metro Area',
    svgIcon: 'construction',
    badge: 'Termite Certified',
    imageUrl: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788550161/service1.jpg'
  },
  {
    id: 'work-6',
    title: 'Direct Dispatch & Emergency Pest Services',
    category: 'commercial',
    description: 'Dedicated client support with direct technician response, transparent communication, and satisfaction guarantee.',
    location: 'Pearland & South Houston',
    svgIcon: 'roof',
    badge: 'Direct Service',
    imageUrl: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788550175/service_and_contact_7890987.jpg'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Carlos Mendoza',
    neighborhood: 'Houston Heights',
    service: 'Ants & Cockroach Elimination',
    rating: 5,
    comment: 'Benjamín and his team are phenomenal! We had stubborn carpenter ants returning every spring. Benjamín arrived on time, found the exact tree hollow where they nested outside, and our home has been completely ant-free for 8 months now. Truly professional.',
    date: 'February 2026',
    verified: true
  },
  {
    id: 'test-2',
    name: 'Sarah & Michael Jenkins',
    neighborhood: 'Katy, TX',
    service: 'Pre-Slab & Termite Defense',
    rating: 5,
    comment: 'We were building an extension on our house and our contractor recommended Benjamín Alexander for the pre-slab termite treatment. Very prompt communication, provided official documentation for the city inspector immediately, and great price.',
    date: 'January 2026',
    verified: true
  },
  {
    id: 'test-3',
    name: 'Elena Rodriguez',
    neighborhood: 'Memorial, Houston',
    service: 'Rodent Attic Exclusion',
    rating: 5,
    comment: 'Hearing scratching in the attic was a nightmare. Benjamín came out the same day we called. He sealed every single gap around our roofline with steel wire and humanely cleared the attic. Best part: no toxic smells and 100% pet safe for our two golden retrievers.',
    date: 'December 2025',
    verified: true
  },
  {
    id: 'test-4',
    name: 'David Vance',
    neighborhood: 'Sugar Land, TX',
    service: 'Mosquito Yard System',
    rating: 5,
    comment: 'Our backyard used to be unusable after 5 PM because of mosquitoes. Benjamín’s monthly treatment completely transformed our patio time. We can actually enjoy dinner outside with the kids.',
    date: 'October 2025',
    verified: true
  }
];
