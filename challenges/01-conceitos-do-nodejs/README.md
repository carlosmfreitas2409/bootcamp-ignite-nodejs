<img src="../../.github/ignite-banner.png" alt="Ignite">
<h2 align="center">
  Desafio 01: Conceitos do NodeJS
</h2>

<p align="center">
  <a href="#-sobre-o-desafio">Sobre o Desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rotas-do-backend">Rotas do Backend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-middleware">Middleware</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação-e-uso">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/carlosmfreitas2409/bootcamp-ignite-nodejs?color=%235965e0">

  <img alt="Github Top Language" src="https://img.shields.io/github/languages/top/carlosmfreitas2409/bootcamp-ignite-nodejs?color=%235965e0">

  <img alt="Made by" src="https://img.shields.io/badge/Feito%20por-Carlos Eduardo-%235965e0">

  <img alt="Project license" src="https://img.shields.io/github/license/carlosmfreitas2409/bootcamp-ignite-nodejs?color=2304D361">
</p>

----

## 🚀 Sobre o desafio

Neste desafio, para práticar o que aprendemos até agora, tivemos que criar uma aplicação para gerenciar tarefas (em inglês _todos_), bem como fazer o CRUD de _todos_. Nossos objetivos foram:
- Criar um novo _todo_;
- Listar todos os _todos_
- Alterar o `title` e `deadline` de um todo existente;
- Marcar um _todo_ como feito;
- Excluir um _todo_.

## 🛠 Tecnologias

As seguintes tecnologias/ferramentas foram utilizadas na construção deste desafio:

- **[Node.js](https://nodejs.org/)**
- **[Express](https://expressjs.com/)**
- **[TypeScript](https://typescriptlang.org/)**
- **[UUID](https://www.npmjs.com/package/uuid)**

> Veja o arquivo [package.json](https://github.com/carlosmfreitas2409/bootcamp-ignite-nodejs/blob/master/challenges/01-conceitos-do-nodejs/package.json)

## 🍃 Rotas do Backend

Resource URI              | Método HTTP | Finalidade
------------------------- | ----------- | -------
/users                    | POST        | Cadastra um novo usuário
/todos                    | GET         | Listagem de To-do
/todos                    | POST        | Cadastra um novo To-do
/todos/:id                | PUT         | Altera um To-do 
/todos/:id/done           | PATCH       | Conclui um To-do
/todos/:id                | DEL         | Remove um To-do

## ⚙ Middleware

Neste projeto, também foi desenvolvido um Middleware para validar o envio do campo `username` no Header e a verificação de existência do usuário.

## :information_source: Instalação e uso

Para executar este projeto, você deve possuir o Node e o Yarn instalado para configurar todas as dependências.

```
- Clone o repositório:
$ git clone https://github.com/carlosmfreitas2409/bootcamp-ignite-nodejs

- Entre no diretório:
$ cd challenges/01-conceitos-do-nodejs

- Para instalar as dependências:
$ yarn

- Execute a API:
$ yarn dev
```

## 📝 licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE)

---

Feito com 💜 por Carlos Eduardo.
