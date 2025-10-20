// components/profile/SessionCard.tsx
import { Booking } from '@/types/user';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Video, Star, MoreVertical } from 'lucide-react';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface SessionCardProps {
  booking: Booking;
  onReschedule: (booking: Booking) => void;
  onCancel: (booking: Booking) => void;
  onRate: (booking: Booking) => void;
}

export function SessionCard({ booking, onReschedule, onCancel, onRate }: SessionCardProps) {
  const isUpcoming = booking.status === 'confirmed' || booking.status === 'pending';
  const isCompleted = booking.status === 'completed';
  const isCancelled = booking.status === 'cancelled';

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'confirmed': return 'default';
      case 'pending': return 'secondary';
      case 'completed': return 'outline';
      case 'cancelled': return 'destructive';
      default: return 'secondary';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed': return 'Confirmada';
      case 'pending': return 'Pendente';
      case 'completed': return 'Concluída';
      case 'cancelled': return 'Cancelada';
      default: return status;
    }
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="relative h-16 w-16">
            <Image
              src={booking.mentorAvatar}
              alt={booking.mentorName}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{booking.mentorName}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {booking.mentorTitle}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Badge variant={getStatusVariant(booking.status)}>
            {getStatusText(booking.status)}
          </Badge>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {isUpcoming && (
                <>
                  <DropdownMenuItem onClick={() => onReschedule(booking)}>
                    Reagendar
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onCancel(booking)}>
                    Cancelar
                  </DropdownMenuItem>
                </>
              )}
              {isCompleted && !booking.rating && (
                <DropdownMenuItem onClick={() => onRate(booking)}>
                  Avaliar Sessão
                </DropdownMenuItem>
              )}
              <DropdownMenuItem>
                Ver Detalhes
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <Calendar className="w-4 h-4 mr-2" />
          {formatDate(booking.date)}
        </div>
        
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <Clock className="w-4 h-4 mr-2" />
          {booking.startTime} - {booking.endTime} ({booking.duration}min)
        </div>
        
        {/* <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <MapPin className="w-4 h-4 mr-2" />
          {booking.meetingLink ? 'Online' : 'Presencial'}
        </div> */}
        
        <div className="flex items-center text-sm font-semibold text-green-600">
          MT {booking.price.toFixed(2)}
        </div>
      </div>

      {booking.notes && (
        <div className="mb-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <strong>Notas:</strong> {booking.notes}
          </p>
        </div>
      )}

      {isCompleted && booking.rating && (
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex items-center text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1 text-sm font-medium">{booking.rating}.0</span>
          </div>
          {booking.review && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              "{booking.review}"
            </p>
          )}
        </div>
      )}

      {isUpcoming && booking.meetingLink && (
        <div className="flex space-x-2">
          <Button size="sm" className="flex items-center gap-2">
            <Video className="w-4 h-4" />
            Entrar na Chamada
          </Button>
          <Button variant="outline" size="sm">
            Adicionar ao Calendário
          </Button>
        </div>
      )}
    </div>
  );
}