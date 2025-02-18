# Daly Games 🎮

Um catálogo de jogos desenvolvido com Next.js 14, TypeScript e Tailwind CSS. O projeto oferece uma interface moderna para explorar e descobrir informações sobre diversos jogos.

Uma coisa muito interessante em trabalhar com NextJS é a mistura entre Client-Side e Server-Side, tornando muitas vezes a construção do site muito mais rápida por já ter dados prontos vindos do Server-Side.

Além do NextJS, também foi meu primeiro grande projeto usando TailwindCSS e Typescript.

<br>
<br>

## ⚡ Tecnologias

- [Next.js 14](https://nextjs.org/) - Framework React com SSR e SSG
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática 
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [React Icons](https://react-icons.github.io/react-icons/) - Ícones React

<br>
<br>

## 🚀 Funcionalidades

- Listagem de jogos da API
- Busca de jogos por título
- Página detalhada de cada jogo
- Sistema de favoritos
- Layout responsivo
- SEO otimizado com meta tags dinâmicas

<br>
<br>

## 💻 Estrutura do Projeto

```
src/
  ├── app/               # Rotas e páginas
  ├── components/        # Componentes reutilizáveis
  ├── utils/            # Tipos e utilitários
  └── ...
```

## 📦 Interfaces

```ts
export interface GameProps {
    id: number;
    title: string;
    description: string;
    image_url: string;
    platforms: string[];
    categories: string[];
    release: string;
}
```

<br>
<br>

## 📸 Screenshots

![Home](./project-images/Home.png)
*Página inicial com jogo do dia e listagem*

![Search](./project-images/Search.png)
*Busca de jogos por título*

![Game Page](./project-images/Game%20Page.png)
*Página detalhada do jogo*

![Profile](./project-images/Profile.png)
*Perfil do usuário com favoritos*

<br>
<br>

## 🚀 Como executar

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```
3. Inicie o servidor de desenvolvimento:
```bash 
npm run dev
```
4. Acesse http://localhost:3000

<br>
<br>

## ✨ Créditos

Projeto desenvolvido durante o curso [NextJS do zero ao avançado na pratica 2023](https://www.udemy.com/share/104Wus3@JVcovy9zHCiYz6N56LKCINtctiJ3N9527dbnZ8Dmy3kCjUqO9SrXBWiThy8weOHPcA==/) do Sujeito Programador.

## 👨‍💻 Autor

- [@Victor-Lis](https://github.com/Victor-Lis)