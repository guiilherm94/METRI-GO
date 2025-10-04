'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase, Produto } from '@/lib/supabase'

export default function Produtos() {
  const router = useRouter()
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [nome, setNome] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const auth = localStorage.getItem('auth')
    if (auth !== 'true') {
      router.push('/login')
      return
    }

    carregarProdutos()
  }, [router])

  const carregarProdutos = async () => {
    const { data, error } = await supabase
      .from('produtos')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error(error)
    } else {
      setProdutos(data || [])
    }
    setLoading(false)
  }

  const criarProduto = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const { error } = await supabase
      .from('produtos')
      .insert([{ nome }])

    if (error) {
      alert('Erro ao criar produto')
      console.error(error)
    } else {
      setNome('')
      carregarProdutos()
    }
  }

  const deletarProduto = async (id: string) => {
    if (!confirm('Deseja realmente deletar este produto?')) return

    const { error } = await supabase
      .from('produtos')
      .delete()
      .eq('id', id)

    if (error) {
      alert('Erro ao deletar produto')
      console.error(error)
    } else {
      carregarProdutos()
    }
  }

  const logout = () => {
    localStorage.removeItem('auth')
    router.push('/login')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Produtos</h1>
          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition"
          >
            Sair
          </button>
        </div>

        <form onSubmit={criarProduto} className="bg-gray-800 p-6 rounded-lg mb-8">
          <div className="flex gap-4">
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome do produto"
              className="flex-1 px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded transition font-bold"
            >
              Criar Produto
            </button>
          </div>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {produtos.map((produto) => (
            <div key={produto.id} className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-white mb-4">{produto.nome}</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => router.push(`/produto/${produto.id}`)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
                >
                  Abrir
                </button>
                <button
                  onClick={() => deletarProduto(produto.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition"
                >
                  Deletar
                </button>
              </div>
            </div>
          ))}
        </div>

        {produtos.length === 0 && (
          <div className="text-center text-gray-400 mt-8">
            Nenhum produto criado ainda
          </div>
        )}
      </div>
    </div>
  )
}
