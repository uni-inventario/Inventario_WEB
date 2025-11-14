 Guia de Contribuição e Execução do Projeto

# 1. Clonar o Repositório

O desenvolvimento principal acontece na branch develop. Use o comando abaixo para clonar o repositório e já entrar na branch correta:
```
git clone --branch develop <URL_DO_REPOSITORIO>
cd nome-do-projeto
```

# 2. Baixar dependencias 

```
npm install
```

# 3. Rodar o Projeto

Para iniciar a aplicação:
```
npm run dev
```

# Fluxo de Desenvolvimento (Git Flow)

O Git Flow organiza o desenvolvimento com base nas seguintes branches principais:

main: Versão estável, corresponde ao ambiente de produção.

develop: Versão de integração, onde todo o novo código entra.

feature/: Branches para o desenvolvimento de novas funcionalidades.

# Como Criar uma Nova Feature

Sempre inicie o trabalho a partir da branch develop.

# Atualize a branch develop

Garanta que você está com o código mais recente antes de começar:
```
git checkout develop
git pull
```

2️⃣ Crie sua nova feature

Crie uma nova branch com o prefixo feature/ e um nome descritivo:
```
git checkout -b feature/nome-da-sua-feature
```

3️⃣ Desenvolva e faça Commits

Desenvolva sua funcionalidade e faça commits pequenos e atômicos.
```
git add .
git commit -m "feat: Adiciona funcionalidade X com validação Y"
```


# Envie a feature para o repositório remoto

git push -u origin feature/nome-da-sua-feature


# Como Enviar Pull Request (PR)

Acesse o GitHub.

Abra um Pull Request da sua branch (feature/nome-da-sua-feature) para a branch develop.

Preencha o template do PR e inclua um resumo claro das mudanças.

Após a aprovação, o merge será realizado.

#❗ ATENÇÃO: Nunca faça commit direto nas branches main ou develop. Todo código deve entrar via Pull Request para garantir revisão de código.

🔁 Atualizando sua Feature com o Código Mais Recente

Se a branch develop for atualizada enquanto você está desenvolvendo sua feature, você deve sincronizar seu código para evitar conflitos futuros.

Opção 1 — Merge Simples (Mantém histórico de merges)
```
git checkout develop
git pull
git checkout feature/nome-da-sua-feature
git merge develop
```

Opção 2 — Rebase (Mantém o histórico limpo/linear)
```
git checkout feature/nome-da-sua-feature
git pull origin develop --rebase
```

# Comandos Git Essenciais

Ação

Comando

Trocar de branch
```
git checkout nome-da-branch
```
Criar e entrar em uma nova branch
```
git checkout -b feature/nome
```
Trazer atualizações do remoto
```
git pull
```
Enviar seu código para o remoto
```
git push
```
