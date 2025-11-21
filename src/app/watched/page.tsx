'use client';

import { useRouter } from 'next/navigation';
import { allMovies } from '@/data/movies';
import { ArrowLeft, Film, Check, Loader2 } from 'lucide-react';
import { useWatchedMovies } from '@/hooks/useWatchedMovies';

export default function WatchedPage() {
    const router = useRouter();
    const { watchedMovies, isLoading, isWatched, toggleWatched } = useWatchedMovies();

    if (isLoading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <Loader2 className="w-10 h-10 text-orange-500 animate-spin" />
            </div>
        );
    }

    const myMovies = allMovies.filter(m => isWatched(m.id));

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
                    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
                        <button
                            onClick={() => router.back()}
                            className="p-2 hover:bg-slate-800 rounded-full text-white transition-colors"
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                        <h1 className="text-2xl font-bold text-white">Meus Filmes Assistidos ({myMovies.length})</h1>
                    </div>
                </header>

                <section className="max-w-7xl mx-auto px-6 py-8">
                    {myMovies.length === 0 ? (
                        <div className="text-center py-20">
                            <Film className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                            <p className="text-gray-400 text-lg">Você ainda não marcou nenhum filme como assistido.</p>
                            <button
                                onClick={() => router.push('/dashboard')}
                                className="mt-4 px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition"
                            >
                                Explorar Filmes
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {myMovies.map((movie) => (
                                <div
                                    key={movie.id}
                                    className="group bg-slate-900/50 backdrop-blur-sm border border-emerald-500/50 rounded-xl p-5 transition-all duration-300 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10"
                                >
                                    <div className="flex items-start gap-4">
                                        {/* Poster/Icon */}
                                        <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-3xl">
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
                                        </div>

                                        {/* Checkbox */}
                                        <button
                                            onClick={() => toggleWatched(movie.id)}
                                            className="flex-shrink-0 w-8 h-8 rounded-lg border-2 bg-emerald-500 border-emerald-500 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-red-500 hover:border-red-500"
                                            title="Remover dos assistidos"
                                        >
                                            <Check className="w-5 h-5 text-white group-hover:hidden" />
                                            <div className="hidden group-hover:block text-white font-bold">✕</div>
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
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}
