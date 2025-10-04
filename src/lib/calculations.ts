import { Metrica } from './supabase'

export const calcularMetricas = (metrica: Metrica) => {
  const cpc = metrica.cliques_link > 0 ? metrica.valor_usado / metrica.cliques_link : 0
  const cpm = metrica.impressoes > 0 ? (metrica.valor_usado / metrica.impressoes) * 1000 : 0
  const ctr = metrica.impressoes > 0 ? (metrica.cliques_link / metrica.impressoes) * 100 : 0
  const custoPorPV = metrica.visualizacoes_pagina > 0 ? metrica.valor_usado / metrica.visualizacoes_pagina : 0
  const custoPorIC = metrica.finalizacoes_compra > 0 ? metrica.valor_usado / metrica.finalizacoes_compra : 0
  
  const ticketMedio = (metrica.compras_confirmadas && metrica.compras_confirmadas > 0) 
    ? (metrica.faturamento || 0) / metrica.compras_confirmadas 
    : 0
  
  const lucroCompra = (metrica.compras_confirmadas && metrica.compras_confirmadas > 0)
    ? ((metrica.faturamento || 0) - metrica.valor_usado) / metrica.compras_confirmadas
    : 0
  
  const roas = metrica.valor_usado > 0 ? (metrica.faturamento || 0) / metrica.valor_usado : 0
  const lucroBruto = (metrica.faturamento || 0) - metrica.valor_usado
  const lucroLiquido = lucroBruto - (metrica.reembolso || 0)
  const comprasPendentes = (metrica.compras_totais || 0) - (metrica.compras_confirmadas || 0)
  const cpa = (metrica.compras_confirmadas && metrica.compras_confirmadas > 0)
    ? metrica.valor_usado / metrica.compras_confirmadas
    : 0

  return {
    cpc,
    cpm,
    ctr,
    custoPorPV,
    custoPorIC,
    ticketMedio,
    lucroCompra,
    roas,
    lucroBruto,
    lucroLiquido,
    comprasPendentes,
    cpa
  }
}

export const formatarMoeda = (valor: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor)
}

export const formatarPercentual = (valor: number) => {
  return `${valor.toFixed(2)}%`
}
