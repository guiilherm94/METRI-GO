'use client'

import { useState } from 'react'
import { Metrica } from '@/lib/supabase'
import { calcularMetricas, formatarMoeda, formatarPercentual } from '@/lib/calculations'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts'

interface DashboardProps {
  metricas: Metrica[]
}

export default function Dashboard({ metricas }: DashboardProps) {
  const [dataInicio, setDataInicio] = useState('')
  const [dataFim, setDataFim] = useState('')

  const metricasFiltradas = metricas.filter(m => {
    const dataMetrica = new Date(m.dia)
    const inicio = dataInicio ? new Date(dataInicio) : null
    const fim = dataFim ? new Date(dataFim) : null

    if (inicio && dataMetrica < inicio) return false
    if (fim && dataMetrica > fim) return false
    return true
  })

  const limparFiltros = () => {
    setDataInicio('')
    setDataFim('')
  }

  const totais = metricasFiltradas.reduce((acc, m) => {
    const calc = calcularMetricas(m)
    return {
      investimento: acc.investimento + m.valor_usado,
      faturamento: acc.faturamento + (m.faturamento || 0),
      impressoes: acc.impressoes + m.impressoes,
      cliques: acc.cliques + m.cliques_link,
      pageViews: acc.pageViews + m.visualizacoes_pagina,
      inicioCompra: acc.inicioCompra + m.finalizacoes_compra,
      comprasConfirmadas: acc.comprasConfirmadas + (m.compras_confirmadas || 0),
      reembolso: acc.reembolso + (m.reembolso || 0),
    }
  }, {
    investimento: 0,
    faturamento: 0,
    impressoes: 0,
    cliques: 0,
    pageViews: 0,
    inicioCompra: 0,
    comprasConfirmadas: 0,
    reembolso: 0,
  })

  const lucroBruto = totais.faturamento - totais.investimento
  const lucroLiquido = lucroBruto - totais.reembolso
  const roas = totais.investimento > 0 ? totais.faturamento / totais.investimento : 0
  const ctr = totais.impressoes > 0 ? (totais.cliques / totais.impressoes) * 100 : 0
  const convPageView = totais.pageViews > 0 ? (totais.inicioCompra / totais.pageViews) * 100 : 0
  const convCompra = totais.inicioCompra > 0 ? (totais.comprasConfirmadas / totais.inicioCompra) * 100 : 0
  const ticketMedio = totais.comprasConfirmadas > 0 ? totais.faturamento / totais.comprasConfirmadas : 0

  const dadosPorDia = metricasFiltradas
    .sort((a, b) => new Date(a.dia).getTime() - new Date(b.dia).getTime())
    .map(m => {
      const calc = calcularMetricas(m)
      return {
        dia: new Date(m.dia).toLocaleDateString('pt-BR'),
        investimento: m.valor_usado,
        faturamento: m.faturamento || 0,
        roas: calc.roas,
        compras: m.compras_confirmadas || 0,
      }
    })

  const mediaComprasPorDia = totais.comprasConfirmadas / (metricasFiltradas.length || 1)

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl font-bold text-white mb-4">Filtros</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-300 mb-2">Data Início</label>
            <input
              type="date"
              value={dataInicio}
              onChange={(e) => setDataInicio(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Data Fim</label>
            <input
              type="date"
              value={dataFim}
              onChange={(e) => setDataFim(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={limparFiltros}
              className="w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition"
            >
              Limpar Filtros
            </button>
          </div>
        </div>
        <div className="mt-4 text-gray-400 text-sm">
          Mostrando {metricasFiltradas.length} de {metricas.length} registros
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-gray-400 text-sm mb-2">Investimento</h3>
          <p className="text-2xl font-bold text-white">{formatarMoeda(totais.investimento)}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-gray-400 text-sm mb-2">Faturamento</h3>
          <p className="text-2xl font-bold text-green-400">{formatarMoeda(totais.faturamento)}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-gray-400 text-sm mb-2">Lucro Líquido</h3>
          <p className={`text-2xl font-bold ${lucroLiquido >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {formatarMoeda(lucroLiquido)}
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-gray-400 text-sm mb-2">ROAS</h3>
          <p className="text-2xl font-bold text-blue-400">{roas.toFixed(2)}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-gray-400 text-sm mb-2">Compras Confirmadas</h3>
          <p className="text-2xl font-bold text-white">{totais.comprasConfirmadas}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-gray-400 text-sm mb-2">Ticket Médio</h3>
          <p className="text-2xl font-bold text-white">{formatarMoeda(ticketMedio)}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-gray-400 text-sm mb-2">Média Compras/Dia</h3>
          <p className="text-2xl font-bold text-white">{mediaComprasPorDia.toFixed(2)}</p>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-white mb-6">Funil de Conversão</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-300">Impressões</span>
              <span className="text-white font-bold">{totais.impressoes.toLocaleString('pt-BR')}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div className="bg-blue-600 h-4 rounded-full" style={{width: '100%'}}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-300">Cliques ({formatarPercentual(ctr)})</span>
              <span className="text-white font-bold">{totais.cliques.toLocaleString('pt-BR')}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div className="bg-blue-500 h-4 rounded-full" style={{width: `${(totais.cliques / totais.impressoes) * 100}%`}}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-300">Visualizações de Página</span>
              <span className="text-white font-bold">{totais.pageViews.toLocaleString('pt-BR')}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div className="bg-green-600 h-4 rounded-full" style={{width: `${(totais.pageViews / totais.impressoes) * 100}%`}}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-300">Início de Compra ({formatarPercentual(convPageView)})</span>
              <span className="text-white font-bold">{totais.inicioCompra.toLocaleString('pt-BR')}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div className="bg-yellow-600 h-4 rounded-full" style={{width: `${(totais.inicioCompra / totais.impressoes) * 100}%`}}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-300">Compras Confirmadas ({formatarPercentual(convCompra)})</span>
              <span className="text-white font-bold">{totais.comprasConfirmadas.toLocaleString('pt-BR')}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div className="bg-green-500 h-4 rounded-full" style={{width: `${(totais.comprasConfirmadas / totais.impressoes) * 100}%`}}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-white mb-6">Compras Confirmadas por Dia</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dadosPorDia}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="dia" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip contentStyle={{backgroundColor: '#1F2937', border: 'none'}} />
            <Legend />
            <Bar dataKey="compras" fill="#3B82F6" name="Compras" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-white mb-6">Investimento vs Faturamento</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dadosPorDia}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="dia" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip contentStyle={{backgroundColor: '#1F2937', border: 'none'}} />
            <Legend />
            <Line type="monotone" dataKey="investimento" stroke="#EF4444" name="Investimento" />
            <Line type="monotone" dataKey="faturamento" stroke="#10B981" name="Faturamento" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
