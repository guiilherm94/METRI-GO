'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import animatedFilmsData from '@/data/animated-films.json'

type Film = {
  rank: number
  title: string
  rating: number
  genre: string
}

type FilmsData = {
  [year: string]: Film[]
}

export default function FilmesAnimacao() {
  const router = useRouter()
  const [selectedYear, setSelectedYear] = useState<string>('2024')
  const [searchTerm, setSearchTerm] = useState('')

  const filmsData: FilmsData = animatedFilmsData as FilmsData
  const years = Object.keys(filmsData).sort((a, b) => parseInt(b) - parseInt(a))

  const filteredFilms = searchTerm
    ? filmsData[selectedYear]?.filter(film =>
        film.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filmsData[selectedYear]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-5xl font-bold text-white mb-2">
              🎬 Filmes de Animação
            </h1>
            <p className="text-gray-300">Top 10 filmes de cada ano (1996-2025)</p>
          </div>
          <button
            onClick={() => router.push('/produtos')}
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition"
          >
            ← Voltar
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Year Selector */}
            <div>
              <label className="block text-white mb-2 font-semibold">
                Selecione o Ano
              </label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Search */}
            <div>
              <label className="block text-white mb-2 font-semibold">
                Buscar Filme
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Digite o nome do filme..."
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Year Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6">
            <div className="text-blue-200 text-sm font-semibold mb-1">Ano Selecionado</div>
            <div className="text-4xl font-bold text-white">{selectedYear}</div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl p-6">
            <div className="text-purple-200 text-sm font-semibold mb-1">Total de Filmes</div>
            <div className="text-4xl font-bold text-white">
              {filmsData[selectedYear]?.length || 0}
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-600 to-pink-800 rounded-xl p-6">
            <div className="text-pink-200 text-sm font-semibold mb-1">Avaliação Média</div>
            <div className="text-4xl font-bold text-white">
              {filmsData[selectedYear]
                ? (
                    filmsData[selectedYear].reduce((sum, film) => sum + film.rating, 0) /
                    filmsData[selectedYear].length
                  ).toFixed(1)
                : '0.0'}
              ⭐
            </div>
          </div>
        </div>

        {/* Films List */}
        <div className="space-y-4">
          {filteredFilms && filteredFilms.length > 0 ? (
            filteredFilms.map((film) => (
              <div
                key={film.rank}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-4xl font-bold text-yellow-400">
                        #{film.rank}
                      </span>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {film.title}
                        </h3>
                        <p className="text-gray-300 text-sm">{film.genre}</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="bg-yellow-500 text-gray-900 font-bold px-4 py-2 rounded-lg">
                      {film.rating > 0 ? `⭐ ${film.rating.toFixed(1)}` : 'Lançamento futuro'}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-400 py-12">
              <p className="text-xl">Nenhum filme encontrado</p>
            </div>
          )}
        </div>

        {/* Timeline Navigation */}
        <div className="mt-8 bg-white/10 backdrop-blur-md rounded-xl p-6">
          <h3 className="text-white font-bold mb-4">Navegação Rápida por Década</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {['1996-1999', '2000-2004', '2005-2009', '2010-2014', '2015-2019', '2020-2025'].map((decade) => {
              const [start, end] = decade.split('-').map(Number)
              return (
                <button
                  key={decade}
                  onClick={() => setSelectedYear(start.toString())}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition font-semibold"
                >
                  {decade}
                </button>
              )
            })}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-8 bg-white/10 backdrop-blur-md rounded-xl p-6">
          <h3 className="text-white font-bold text-xl mb-4">📊 Estatísticas Gerais</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
            <div>
              <p className="text-gray-300 mb-2">Total de anos catalogados:</p>
              <p className="text-2xl font-bold">{years.length} anos</p>
            </div>
            <div>
              <p className="text-gray-300 mb-2">Total de filmes:</p>
              <p className="text-2xl font-bold">
                {Object.values(filmsData).reduce((sum, films) => sum + films.length, 0)} filmes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
