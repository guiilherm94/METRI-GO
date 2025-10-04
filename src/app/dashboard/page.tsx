'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase, Produto, Metrica } from '@/lib/supabase'
import Dashboard from '@/components/Dashboard'

export default function DashboardGlobal() {
  const router = useRouter()
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [metricas, setMetricas] = useState<Metrica[]>([])
  const [loading, setLoading] = useState(true)
  const [produtoSelecionado, setProdutoSelecionado] = useState<string>('todos')

  useEffect(() => {
    const auth = localStorage.getItem('auth')
    if (auth !== 'true') {
      router.push('/login')
      return
    }

    carregarDados()
  }, [router])

  const carregarDados = async () => {
    const { data: produtosData } = await supabase
      .from('produtos')
      .select('*')
      .order('created_at', { ascending: false })

    setProdutos(produtosData || [])

    const { data: metricasData } = await supabase
      .from('metricas')
      .select('*')
      .order('dia', { ascending: false })

    setMetricas(metricasData || [])
    setLoading(false)
  }

  const metricasFiltradas = produtoSelecionado === 'todos'
    ? metricas
    : metricas.filter(m => m.produto_id === produtoSelecionado)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <button
              onClick={() => router.push('/produtos')}
              className="text-blue-400 hover:text-blue-300 mb-2"
            >
              ← Voltar para Produtos
            </button>
            <h1 className="text-4xl font-bold text-white">Dashboard Global</h1>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-bold text-white mb-4">Filtro por Produto</h2>
          <select
            value={produtoSelecionado}
            onChange={(e) => setProdutoSelecionado(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
          >
            <option value="todos">Todos os Produtos</option>
            {produtos.map((produto) => (
              <option key={produto.id} value={produto.id}>
                {produto.nome}
              </option>
            ))}
          </select>
        </div>

        {metricasFiltradas.length === 0 ? (
          <div className="bg-gray-800 p-12 rounded-lg text-center">
            <p className="text-gray-400 text-xl">
              Nenhuma métrica encontrada para este filtro.
            </p>
          </div>
        ) : (
          <Dashboard metricas={metricasFiltradas} />
        )}
      </div>
    </div>
  )
}
