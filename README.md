# Dashboard de Métricas - Manual de Instalação

## PASSO 1: CONFIGURAR SUPABASE

1. Acesse https://supabase.com
2. Clique em "Start your project"
3. Faça login ou crie uma conta
4. Clique em "New Project"
5. Preencha:
   - Name: metricas-dashboard
   - Database Password: (crie uma senha forte)
   - Region: South America (São Paulo)
6. Clique em "Create new project"
7. Aguarde alguns minutos até o projeto ser criado

### CRIAR TABELAS NO BANCO

1. No painel do Supabase, clique em "SQL Editor" no menu lateral
2. Clique em "New Query"
3. Copie TODO o conteúdo do arquivo `supabase-schema.sql`
4. Cole no editor SQL
5. Clique em "Run" (ou pressione Ctrl+Enter)
6. Deve aparecer "Success. No rows returned"

### OBTER AS CHAVES DO SUPABASE

1. Clique em "Project Settings" (ícone de engrenagem no menu lateral)
2. Clique em "API" no menu
3. Copie os seguintes valores:
   - Project URL (ex: https://xxxxx.supabase.co)
   - anon public key (chave grande que começa com "eyJ...")

## PASSO 2: INSTALAR O PROJETO LOCALMENTE

1. Abra o terminal/cmd na pasta do projeto:
```bash
cd C:\Users\Edson\Downloads\roteiro
```

2. Instale as dependências:
```bash
npm install
```

3. Abra o arquivo `.env.local` e substitua:
```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJI...
```
(Cole as chaves que você copiou do Supabase)

4. Teste localmente:
```bash
npm run dev
```

5. Abra http://localhost:3000
6. Faça login com:
   - Email: molivesutter@gmail.com
   - Senha: molivesutter@gmail.com

## PASSO 3: FAZER DEPLOY NA VERCEL

### CRIAR CONTA E IMPORTAR PROJETO

1. Acesse https://vercel.com
2. Clique em "Sign Up" ou "Login"
3. Escolha "Continue with GitHub" (recomendado)
4. Após logar, clique em "Add New..." > "Project"
5. Se for primeira vez:
   - Instale Vercel no GitHub
   - Autorize o acesso

### SUBIR O CÓDIGO PARA O GITHUB

1. Acesse https://github.com
2. Clique no "+" no topo direito > "New repository"
3. Nome: metricas-dashboard
4. Escolha "Private"
5. Clique em "Create repository"

6. No terminal, na pasta do projeto:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/metricas-dashboard.git
git push -u origin main
```

### IMPORTAR NO VERCEL

1. Na Vercel, clique em "Import" no repositório que você criou
2. Clique em "Deploy"
3. ANTES de clicar em "Deploy", clique em "Environment Variables"
4. Adicione as 2 variáveis:
   - Name: `NEXT_PUBLIC_SUPABASE_URL`
   - Value: (cole a URL do Supabase)
   - Clique em "Add"
   
   - Name: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Value: (cole a chave do Supabase)
   - Clique em "Add"

5. Agora clique em "Deploy"
6. Aguarde alguns minutos (vai aparecer fogos de artifício quando terminar)
7. Clique em "Visit" para acessar seu sistema online

## PASSO 4: USAR O SISTEMA

### LOGIN
- Email: molivesutter@gmail.com
- Senha: molivesutter@gmail.com

### CRIAR PRODUTO
1. Na tela inicial, digite o nome do produto
2. Clique em "Criar Produto"

### IMPORTAR MÉTRICAS
1. Clique em "Abrir" no produto
2. Clique em "Choose File" em "Importar Excel"
3. Selecione o arquivo Excel do Facebook
4. Aguarde a importação
5. As métricas aparecerão na tabela

### PREENCHER DADOS MANUAIS
1. Na aba "Métricas", clique em "Editar" na linha desejada
2. Preencha:
   - Compras Totais
   - Compras Confirmadas
   - Faturamento
   - Reembolso
3. Clique em "Salvar"

### VER DASHBOARD DO PRODUTO
1. Clique na aba "Dashboard"
2. Visualize:
   - Resumo de métricas
   - Funil de conversão
   - Gráficos por dia
3. **NOVO:** Use os filtros de Data Início e Data Fim para filtrar por período
4. Clique em "Limpar Filtros" para remover os filtros

### DASHBOARD GLOBAL (NOVO!)
1. Na tela de produtos, clique em "Dashboard Global"
2. Veja métricas de TODOS os produtos juntos
3. Use o filtro "Filtro por Produto" para ver apenas um produto específico
4. Use os filtros de data para filtrar por período
5. Combine ambos os filtros para análises específicas

## FUNCIONALIDADES DE FILTROS

### Dashboard do Produto (dentro de cada produto)
- **Filtro por Data Início:** Define a data inicial dos dados
- **Filtro por Data Fim:** Define a data final dos dados
- **Botão "Limpar Filtros":** Remove todos os filtros aplicados
- Mostra quantos registros estão sendo exibidos (ex: "Mostrando 15 de 30 registros")

### Dashboard Global (visão geral)
- **Filtro por Produto:** Escolha ver todos os produtos ou apenas um específico
- **Filtro por Data Início:** Define a data inicial dos dados
- **Filtro por Data Fim:** Define a data final dos dados
- **Botão "Limpar Filtros":** Remove filtros de data
- Combine filtros de produto + período para análises detalhadas

## FORMATO DO EXCEL

O arquivo Excel deve conter as seguintes colunas EXATAS:
- Dia
- Moeda
- Valor usado (BRL)
- Impressões
- Frequência
- Cliques no link
- Visualizações da página de destino do site
- Finalizações de compra iniciadas
- Início dos relatórios
- Término dos relatórios

## SOLUÇÃO DE PROBLEMAS

### Erro ao importar Excel
- Verifique se as colunas têm os nomes EXATOS acima
- Verifique se os dados estão em formato numérico correto

### Erro "Failed to fetch"
- Verifique se as variáveis de ambiente estão corretas no Vercel
- Verifique se as tabelas foram criadas no Supabase

### Não consegue fazer login
- Email: molivesutter@gmail.com
- Senha: molivesutter@gmail.com
- (Exatamente como está escrito)

### Erro ao fazer deploy na Vercel
- Certifique-se de que adicionou as variáveis de ambiente
- Tente fazer rebuild: Settings > Deployments > ... > Redeploy

### Filtros não funcionam
- Certifique-se de que as datas estão no formato correto
- Verifique se há dados no período selecionado
- Use "Limpar Filtros" e tente novamente

## ATUALIZAÇÕES FUTURAS

Para atualizar o código depois:
```bash
git add .
git commit -m "Descrição da mudança"
git push
```

A Vercel vai fazer deploy automático!

## SUPORTE

Se tiver problemas:
1. Verifique os logs na Vercel (aba "Logs")
2. Verifique o console do navegador (F12)
3. Verifique se as tabelas existem no Supabase
