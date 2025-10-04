'use client'

import { useState } from 'react'
import * as XLSX from 'xlsx'
import { supabase } from '@/lib/supabase'

interface ImportExcelProps {
  produtoId: string
  onImportSuccess: () => void
}

export default function ImportExcel({ produtoId, onImportSuccess }: ImportExcelProps) {
  const [loading, setLoading] = useState(false)

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setLoading(true)

    const reader = new FileReader()
    reader.onload = async (evt) => {
      const bstr = evt.target?.result
      const wb = XLSX.read(bstr, { type: 'binary' })
      const wsname = wb.SheetNames[0]
      const ws = wb.Sheets[wsname]
      const data = XLSX.utils.sheet_to_json(ws)

      const metricas = data.map((row: any) => ({
        produto_id: produtoId,
        dia: row['Dia'],
        moeda: row['Moeda'],
        valor_usado: parseFloat(row['Valor usado (BRL)']) || 0,
        impressoes: parseInt(row['Impressões']) || 0,
        frequencia: parseFloat(row['Frequência']) || 0,
        cliques_link: parseInt(row['Cliques no link']) || 0,
        visualizacoes_pagina: parseInt(row['Visualizações da página de destino do site']) || 0,
        finalizacoes_compra: parseInt(row['Finalizações de compra iniciadas']) || 0,
        inicio_relatorios: row['Início dos relatórios'],
        termino_relatorios: row['Término dos relatórios'],
      }))

      const { error } = await supabase
        .from('metricas')
        .insert(metricas)

      if (error) {
        alert('Erro ao importar dados')
        console.error(error)
      } else {
        alert('Dados importados com sucesso!')
        onImportSuccess()
      }

      setLoading(false)
      e.target.value = ''
    }

    reader.readAsBinaryString(file)
  }

  return (
    <div className="bg-gray-800 p-6 rounded-lg mb-6">
      <h2 className="text-xl font-bold text-white mb-4">Importar Excel</h2>
      <input
        type="file"
        accept=".xlsx,.xls"
        onChange={handleFileUpload}
        disabled={loading}
        className="block w-full text-sm text-gray-300
          file:mr-4 file:py-2 file:px-4
          file:rounded file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-600 file:text-white
          hover:file:bg-blue-700
          file:cursor-pointer
          cursor-pointer"
      />
      {loading && (
        <div className="mt-4 text-blue-400">Importando dados...</div>
      )}
    </div>
  )
}
