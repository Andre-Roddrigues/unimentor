// components/mentor/MentorFilters.tsx (versão com range único)
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, Filter, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface MentorFiltersProps {
  categories: string[];
  locations: string[];
  onFiltersChange: (filters: FilterState) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
}

export interface FilterState {
  search: string;
  category: string;
  location: string;
  priceRange: string;
  experience: string;
  sessionType: string;
}

// Valores padrão para os selects
const DEFAULT_VALUES = {
  category: 'all-categories',
  location: 'all-locations', 
  priceRange: 'all-prices',
  experience: 'all-experience',
};

export function MentorFilters({ 
  categories, 
  locations, 
  onFiltersChange, 
  priceRange, 
  onPriceRangeChange 
}: MentorFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    category: DEFAULT_VALUES.category,
    location: DEFAULT_VALUES.location,
    priceRange: DEFAULT_VALUES.priceRange,
    experience: DEFAULT_VALUES.experience,
    sessionType: 'all',
  });

  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      search: '',
      category: DEFAULT_VALUES.category,
      location: DEFAULT_VALUES.location,
      priceRange: DEFAULT_VALUES.priceRange,
      experience: DEFAULT_VALUES.experience,
      sessionType: 'all',
    };
    setFilters(clearedFilters);
    onPriceRangeChange([0, 500]);
    onFiltersChange(clearedFilters);
  };

  const hasActiveFilters = Object.entries(filters).some(([key, value]) => {
    if (key === 'search') return value !== '';
    return !Object.values(DEFAULT_VALUES).includes(value) && value !== 'all';
  }) || priceRange[0] > 0 || priceRange[1] < 500;

  const handleSingleRangeChange = (maxValue: number) => {
    onPriceRangeChange([0, maxValue]);
  };

  return (
    <div className="space-y-4">
      {/* Barra de Pesquisa */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder="Buscar mentores por nome, especialidade..."
          value={filters.search}
          onChange={(e) => handleFilterChange('search', e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Filtros Mobile Trigger */}
      <div className="md:hidden">
        <Button
          variant="outline"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="w-full flex items-center justify-center gap-2"
        >
          <Filter className="w-4 h-4" />
          Filtros
          {hasActiveFilters && (
            <Badge variant="secondary" className="ml-2 h-5 w-5 p-0 flex items-center justify-center">
              {Object.entries(filters).filter(([key, value]) => {
                if (key === 'search') return value !== '';
                return !Object.values(DEFAULT_VALUES).includes(value) && value !== 'all';
              }).length + (priceRange[0] > 0 || priceRange[1] < 500 ? 1 : 0)}
            </Badge>
          )}
        </Button>
      </div>

      {/* Filtros */}
      <div className={`space-y-4 ${showMobileFilters ? 'block' : 'hidden md:block'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Range Slider Único */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Preço máximo: MT {priceRange[1]}
                </label>
              </div>
              
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="500"
                  step="50"
                  value={priceRange[1]}
                  onChange={(e) => handleSingleRangeChange(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
                />
                
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>MT 0</span>
                  <span>MT 250</span>
                  <span>MT 500</span>
                </div>
              </div>
            </div>
          </div>

          <Select value={filters.category} onValueChange={(value) => handleFilterChange('category', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Área de atuação" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={DEFAULT_VALUES.category}>Todas as áreas</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={filters.experience} onValueChange={(value) => handleFilterChange('experience', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Experiência" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={DEFAULT_VALUES.experience}>Qualquer experiência</SelectItem>
              <SelectItem value="0-2">0-2 anos</SelectItem>
              <SelectItem value="3-5">3-5 anos</SelectItem>
              <SelectItem value="5-10">5-10 anos</SelectItem>
              <SelectItem value="10+">10+ anos</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filters.sessionType} onValueChange={(value) => handleFilterChange('sessionType', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Tipo de sessão" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os tipos</SelectItem>
              <SelectItem value="online">Online</SelectItem>
              <SelectItem value="presencial">Presencial</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Botão Limpar Filtros */}
        {hasActiveFilters && (
          <div className="flex justify-end">
            <Button
              variant="ghost"
              onClick={clearFilters}
              className="flex items-center gap-2 text-sm"
            >
              <X className="w-4 h-4" />
              Limpar filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}