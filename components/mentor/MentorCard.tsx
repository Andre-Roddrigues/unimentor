// components/mentor/MentorCard.tsx
import { Mentor } from '@/types/mentorship';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Clock, Languages } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface MentorCardProps {
  mentor: Mentor;
}

export function MentorCard({ mentor }: MentorCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
      {/* Imagem do Mentor */}
      <div className="relative h-48 w-full">
        <Image
          src={mentor.image}
          alt={`Foto de ${mentor.name}`}
          fill
          className="object-cover rounded-t-lg"
        />
        {/* <div className="absolute top-3 right-3">
          <Badge variant={mentor.isOnline ? "default" : "secondary"}>
            {mentor.isOnline ? 'Online' : 'Presencial'}
          </Badge>
        </div> */}
      </div>

      {/* Conteúdo do Card */}
      <div className="p-6">
        {/* Nome e Titulação */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {mentor.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {mentor.title} • {mentor.company}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1 text-sm font-medium">{mentor.rating.toFixed(1)}</span>
          </div>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {mentor.experience} anos de experiência
          </span>
        </div>

        {/* Localização */}
        <div className="flex items-center mb-3 text-sm text-gray-600 dark:text-gray-400">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{mentor.location}</span>
        </div>

        {/* Idiomas */}
        <div className="flex items-center mb-4 text-sm text-gray-600 dark:text-gray-400">
          <Languages className="w-4 h-4 mr-1" />
          <span>{mentor.languages.join(', ')}</span>
        </div>

        {/* Categorias */}
        <div className="flex flex-wrap gap-1 mb-4">
          {mentor.categories.slice(0, 3).map((category) => (
            <Badge key={category} variant="outline" className="text-xs">
              {category}
            </Badge>
          ))}
          {mentor.categories.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{mentor.categories.length - 3}
            </Badge>
          )}
        </div>

        {/* Preço e Ação */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-green-600">
              MT {mentor.price.toFixed(2)}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
              /hora
            </span>
          </div>
          <Link href={`/mentores/${mentor.id}`}>
            <Button className="bg-primary text-primary-foreground ">
              Ver Perfil
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}