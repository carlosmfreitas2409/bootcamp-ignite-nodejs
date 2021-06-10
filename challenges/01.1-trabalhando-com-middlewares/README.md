<img src="../../.github/ignite-banner.png" alt="Ignite">
<h2 align="center">
  Desafio 01.1: Trabalhando com Middlewares
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

Neste desafio, para práticar mais a fundo com middlewares, utilizamos a mesma aplicação do [desafio anterior](https://github.com/carlosmfreitas2409/bootcamp-ignite-nodejs/tree/master/challenges/01-conceitos-do-nodejs): uma aplicação para gerenciar tarefas (ou _todos_), mas com algumas mudanças.

Dessa vez, teremos um plano grátis onde o usuário só pode criar até dez _todos_ e um plano Pro que irá permitir criar _todos_ ilimitados, isso tudo usando middlewares para fazer as validações necessárias.

## 🛠 Tecnologias

As seguintes tecnologias/ferramentas foram utilizadas na construção deste desafio:

- **[Node.js](https://nodejs.org/)**
- **[Express](https://expressjs.com/)**
- **[UUID](https://www.npmjs.com/package/uuid)**

> Veja o arquivo [package.json](https://github.com/carlosmfreitas2409/bootcamp-ignite-nodejs/blob/master/challenges/01-conceitos-do-nodejs/package.json)

## 🍃 Rotas do Backend

Resource URI              | Método HTTP | Finalidade
------------------------- | ----------- | -------
/users                    | POST        | Cadastra um novo usuário
/users/:id                | GET         | Dados de um usuário específico
/users/:id/pro            | PATCH       | Ativa o plano PRO de um usuário
/todos                    | GET         | Listagem de To-do
/todos                    | POST        | Cadastra um novo To-do
/todos/:id                | PUT         | Altera um To-do 
/todos/:id/done           | PATCH       | Conclui um To-do
/todos/:id                | DEL         | Remove um To-do

## ⚙ Middleware

Neste projeto, foi desenvolvido quatro Middlewares, sendo eles:
- `checksExistsUserAccount` - valida se existe ou não um usuário com o `username` informado no header.
- `checksCreateTodosUserAvailability` - valida se o usuário estiver no *plano grátis e ainda não possui 10 _todos_ cadastrados* ou se ele *já estiver com o plano Pro ativado*.
- `checksTodoExists` - valida a existência de um usuário, valida se o `id` informado seja um uuid e se esse `id` pertence a um _todo_ do usuário informado.
- `findUserById` - semelhante ao middleware `checksExistsUserAccount`, mas a busca pelo usuário deve ser feita através do `id` informado.

## :information_source: Instalação e uso

Para executar este projeto, você deve possuir o Node e o Yarn instalado para configurar todas as dependências.

```
- Clone o repositório:
$ git clone https://github.com/carlosmfreitas2409/bootcamp-ignite-nodejs

- Entre no diretório:
$ cd challenges/01.1-trabalhando-com-middlewares

- Para instalar as dependências:
$ yarn

- Execute a API:
$ yarn dev
```

## 📝 licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE)

---

Feito com 💜 por Carlos Eduardo.
