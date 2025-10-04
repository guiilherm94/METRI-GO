import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Produto = {
  id: string
  nome: string
  created_at: string
}

export type Metrica = {
  id: string
  produto_id: string
  dia: string
  moeda: string
  valor_usado: number
  impressoes: number
  frequencia: number
  cliques_link: number
  visualizacoes_pagina: number
  finalizacoes_compra: number
  inicio_relatorios: string
  termino_relatorios: string
  compras_totais?: number
  compras_confirmadas?: number
  faturamento?: number
  reembolso?: number
  created_at: string
}
