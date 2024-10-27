steps, do not readME

node
npm

font ligatures fira code++

https://github.com/tonsky/FiraCode?tab=readme-ov-file
https://github.com/tonsky/FiraCode/wiki/Installing
https://github.com/tonsky/FiraCode/wiki/VS-Code-Instructions

cd caminho
mkdir nome-do-projeto
cd nome-do-projeto
code .

caso não funcione

1. abrir manualmente
2. ctrl + shift + p => Add Code command in Path

---

iniciando o projeto

npm init -y

npm - node package manager
npx - node package executor
vê se possui o pacote na máquina
caso não, baixa temporariamente
executa o pacote

npm install - instala um pacote
global - a nível da máquina
local - a nível do projeto
-D - a nível de desenvolvimento (Ex. bibliotecas de lint, formatação, etc. Que não precisam ir para produção)

npm install -D nome-do-pacote
cypress

npm install -D cypress@13.7.3

npm install -g faustao-errou
npx faustao-errou

npm list cypress

// Abrir e iniciar o setup do cypress

npx cypress open

- página web de teste
  https://automationexercise.com

  TestCases:
  https://automationexercise.com/test_cases

caso não funcione o auto complete:

adicionar no topo do arquivo:
/// <reference types="cypress" />

ou com JS config

tag a = anchor

libraries de dados fake
npm install @faker-js/faker --save-dev

ou a chance.js
https://github.com/Choices-js/Choices

reporter

npm i cypress-mochawesome-reporter -D
npm i --save-dev cypress-mochawesome-reporter

npm i -D browserstack-cypress-cli

browserstack-cypress run --sync --spec "cypress/e2e/failing-tests.cy.js"

https://www.browserstack.com/docs/automate/cypress
