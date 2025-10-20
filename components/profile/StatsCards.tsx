
import { BookingStats } from '@/types/user';
import { Calendar, CheckCircle, XCircle, Clock } from 'lucide-react';

interface StatsCardsProps {
  stats: BookingStats;
}

export function StatsCards({ stats }: StatsCardsProps) {
  const statItems = [
    {
      label: 'Total de Sessões',
      value: stats.total,
      icon: Calendar,
      color: 'bg-blue-500'
    },
    {
      label: 'Próximas',
      value: stats.upcoming,
      icon: Clock,
      color: 'bg-orange-500'
    },
    {
      label: 'Concluídas',
      value: stats.completed,
      icon: CheckCircle,
      color: 'bg-green-500'
    },
    {
      label: 'Canceladas',
      value: stats.cancelled,
      icon: XCircle,
      color: 'bg-red-500'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
      {statItems.map((item) => (
        <div key={item.label} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {item.value}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {item.label}
              </p>
            </div>
            <div className={`p-3 rounded-full ${item.color} text-white`}>
              <item.icon className="w-6 h-6" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}