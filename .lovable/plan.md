
# Plano de atualização do site Mobile Canal

## Resumo

Vou atualizar o site com as novas informações fornecidas, mantendo o layout atual. As principais alterações incluem atualização de dados de contato, novo slogan, missão/visão/valores expandidos, nova seção de mercado de atuação e lista de produtos/serviços mais detalhada.

---

## Alterações identificadas

### 1. Atualizações de dados de contato
- **Email**: de `mobilecanal@hotmail.com` para `atendimento@mobilecanal.com.br`
- **Horário de sábado**: de `08:00 - 13:00` para `08:00 - 12:00`
- **Link do Instagram**: atualizar para o novo link com parâmetros UTM

### 2. Slogan atualizado
- **Atual**: "Seu lugar é aqui!"
- **Novo**: "Qualidade, design e conforto para seu lar."

### 3. Missão, Visão e Valores expandidos
- **Missão**: "Transformar residências em lares dos sonhos através de móveis e decorações de qualidade, oferecendo soluções completas para o lar com atendimento personalizado e excelência."
- **Visão**: "Ser a referência em móveis e decorações no Espírito Santo, reconhecida pela qualidade dos produtos, inovação em design e compromisso com a satisfação dos clientes."
- **Valores**: Lista expandida com 5 valores (Qualidade, Atendimento, Confiança, Inovação, Compromisso)

### 4. Nova seção: Mercado de atuação
Adicionar texto sobre o mercado de atuação na seção Sobre

### 5. Lista de produtos/serviços expandida
Atualizar para incluir todas as categorias mencionadas:
- Móveis para sala (sofás, poltronas, mesas, estantes, painéis)
- Móveis para quarto (camas, guarda-roupas, cômodas, cabeceiras)
- Móveis para cozinha (mesas de jantar, cadeiras, armários)
- Decorações e complementos (tapetes, cortinas, quadros, luminárias)
- Cama, mesa e banho
- Soluções multifuncionais

### 6. Serviços adicionais
Adicionar menção a: Decoração, Marcenaria e Montagem

### 7. Criar sitemap.xml
Arquivo de sitemap para SEO

---

## Arquivos a serem modificados

### `src/components/Hero.tsx`
- Atualizar slogan de "Seu lugar é aqui!" para "Qualidade, design e conforto para seu lar."

### `src/components/About.tsx`
- Atualizar texto da Missão com versão completa
- Atualizar texto da Visão com versão completa
- Expandir Valores para mostrar os 5 valores em lista
- Adicionar texto sobre mercado de atuação

### `src/components/Services.tsx`
- Expandir lista de produtos para incluir todas as categorias
- Adicionar serviços: Decoração, Marcenaria e Montagem

### `src/components/Footer.tsx`
- Atualizar email para `atendimento@mobilecanal.com.br`
- Atualizar horário de sábado para `08:00 - 12:00`
- Atualizar link do Instagram

### `src/components/Contact.tsx`
- Atualizar email para `atendimento@mobilecanal.com.br`
- Atualizar horário de sábado para `08:00 - 12:00`
- Atualizar link do Instagram

### `public/sitemap.xml` (novo arquivo)
- Criar sitemap.xml para SEO

---

## Detalhes técnicos

### Estrutura do sitemap.xml
```text
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://mobilecanal.com.br/</loc>
    <lastmod>2026-01-26</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Valores expandidos (estrutura)
- Qualidade - Produtos duráveis e bem acabados
- Atendimento - Relacionamento próximo e personalizado
- Confiança - Transparência e ética nas relações
- Inovação - Busca constante por novidades e tendências
- Compromisso - Cumprimento de prazos e promessas

### Lista de produtos atualizada
```text
- Móveis para sala
- Móveis para quarto
- Móveis para cozinha
- Decorações e complementos
- Cama, mesa e banho
- Soluções multifuncionais
- Decoração personalizada
- Marcenaria
- Montagem especializada
```

---

## O que será mantido

- Layout geral do site
- Catálogo de produtos com imagens
- Depoimentos existentes (6 clientes)
- Cores e estilo visual
- Botão flutuante WhatsApp
- Mapa interativo
- Rodapé MonteSite
- Configuração `lang="pt-BR"`

---

## Ordem de implementação

1. Atualizar `Hero.tsx` com novo slogan
2. Atualizar `About.tsx` com missão, visão, valores e mercado
3. Atualizar `Services.tsx` com produtos e serviços expandidos
4. Atualizar `Contact.tsx` com dados corrigidos
5. Atualizar `Footer.tsx` com dados corrigidos
6. Criar `public/sitemap.xml`
