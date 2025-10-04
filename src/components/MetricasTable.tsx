'use client'

import { useState } from 'react'
import { Metrica } from '@/lib/supabase'
import { calcularMetricas, formatarMoeda } from '@/lib/calculations'
import { supabase } from '@/lib/supabase'

interface MetricasTableProps {
  metricas: Metrica[]
  onUpdate: () => void
}

export default function MetricasTable({ metricas, onUpdate }: MetricasTableProps) {
  const [editando, setEditando] = useState<string | null>(null)
  const [valores, setValores] = useState<any>({})

  const iniciarEdicao = (metrica: Metrica) => {
    setEditando(metrica.id)
    setValores({
      compras_totais: metrica.compras_totais || 0,
      compras_confirmadas: metrica.compras_confirmadas || 0,
      faturamento: metrica.faturamento || 0,
      reembolso: metrica.reembolso || 0,
    })
  }

  const salvarEdicao = async (id: string) => {
    const { error } = await supabase
      .from('metricas')
      .update(valores)
      .eq('id', id)

    if (error) {
      alert('Erro ao salvar')
      console.error(error)
    } else {
      setEditando(null)
      onUpdate()
    }
  }

  const deletarMetrica = async (id: string) => {
    if (!confirm('Deseja realmente deletar esta métrica?')) return

    const { error } = await supabase
      .from('metricas')
      .delete()
      .eq('id', id)

    if (error) {
      alert('Erro ao deletar')
      console.error(error)
    } else {
      onUpdate()
    }
  }

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-300">
          <thead className="text-xs uppercase bg-gray-700 text-gray-300">
            <tr>
              <th className="px-6 py-3">Dia</th>
              <th className="px-6 py-3">Investimento</th>
              <th className="px-6 py-3">Impressões</th>
              <th className="px-6 py-3">Cliques</th>
              <th className="px-6 py-3">Page View</th>
              <th className="px-6 py-3">Início Compra</th>
              <th className="px-6 py-3">Compras Total</th>
              <th className="px-6 py-3">Compras Confirm</th>
              <th className="px-6 py-3">Faturamento</th>
              <th className="px-6 py-3">Reembolso</th>
              <th className="px-6 py-3">ROAS</th>
              <th className="px-6 py-3">CPC</th>
              <th className="px-6 py-3">Ações</th>
            </tr>
          </thead>
          <tbody>
            {metricas.map((metrica) => {
              const calc = calcularMetricas(metrica)
              const isEditando = editando === metrica.id

              return (
                <tr key={metrica.id} className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="px-6 py-4">{new Date(metrica.dia).toLocaleDateString('pt-BR')}</td>
                  <td className="px-6 py-4">{formatarMoeda(metrica.valor_usado)}</td>
                  <td className="px-6 py-4">{metrica.impressoes}</td>
                  <td className="px-6 py-4">{metrica.cliques_link}</td>
                  <td className="px-6 py-4">{metrica.visualizacoes_pagina}</td>
                  <td className="px-6 py-4">{metrica.finalizacoes_compra}</td>
                  <td className="px-6 py-4">
                    {isEditando ? (
                      <input
                        type="number"
                        value={valores.compras_totais}
                        onChange={(e) => setValores({...valores, compras_totais: parseFloat(e.target.value)})}
                        className="w-20 px-2 py-1 bg-gray-600 rounded"
                      />
                    ) : (
                      metrica.compras_totais || 0
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {isEditando ? (
                      <input
                        type="number"
                        value={valores.compras_confirmadas}
                        onChange={(e) => setValores({...valores, compras_confirmadas: parseFloat(e.target.value)})}
                        className="w-20 px-2 py-1 bg-gray-600 rounded"
                      />
                    ) : (
                      metrica.compras_confirmadas || 0
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {isEditando ? (
                      <input
                        type="number"
                        value={valores.faturamento}
                        onChange={(e) => setValores({...valores, faturamento: parseFloat(e.target.value)})}
                        className="w-24 px-2 py-1 bg-gray-600 rounded"
                      />
                    ) : (
                      formatarMoeda(metrica.faturamento || 0)
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {isEditando ? (
                      <input
                        type="number"
                        value={valores.reembolso}
                        onChange={(e) => setValores({...valores, reembolso: parseFloat(e.target.value)})}
                        className="w-24 px-2 py-1 bg-gray-600 rounded"
                      />
                    ) : (
                      formatarMoeda(metrica.reembolso || 0)
                    )}
                  </td>
                  <td className="px-6 py-4">{calc.roas.toFixed(2)}</td>
                  <td className="px-6 py-4">{formatarMoeda(calc.cpc)}</td>
                  <td className="px-6 py-4">
                    {isEditando ? (
                      <div className="flex gap-2">
                        <button
                          onClick={() => salvarEdicao(metrica.id)}
                          className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs"
                        >
                          Salvar
                        </button>
                        <button
                          onClick={() => setEditando(null)}
                          className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-xs"
                        >
                          Cancelar
                        </button>
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        <button
                          onClick={() => iniciarEdicao(metrica)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => deletarMetrica(metrica.id)}
                          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs"
                        >
                          Del
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
