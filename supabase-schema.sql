CREATE TABLE produtos (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    nome TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE TABLE metricas (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    produto_id UUID REFERENCES produtos(id) ON DELETE CASCADE,
    dia DATE NOT NULL,
    moeda TEXT NOT NULL,
    valor_usado DECIMAL(10,2) NOT NULL,
    impressoes INTEGER NOT NULL,
    frequencia DECIMAL(10,8) NOT NULL,
    cliques_link INTEGER NOT NULL,
    visualizacoes_pagina INTEGER NOT NULL,
    finalizacoes_compra INTEGER NOT NULL,
    inicio_relatorios DATE NOT NULL,
    termino_relatorios DATE NOT NULL,
    compras_totais INTEGER,
    compras_confirmadas INTEGER,
    faturamento DECIMAL(10,2),
    reembolso DECIMAL(10,2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE INDEX idx_metricas_produto_id ON metricas(produto_id);
CREATE INDEX idx_metricas_dia ON metricas(dia);

ALTER TABLE produtos ENABLE ROW LEVEL SECURITY;
ALTER TABLE metricas ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable all for authenticated users" ON produtos
FOR ALL USING (true);

CREATE POLICY "Enable all for authenticated users" ON metricas
FOR ALL USING (true);
