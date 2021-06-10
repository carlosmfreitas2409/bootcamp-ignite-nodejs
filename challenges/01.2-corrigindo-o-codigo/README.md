<img src="../../.github/ignite-banner.png" alt="Ignite">
<h2 align="center">
  Desafio 01.2: Corrigindo o código
</h2>

<p align="center">
  <a href="#-sobre-o-desafio">Sobre o Desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rotas-do-backend">Rotas do Backend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
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

Neste desafio, recebemos uma aplicação Node.js em processo de desenvolvimento, mas que já possuia os testes necessários para fazer toda a validação dos requisitos.

Após algumas alterações no código da aplicação, parte dos testes deixaram de passar e então, tivemos que corrigi-los.

Essa aplicação realiza o CRUD de repositórios de projetos. Além disso, é possível dar likes em repositórios cadastrados, aumentando a quantidade de likes em 1 a cada vez que a rota é chamada.

## 🛠 Tecnologias

As seguintes tecnologias/ferramentas foram utilizadas na construção deste desafio:

- **[Node.js](https://nodejs.org/)**
- **[Express](https://expressjs.com/)**
- **[UUID](https://www.npmjs.com/package/uuid)**

> Veja o arquivo [package.json](https://github.com/carlosmfreitas2409/bootcamp-ignite-nodejs/blob/master/challenges/01.2-corrigindo-o-codigo/package.json)

## 🍃 Rotas do Backend

Resource URI              | Método HTTP | Finalidade
------------------------- | ----------- | -------
/repositories             | GET         | Listagem de repositórios
/repositories             | POST        | Cadastra um novo repositório
/repositories/:id         | PUT         | Altera um repositório
/repositories/:id         | DEL         | Remove um repositórios
/repositories/:id/like    | POST        | Incrementa um like a um repositório

## :information_source: Instalação e uso

Para executar este projeto, você deve possuir o Node e o Yarn instalado para configurar todas as dependências.

```
- Clone o repositório:
$ git clone https://github.com/carlosmfreitas2409/bootcamp-ignite-nodejs

- Entre no diretório:
$ cd challenges/01.2-corrigindo-o-codigo

- Para instalar as dependências:
$ yarn

- Execute a API:
$ yarn dev
```

## 📝 licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE)

---

Feito com 💜 por Carlos Eduardo.
