'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { allMovies, animationMovies, sciFiMovies, Movie } from '@/data/movies';
import { Film, LogOut, Check, Filter, TrendingUp, Loader2 } from 'lucide-react';
import { useWatchedMovies } from '@/hooks/useWatchedMovies';

export default function DashboardPage() {
  const router = useRouter();
  const { watchedMovies, isLoading, isWatched, toggleWatched } = useWatchedMovies();

  const [selectedCategory, setSelectedCategory] = useState<'all' | 'animacao' | 'ficcao-cientifica'>('all');
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'watched' | 'unwatched'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Verificar login
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      router.push('/');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/');
  };

  // Filtrar filmes
  const filteredMovies = allMovies.filter((movie) => {
    // Filtro de categoria
    if (selectedCategory !== 'all' && movie.category !== selectedCategory) {
      return false;
    }

    // Filtro de ano
    if (selectedYear !== 'all' && movie.year !== selectedYear) {
      return false;
    }

    // Filtro de status
    const movieIsWatched = isWatched(movie.id);
    if (selectedStatus === 'watched' && !movieIsWatched) {
      return false;
    }
    if (selectedStatus === 'unwatched' && movieIsWatched) {
      return false;
    }

    // Filtro de busca
    if (searchTerm && !movie.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }

    return true;
  });

  // Anos disponíveis
  const availableYears = Array.from(new Set(allMovies.map(m => m.year))).sort((a, b) => a - b);

  // Estatísticas
  const totalMovies = allMovies.length;
  const watchedCount = watchedMovies.length;
  const progressPercentage = (watchedCount / totalMovies) * 100;

  const animationWatched = animationMovies.filter(m => isWatched(m.id)).length;
  const sciFiWatched = sciFiMovies.filter(m => isWatched(m.id)).length;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-orange-500 animate-spin" />
      </div>
    );
  }

  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-950">
      {/* Blur Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-slate-900/50 backdrop-blur-xl border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center">
                  <Film className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                    METRI-GO
                  </h1>
                  <p className="text-xs text-gray-400">Tracker Pessoal</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => router.push('/watched')}
                  className="text-sm text-gray-300 hover:text-white transition"
                >
                  Meus Assistidos
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white rounded-lg transition"
                >
                  <LogOut className="w-4 h-4" />
                  Sair
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Stats Section */}
        <section className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {/* Progresso Total */}
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-8 h-8 text-orange-400" />
                <div>
                  <p className="text-sm text-gray-400">Progresso Total</p>
                  <p className="text-3xl font-black text-white">{progressPercentage.toFixed(1)}%</p>
                </div>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>

            {/* Total Assistidos */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
              <p className="text-sm text-gray-400 mb-2">Filmes Assistidos</p>
              <p className="text-4xl font-black text-white">{watchedCount}</p>
              <p className="text-sm text-gray-500">de {totalMovies} filmes</p>
            </div>

            {/* Animação */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
              <p className="text-sm text-gray-400 mb-2">Animação</p>
              <p className="text-4xl font-black text-white">{animationWatched}</p>
              <p className="text-sm text-gray-500">de {animationMovies.length} filmes</p>
            </div>

            {/* Ficção Científica */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
              <p className="text-sm text-gray-400 mb-2">Ficção Científica</p>
              <p className="text-4xl font-black text-white">{sciFiWatched}</p>
              <p className="text-sm text-gray-500">de {sciFiMovies.length} filmes</p>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-orange-400" />
              <h2 className="text-lg font-bold text-white">Filtros</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Busca */}
              <input
                type="text"
                placeholder="Buscar filme..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              {/* Categoria */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as any)}
                className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="all">Todas Categorias</option>
                <option value="animacao">Animação/Família</option>
                <option value="ficcao-cientifica">Ficção Científica</option>
              </select>

              {/* Ano */}
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value === 'all' ? 'all' : parseInt(e.target.value))}
                className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="all">Todos os Anos</option>
                {availableYears.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>

              {/* Status */}
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value as any)}
                className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="all">Todos</option>
                <option value="watched">Assistidos</option>
                <option value="unwatched">Não Assistidos</option>
              </select>
            </div>
          </div>

          {/* Movies Grid */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                {filteredMovies.length} {filteredMovies.length === 1 ? 'Filme' : 'Filmes'}
              </h2>

              {filteredMovies.length > 0 && (
                <p className="text-sm text-gray-400">
                  {filteredMovies.filter(m => isWatched(m.id)).length} assistidos
                </p>
              )}
            </div>

            {filteredMovies.length === 0 ? (
              <div className="text-center py-20">
                <Film className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">Nenhum filme encontrado</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredMovies.map((movie) => {
                  const movieIsWatched = isWatched(movie.id);

                  return (
                    <div
                      key={movie.id}
                      className={`group bg-slate-900/50 backdrop-blur-sm border ${movieIsWatched ? 'border-emerald-500/50' : 'border-slate-800'
                        } rounded-xl p-5 transition-all duration-300 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10`}
                    >
                      <div className="flex items-start gap-4">
                        {/* Poster/Icon */}
                        <div className={`flex-shrink-0 w-16 h-16 rounded-lg ${movieIsWatched ? 'bg-gradient-to-br from-emerald-500 to-emerald-600' : 'bg-gradient-to-br from-slate-700 to-slate-800'
                          } flex items-center justify-center text-3xl transition-colors`}>
                          {movie.poster}
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-white text-lg mb-1 truncate">
                            {movie.title}
                          </h3>
                          <p className="text-sm text-gray-400 mb-2">
                            {movie.year} • {movie.category === 'animacao' ? 'Animação' : 'Ficção Científica'}
                          </p>
                          {movie.subCategory && (
                            <span className="inline-block text-xs px-2 py-1 bg-orange-500/20 text-orange-400 rounded">
                              {movie.subCategory}
                            </span>
                          )}
                        </div>

                        {/* Checkbox */}
                        <button
                          onClick={() => toggleWatched(movie.id)}
                          className={`flex-shrink-0 w-8 h-8 rounded-lg border-2 ${movieIsWatched
                              ? 'bg-emerald-500 border-emerald-500'
                              : 'bg-transparent border-slate-600 hover:border-orange-500'
                            } flex items-center justify-center transition-all duration-200 hover:scale-110`}
                        >
                          {movieIsWatched && <Check className="w-5 h-5 text-white" />}
                        </button>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-500 mt-3 line-clamp-2">
                        {movie.description}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mt-3">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm font-semibold text-gray-300">{movie.rating}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
