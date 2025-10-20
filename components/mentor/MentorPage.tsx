"use client"
import { MentorCard } from '@/components/mentor/MentorCard';
import { MentorFilters, FilterState } from '@/components/mentor/MentorFilters';
import Container from '@/components/Container';
import { Mentor } from '@/types/mentorship';
import { Search } from 'lucide-react';

const mockMentors: Mentor[] = [
  {
    id: '1',
    name: 'Maria Santos',
    title: 'Senior Software Engineer',
    company: 'Tech Solutions Mozambique',
    experience: 8,
    rating: 4.9,
    price: 350,
    location: 'Maputo, Matola',
    categories: ['Desenvolvimento Web', 'JavaScript', 'React', 'Node.js'],
    image: '/images/mentorhero.jpg',
    description: 'Especialista em desenvolvimento full-stack com 8 anos de experiência em startups e empresas de tecnologia.',
    availability: ['2025-10-17', '18:00-21:00', '2025-10-18', '18:00-21:00', '2025-10-19', '18:00-21:00'],
    languages: ['Português', 'Inglês'],
    isOnline: true,
    isLocal: true,
    availableSlots: []
  },
  {
    id: '2',
    name: 'Carlos Machava',
    title: 'Product Manager',
    company: 'Innovation Labs',
    experience: 6,
    rating: 4.7,
    price: 280,
    location: 'Maputo, Centro',
    categories: ['Gestão de Produto', 'Agile', 'Scrum', 'UX Research'],
    image: '/images/mentorhero.jpg',
    description: 'Product Manager com experiência em liderar equipes ágeis e desenvolver produtos digitais de sucesso.',
    availability: ['Segunda a Sexta', '09:00-17:00'],
    languages: ['Português', 'Inglês', 'Xangana'],
    isOnline: false,
    isLocal: true,
    availableSlots: []
  },
  {
    id: '3',
    name: 'Ana Silva',
    title: 'Digital Marketing Specialist',
    company: 'Digital Moçambique',
    experience: 5,
    rating: 4.8,
    price: 220,
    location: 'Beira, Sofala',
    categories: ['Marketing Digital', 'SEO', 'Redes Sociais', 'Google Ads'],
    image: '/images/mentorhero.jpg',
    description: 'Especialista em marketing digital com foco em estratégias para o mercado moçambicano.',
    availability: ['Terça a Sábado', '10:00-19:00'],
    languages: ['Português', 'Inglês'],
    isOnline: true,
    isLocal: true,
    availableSlots: []
  },
  {
    id: '4',
    name: 'João Tembe',
    title: 'Data Scientist',
    company: 'Data Analytics Lda',
    experience: 4,
    rating: 4.6,
    price: 320,
    location: 'Maputo, Polana',
    categories: ['Data Science', 'Python', 'Machine Learning', 'SQL'],
    image: '/images/mentorhero.jpg',
    description: 'Cientista de dados com experiência em projetos de análise preditiva e machine learning.',
    availability: ['Segunda a Sexta', '14:00-20:00'],
    languages: ['Português', 'Inglês'],
    isOnline: true,
    isLocal: true,
    availableSlots: []
  },
  {
    id: '5',
    name: 'Sofia Nhampossa',
    title: 'UX/UI Designer',
    company: 'Design Studio',
    experience: 5,
    rating: 4.9,
    price: 270,
    location: 'Nampula',
    categories: ['UX Design', 'UI Design', 'Figma', 'Design Thinking'],
    image: '/images/mentorhero.jpg',
    description: 'Designer especializada em experiência do usuário para aplicações web e mobile.',
    availability: ['Segunda a Sexta', '08:00-16:00'],
    languages: ['Português', 'Inglês', 'Macua'],
    isOnline: true,
    isLocal: true,
    availableSlots: []
  },
  {
    id: '6',
    name: 'David Manhique',
    title: 'Business Consultant',
    company: 'Business Growth',
    experience: 10,
    rating: 4.8,
    price: 450,
    location: 'Maputo, Baixa',
    categories: ['Consultoria Empresarial', 'Startups', 'Plano de Negócios', 'Finanças'],
    image: '/images/mentorhero.jpg',
    description: 'Consultor empresarial com vasta experiência em ajudar pequenas e médias empresas moçambicanas.',
    availability: ['Segunda a Quinta', '09:00-18:00'],
    languages: ['Português', 'Inglês', 'Xangana'],
    isOnline: false,
    isLocal: true,
    availableSlots: []
  },
];

const allCategories = Array.from(new Set(mockMentors.flatMap(mentor => mentor.categories)));
const allLocations = Array.from(new Set(mockMentors.map(mentor => mentor.location)));

export default function MentoresPage() {
  const filteredMentors = mockMentors;

  const handleFiltersChange = (filters: FilterState) => {
    console.log('Filtros aplicados:', filters);
  };

  return (
    <Container>
      <div className="py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Encontre Mentores Locais
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Conecte-se com profissionais experientes para acelerar 
            sua carreira e desenvolvimento pessoal
          </p>
        </div>

        <div className="mb-8">
          <MentorFilters
            categories={allCategories}
            locations={allLocations}
            onFiltersChange={handleFiltersChange}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {mockMentors.length}+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Mentores</div>
          </div>
          <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              15+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Categorias</div>
          </div>
          <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              6+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Cidades</div>
          </div>
          <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
              4.8
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Avaliação Média</div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Mentores Disponíveis
            </h2>
            <span className="text-gray-600 dark:text-gray-400">
              {filteredMentors.length} mentores encontrados
            </span>
          </div>

          {filteredMentors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMentors.map((mentor) => (
                <MentorCard key={mentor.id} mentor={mentor} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Nenhum mentor encontrado
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Tente ajustar os filtros para ver mais resultados
              </p>
            </div>
          )}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Quer se tornar um mentor?
          </h2>
          <p className="mb-6 opacity-90">
            Compartilhe seu conhecimento e ajude outros profissionais a crescerem
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Cadastrar como Mentor
          </button>
        </div>
      </div>
    </Container>
  );
}