# Inventario_WEB

**Projeto:** Aplicação front-end para gerenciamento de inventário.

**Descrição:**
Este repositório contém a interface web do sistema de inventário usada para gerenciar usuários, produtos e estoques. A aplicação foi construída com React, Material UI, e integra chamadas a uma API REST através de `axios`. Há testes end-to-end automatizados com Cypress.

**Principais tecnologias**
- **Front-end:** React 19 + Vite
- **UI:** MUI (Material UI)
- **HTTP:** axios
- **Teste E2E:** Cypress
- **Deploy/build:** Vite

**Estrutura principal do projeto**
- `src/` : código-fonte React
	- `components/` : componentes reutilizáveis (BannerHero, ModalPage, etc.)
	- `layouts/` : componentes de layout (NavBar, Footer, MainLayout)
	- `pages/` : páginas da aplicação (Login, Register, Usuario, estoquePages, produtoPages)
	- `services/` : clientes HTTP e serviços que falam com a API (`api.js`, `authService.js`, `produtoService.js`, `usuarioService.js`, `estoqueService.js`)
	- `theme/` : tema customizado MUI
	- `utils/` : utilitários (ex.: `formatDate.jsx`)
- `cypress/` : testes E2E e fixtures
	- `cypress/e2e/` : especificações de teste (ex.: `Estoque.cy.js`, `Produto.cy.js`, `Usuario.cy.js`)
	- `cypress/fixtures/` : dados de teste

Pré-requisitos
- Node.js 
- npm

Instalação (local)
1. Clone o repositório:

```
git clone https://github.com/uni-inventario/Inventario_WEB.git
cd Inventario_WEB
```

2. Instale dependências:

```
npm install
```

Configurações de ambiente
--------------------------------
Esta aplicação usa variáveis de ambiente via Vite (`import.meta.env`). As variáveis esperadas dependem do backend e (opcionalmente) do Firebase. Exemplos comuns:

- `VITE_API_URL` : URL base da API (ex.: `http://localhost:3000/`)
- Se você integrar Firebase, adicione variáveis como `VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_AUTH_DOMAIN`, etc.

No Windows (PowerShell) crie um arquivo `.env` na raiz com linhas como:

```
VITE_API_URL=http://localhost:3000/
# VITE_FIREBASE_API_KEY=...
# VITE_FIREBASE_AUTH_DOMAIN=...
```

Scripts úteis (conforme `package.json`)
- `npm run dev` : inicia o servidor de desenvolvimento (Vite) na porta 5550 (conforme configuração atual).
- `npm run build` : gera a versão de produção (`dist/`).
- `npm run preview` : pré-visualiza a versão build localmente.
- `npm run lint` : executa o ESLint no código.
- `npm run test` : executa os testes Cypress headless (`npx cypress run`).
- `npm run test:e2e` : inicia o servidor (`npm run dev`) e executa os testes E2E automaticamente (usa `start-server-and-test`).

Como rodar localmente
1. Inicie o backend da API (se aplicável) e configure `VITE_API_URL` apontando para ele.
2. Instale dependências: `npm install`.
3. Start em desenvolvimento:

```
npm run dev
```

Abra no navegador: `http://localhost:5550` (porta configurada no `package.json` via `vite --port 5550`).

Build para produção

```
npm run build
npm run preview
```

Testes com Cypress
------------------
O projeto contém testes E2E em `cypress/e2e/`.

Rodar testes headless (CI / via terminal):

```
npm run test
```

Rodar testes E2E iniciando o servidor automaticamente (útil para CI/local):

```
npm run test:e2e
```

Executar Cypress de forma interativa (UI)
1. Em um terminal rode o servidor de desenvolvimento:

```
npm run dev
```

2. Em outro terminal abra a interface do Cypress (interativa):

```
npx cypress open
```

Observações para Windows/PowerShell:
- Execute `npm run dev` e deixe o processo rodando no terminal; abra um novo terminal para executar `npx cypress open` ou `npm run test`.

Executar um spec específico (headless):

```
npx cypress run --spec "cypress/e2e/Produto.cy.js"
```

Dicas de debug
- Para falhas em CI, execute `npx cypress run --headed --browser chrome` para ver o navegador.
- Use `cy.log()` dentro dos testes para mensagens úteis.

Integração com Firebase (opcional)
---------------------------------
O repositório tem a dependência `firebase`, mas a inicialização não está fornecida automaticamente. Para conectar o Firebase:

1. Crie um projeto no Firebase Console.
2. Copie as chaves de configuração e adicione-as como variáveis de ambiente `VITE_FIREBASE_*` no `.env`.
3. Inicialize o Firebase em um arquivo (ex.: `src/firebase.js`) com:

```js
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export default app;
```

Contribuindo
------------
- Abra uma issue descrevendo o problema ou feature.
- Crie branches do tipo `feature/` ou `fix/` e abra um Pull Request para revisão.
