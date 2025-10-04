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
- app/dashboard/page.tsx = Dashboard global (NOVO!)

### Componentes (src/components/)
- ImportExcel.tsx = Componente de importação de Excel
- MetricasTable.tsx = Tabela de métricas com edição
- Dashboard.tsx = Dashboard com gráficos, funil e filtros (ATUALIZADO!)

### Bibliotecas (src/lib/)
- supabase.ts = Configuração do Supabase + tipos
- calculations.ts = Funções de cálculo das métricas

### Banco de Dados
- supabase-schema.sql = SQL para criar as tabelas no Supabase

## FLUXO DO SISTEMA

1. Usuário faz login (credenciais fixas)
2. Vê lista de produtos
3. Pode acessar o Dashboard Global (ver todos os produtos juntos)
4. Cria novo produto (só nome)
5. Abre o produto
6. Importa Excel do Facebook
7. Edita métricas manuais (compras, faturamento, reembolso)
8. Visualiza dashboard do produto com filtros de período
9. Volta para Dashboard Global para análise comparativa

## FUNCIONALIDADES DE FILTROS

### Dashboard do Produto
- Filtro por Data Início
- Filtro por Data Fim
- Botão "Limpar Filtros"
- Contador de registros filtrados

### Dashboard Global (NOVO!)
- Filtro por Produto (todos ou específico)
- Filtro por Data Início
- Filtro por Data Fim
- Visualização consolidada de todos os produtos
- Análise comparativa entre produtos

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

## PÁGINAS DO SISTEMA

- / = Redireciona para login ou produtos
- /login = Tela de login
- /produtos = Lista de produtos + botão Dashboard Global
- /produto/[id] = Dashboard e métricas de um produto específico
- /dashboard = Dashboard global com todos os produtos (NOVO!)

## TECNOLOGIAS

- Next.js 14 (React Framework)
- TypeScript
- Tailwind CSS
- Supabase (PostgreSQL)
- Recharts (Gráficos)
- XLSX (Importação Excel)
- Vercel (Deploy)

## NOVIDADES NESTA VERSÃO

✅ Dashboard Global - visualize métricas de todos os produtos juntos
✅ Filtro por Produto - escolha qual produto analisar no dashboard global
✅ Filtros de Data - filtre por período em ambos os dashboards
✅ Contador de Registros - veja quantos registros estão sendo exibidos após filtros
✅ Botão Limpar Filtros - remova todos os filtros rapidamente
✅ Análise Comparativa - compare performance de diferentes produtos e períodos
