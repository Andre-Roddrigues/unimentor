export default function BusinessMentorshipCTA() {
  return (
    <section className="w-full px-4 py-16 relative overflow-hidden bg-secondary/10 p-12 md:p-16 lg:p-20">
      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          
          {/* Título à esquerda */}
          <div className="lg:w-2/5">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
              Mentoria para <span className="text-secondary block">Empresas</span>
            </h2>
          </div>

          {/* Conteúdo à direita */}
          <div className="lg:w-3/5">
            <p className="text-gray-600 text-xl md:text-2xl mb-8 leading-relaxed font-light">
              Desenvolva seus líderes e equipes com programas de mentoria personalizados. 
              Transforme o potencial da sua organização em resultados tangíveis.
            </p>

            {/* Destaques */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center text-gray-600">
                <span className="text-lg">Programas customizados</span>
                <div className="w-2 h-2 bg-secondary rounded-full ml-3"></div>
              </div>
              <div className="flex items-center text-gray-600">
                <span className="text-lg">Desenvolvimento de liderança</span>
                <div className="w-2 h-2 bg-secondary rounded-full ml-3"></div>
              </div>
              <div className="flex items-center text-gray-600">
                <span className="text-lg">Mentores especializados</span>
                <div className="w-2 h-2 bg-secondary rounded-full ml-3"></div>
              </div>
              <div className="flex items-center text-gray-600">
                <span className="text-lg">Métricas de resultados</span>
                <div className="w-2 h-2 bg-secondary rounded-full ml-3"></div>
              </div>
            </div>

            {/* Botões */}
            <div className="flex flex-col justify-end sm:flex-row gap-4">
              <button className="group relative bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-between min-w-[200px] shadow-lg hover:shadow-xl">
                <span>Falar com Especialista</span>
                <div className="ml-4 w-6 h-6 rounded-full bg-blue-600/20 group-hover:bg-blue-600/30 transition-colors flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}