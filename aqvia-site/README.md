# AQVIA Piscinas — Site Institucional

Site futurista, responsivo e otimizado para SEO da **AQVIA Piscinas**, empresa de limpeza e manutenção de piscinas em Santa Luzia/MG e Belo Horizonte.

**Água limpa. Vida mais leve.**

## Estrutura do projeto

```
aqvia-site/
├── index.html        # Página inicial
├── sobre.html         # Sobre Nós (história, missão, visão e valores)
├── servicos.html      # Serviços e planos mensais
├── contato.html        # Contato, formulário e mapa
├── css/style.css       # Estilos (design system AQVIA)
├── js/script.js         # Menu mobile, formulário e ano do rodapé
├── robots.txt            # Regras de indexação para buscadores
├── sitemap.xml            # Mapa do site para SEO
├── vercel.json              # Configuração de deploy na Vercel
└── .gitignore
```

Site 100% estático (HTML/CSS/JS puro) — não requer build, framework ou dependências.

## Como publicar no GitHub

1. Crie um repositório novo no GitHub (ex.: `aqvia-piscinas-site`), **sem** adicionar README/gitignore pelo GitHub (já estão aqui).
2. No terminal, dentro da pasta do projeto:
   ```bash
   git init
   git add .
   git commit -m "Site AQVIA Piscinas"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/aqvia-piscinas-site.git
   git push -u origin main
   ```

## Como publicar na Vercel

**Opção A — pelo painel da Vercel (recomendado):**
1. Acesse [vercel.com](https://vercel.com) e faça login com sua conta GitHub.
2. Clique em **Add New → Project**.
3. Selecione o repositório `aqvia-piscinas-site`.
4. Em *Framework Preset*, escolha **Other** (site estático).
5. Não é necessário configurar *Build Command* nem *Output Directory* — deixe em branco.
6. Clique em **Deploy**. Em cerca de 1 minuto o site estará no ar em um domínio `.vercel.app`.

**Opção B — pela CLI da Vercel:**
```bash
npm i -g vercel
vercel login
vercel --prod
```

## Domínio próprio

Depois do deploy, em **Project → Settings → Domains** na Vercel, adicione `www.aqviapiscinas.com.br` (ou o domínio escolhido) e siga as instruções de DNS mostradas na tela.

⚠️ As tags de SEO (canonical, Open Graph, JSON-LD) já apontam para `https://www.aqviapiscinas.com.br/` — atualize essas URLs nos arquivos `.html` caso o domínio final seja diferente.

## O que personalizar depois

- **Imagens reais**: substitua os elementos ilustrativos (SVG) por fotos reais da equipe, da frota e de piscinas atendidas, em `images/`.
- **Google Maps**: o mapa em `contato.html` usa o endereço em texto; para um pino mais preciso, gere o link em [Google Maps → Compartilhar → Incorporar mapa] e troque o `src` do `iframe`.
- **Redes sociais**: atualize o link do Instagram (`@aqvia.piscinas`) se o perfil real for diferente.
- **Formulário de contato**: hoje ele abre o WhatsApp com a mensagem preenchida (não depende de backend). Se preferir receber por e-mail, é possível integrar um serviço como Formspree ou uma função serverless da própria Vercel.

## Contato exibido no site

- **Telefone/WhatsApp:** (31) 98373-3004
- **E-mail:** aqviapiscinas@outlook.com
- **Endereço:** Rua Imperatriz Leopoldina, 205 — Chácaras Del Rey, Santa Luzia/MG
