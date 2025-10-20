import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Clock, Languages, Calendar, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const mockMentor = {
  id: '1',
  name: 'Maria Santos',
  title: 'Senior Software Engineer',
  company: 'Tech Solutions Mozambique',
  experience: 8,
  rating: 4.9,
  price: 350,
  location: 'Maputo, Matola',
  categories: ['Desenvolvimento Web', 'JavaScript', 'React', 'Node.js'],
  image: '/images/avatar.jpg',
  description: 'Especialista em desenvolvimento full-stack com 8 anos de experiência em startups e empresas de tecnologia. Já trabalhei em projetos internacionais e locais, sempre focando em soluções escaláveis e de alta qualidade.',
  bio: `Com mais de 8 anos de experiência no mercado de tecnologia, já liderei equipes de desenvolvimento e participei de projetos que impactaram milhares de usuários. Minha paixão é ajudar desenvolvedores a crescerem em suas carreiras e dominarem as tecnologias mais modernas do mercado.

Principais competências:
• Desenvolvimento Full-Stack (React, Node.js, TypeScript)
• Arquitetura de Software
• Metodologias Ágeis
• Mentoria de Carreira em TI`,
  availability: ['Segunda a Sexta', '18:00-21:00', 'Segunda a Sexta', '18:00-21:00'],
  languages: ['Português', 'Inglês'],
  isOnline: true,
  isLocal: true,
  reviews: [
    { id: 1, user: 'João Silva', rating: 5, comment: 'Excelente mentora! Me ajudou muito com React.', date: '2024-01-15' },
    { id: 2, user: 'Ana Costa', rating: 5, comment: 'Muito conhecimento prático e didática incrível.', date: '2024-01-10' },
  ]
};

interface Params {
  params: {
    id: string;
  };
}

export default function MentorDetailPage({ params }: Params) {
  const mentor = mockMentor; 

  return (
    <Container>
      <div className="py-8">
        <Link href="/mentores" className="text-blue-600 hover:underline mb-6 inline-block">
          ← Voltar para mentores
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border">
                <div className="relative h-64 w-full mb-4">
                  <Image
                    src={mentor.image}
                    alt={`Foto de ${mentor.name}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-primary dark:text-white">
                    {mentor.name}
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {mentor.title} • {mentor.company}
                  </p>
                  
                  <div className="flex items-center justify-center text-yellow-500 mb-4">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="ml-1 font-medium">{mentor.rating.toFixed(1)}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {mentor.experience} anos
                    </span>
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      {mentor.location}
                    </div>
                    <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-400">
                      <Languages className="w-4 h-4 mr-2" />
                      {mentor.languages.join(', ')}
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-3xl font-bold text-green-600">
                      MT {mentor.price.toFixed(2)}
                    </span>
                    <span className="text-gray-500 ml-1">/hora</span>
                  </div>

                  <Button className="w-full bg-primary text-primary-foreground hover:bg-blue-700  mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    Agendar Sessão
                  </Button>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border">
                <h3 className="font-semibold mb-3 flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Disponibilidade
                </h3>
                <ul className="space-y-2">
                  {mentor.availability.map((slot, index) => (
                    <li key={index} className="text-sm text-gray-600 dark:text-gray-400">
                      {slot}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border">
              <h2 className="text-2xl font-bold mb-4">Sobre</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {mentor.description}
              </p>
              <div className="prose dark:prose-invert max-w-none">
                {mentor.bio.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700 dark:text-gray-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Especialidades */}
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border">
              <h2 className="text-2xl font-bold mb-4">Áreas de Especialização</h2>
              <div className="flex flex-wrap gap-2">
                {mentor.categories.map((category) => (
                  <Badge key={category}  className="bg-primary text-primary-foreground px-3 py-1">
                    {category}
                  </Badge>
                ))}
              </div>
            </section>

            {/* Avaliações */}
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border">
              <h2 className="text-2xl font-bold mb-4">Avaliações</h2>
              <div className="space-y-4">
                {mentor.reviews.map((review) => (
                  <div key={review.id} className="border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">{review.user}</span>
                      <div className="flex items-center text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-sm">{review.rating}.0</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                      {review.comment}
                    </p>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </Container>
  );
}