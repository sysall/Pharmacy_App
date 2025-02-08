export type TabType = 'apercu' | 'services' | 'expertises' | 'actualites' | 'promos' | 'equipe' | 'pharmacie-de-garde';

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
} 

export interface PharmacyGuard {
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  distance: string;
}

export interface PromoProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  validFrom: string;
  validTo: string;
  imageUrl: string;
}