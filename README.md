# Dreams for Sale

Bem-vindo ao repositório do **Dreams for Sale** - um portal online onde os sonhos se tornam realidade. Este site oferece uma experiência única, onde produtos fantásticos e futuristas, que vivem na imaginação, são apresentados como itens disponíveis para compra.

<a href="https://davicesarmorais.github.io/dreams-for-sale"><img src="./preview.png"></a>

## Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)

## Visão Geral

**Dreams for Sale** é um site fictício que explora o conceito de transformar sonhos em produtos reais. Cada item no site é uma manifestação de desejos e inovações imaginárias, oferecendo uma experiência imersiva aos usuários.

## Funcionalidades

- **Navegação intuitiva:** Menu de navegação simplificado com links para as páginas de produtos, sobre e contato.
- **Produtos destacados:** Apresentação de produtos em promoção com imagens, descrições e preços.
- **Contato:** Página para contato com a loja.
- **Carrinho de Compras:** Funcionalidade para adicionar produtos ao carrinho.
- **Sessão Sobre:** Descrição inspiradora da missão e visão do **Dreams for Sale**.
- **Mapa de Localização:** Integração com Google Maps para mostrar a localização da loja.
- **Links para Redes Sociais:** Ícones clicáveis que redirecionam para as redes sociais da loja.

## Estrutura de Pastas

```plaintext
dreams-for-sale/
├── public/
│   ├── products/
│   │   ├── dream-synth.png
│   │   ├── flavor-forge.png
│   │   ├── flying-car.png
│   │   ├── hoverboard.png
│   │   ├── quantum-key.png
│   │   ├── sentient.png
│   │   ├── smart-shoe.png
│   │   ├── teleport-cube.png
│   │   └── time-capsule.png
│   ├── background.jpg
│   └── dreams-for-sale-icon.png
├── src/
│   ├── app/
│   │   ├── produtos/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── home/
│   │   │   ├── Header.tsx
│   │   │   └── OnSale.tsx
│   │   ├── Button.tsx
│   │   └── Navbar.tsx
│   └── data/
│   │   └── products.ts
├── .gitignore
├── README.md
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## Tecnologias Utilizadas

- **Next.js:** Estrutura e rotas.
- **Typescript:** Linguagem usada.
- **React:** Biblioteca usada.
- **Tailwind CSS:** Estilização e layout.
