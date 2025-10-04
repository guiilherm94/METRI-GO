'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase, Produto, Metrica } from '@/lib/supabase'
import ImportExcel from '@/components/ImportExcel'
import MetricasTable from '@/components/MetricasTable'
import Dashboard from '@/components/Dashboard'

export default function ProdutoPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [produto, setProduto] = useState<Produto | null>(null)
  const [metricas, setMetricas] = useState<Metrica[]>([])
  const [loading, setLoading] = useState(true)
  const [aba, setAba] = useState<'dashboard' | 'metricas'>('dashboard')

  useEffect(() => {
    const auth = localStorage.getItem('auth')
    if (auth !== 'true') {
      router.push('/login')
      return
    }

    carregarDados()
  }, [params.id, router])

  const carregarDados = async () => {
    const { data: produtoData } = await supabase
      .from('produtos')
      .select('*')
      .eq('id', params.id)
      .single()

    setProduto(produtoData)

    const { data: metricasData } = await supabase
      .from('metricas')
      .select('*')
      .eq('produto_id', params.id)
      .order('dia', { ascending: false })

    setMetricas(metricasData || [])
    setLoading(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    )
  }

  if (!produto) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white text-2xl">Produto não encontrado</div>
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
              ← Voltar
            </button>
            <h1 className="text-4xl font-bold text-white">{produto.nome}</h1>
          </div>
        </div>

        <ImportExcel produtoId={params.id} onImportSuccess={carregarDados} />

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setAba('dashboard')}
            className={`px-6 py-3 rounded-t-lg font-bold ${
              aba === 'dashboard'
                ? 'bg-gray-800 text-white'
                : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setAba('metricas')}
            className={`px-6 py-3 rounded-t-lg font-bold ${
              aba === 'metricas'
                ? 'bg-gray-800 text-white'
                : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
            }`}
          >
            Métricas
          </button>
        </div>

        {metricas.length === 0 ? (
          <div className="bg-gray-800 p-12 rounded-lg text-center">
            <p className="text-gray-400 text-xl">
              Nenhuma métrica importada ainda. Importe um arquivo Excel acima.
            </p>
          </div>
        ) : (
          <>
            {aba === 'dashboard' && <Dashboard metricas={metricas} />}
            {aba === 'metricas' && <MetricasTable metricas={metricas} onUpdate={carregarDados} />}
          </>
        )}
      </div>
    </div>
  )
}
