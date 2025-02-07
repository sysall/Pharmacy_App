export type TabType = 'apercu' | 'services' | 'expertises' | 'actualites' | 'promos' | 'equipe' | 'pharmacie-de-garde';

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
} 