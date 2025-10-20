
export interface Mentor {
  id: string;
  name: string;
  title: string;
  company: string;
  experience: number;
  rating: number;
  price: number;
  location: string;
  categories: string[];
  image: string;
  description: string;
  availability: string[];
  languages: string[];
  isOnline: boolean;
  isLocal: boolean;
}

export interface MentorshipSession {
  id: string;
  mentorId: string;
  title: string;
  description: string;
  duration: number;
  price: number;
  type: 'one-time' | 'package' | 'ongoing';
  categories: string[];
}