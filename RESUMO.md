# RESUMO DO SISTEMA

## CREDENCIAIS
Email: molivesutter@gmail.com
Senha: molivesutter@gmail.com

## ESTRUTURA DE ARQUIVOS

### Configuração
- package.json = Dependências do projeto
- next.config.js = Configuração do Next.js
- tsconfig.json = Configuração do TypeScript
- tailwind.config.js = Configuração do Tailwind CSS
- .env.local = Variáveis de ambiente (VOCÊ PRECISA PREENCHER COM SUAS CHAVES DO SUPABASE)

### Aplicação (src/)
- app/layout.tsx = Layout principal
- app/page.tsx = Página inicial (redireciona)
- app/login/page.tsx = Página de login
- app/produtos/page.tsx = Lista de produtos
- app/produto/[id]/page.tsx = Detalhes do produto + métricas

### Componentes (src/components/)
- ImportExcel.tsx = Componente de importação de Excel
- MetricasTable.tsx = Tabela de métricas com edição
- Dashboard.tsx = Dashboard com gráficos e funil

### Bibliotecas (src/lib/)
- supabase.ts = Configuração do Supabase + tipos
- calculations.ts = Funções de cálculo das métricas

### Banco de Dados
- supabase-schema.sql = SQL para criar as tabelas no Supabase

## FLUXO DO SISTEMA

1. Usuário faz login (credenciais fixas)
2. Vê lista de produtos
3. Cria novo produto (só nome)
4. Abre o produto
5. Importa Excel do Facebook
6. Edita métricas manuais (compras, faturamento, reembolso)
7. Visualiza dashboard com todos os dados

## MÉTRICAS CALCULADAS AUTOMATICAMENTE

- CPC = Valor usado / Cliques no link
- CPM = (Valor usado / Impressões) * 1000
- CTR = (Cliques / Impressões) * 100
- Custo por P.V = Valor usado / Visualizações de página
- Custo por I.C = Valor usado / Finalizações de compra
- Ticket Médio = Faturamento / Compras confirmadas
- Lucro por Compra = (Faturamento - Investimento) / Compras confirmadas
- ROAS = Faturamento / Investimento
- Lucro Bruto = Faturamento - Investimento
- Lucro Líquido = Lucro Bruto - Reembolso
- Compras Pendentes = Compras Totais - Compras Confirmadas
- CPA = Valor usado / Compras confirmadas

## COMANDOS IMPORTANTES

### Instalar dependências:
npm install

### Rodar localmente:
npm run dev

### Buildar para produção:
npm run build

### Iniciar em produção:
npm start

## DEPLOY

1. Configure Supabase (crie tabelas com supabase-schema.sql)
2. Suba código para GitHub
3. Importe no Vercel
4. Adicione variáveis de ambiente no Vercel
5. Deploy automático!

## TECNOLOGIAS

- Next.js 14 (React Framework)
- TypeScript
- Tailwind CSS
- Supabase (PostgreSQL)
- Recharts (Gráficos)
- XLSX (Importação Excel)
- Vercel (Deploy)
