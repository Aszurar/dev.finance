# dev.finance$ | Discover
 O projeto dev.finance é um site que calcula suas transações bancárias, fornecendo o total de entrada e saída dos seus movimentos financeiros, além do saldo de sua conta!.
<h2 align="center">dev.finance$</h2>

___

<h3 align="center">
  <a href="#information_source-sobre">Sobre</a>&nbsp;|&nbsp;
  <a href="#interrobang-motivo">Motivo</a>&nbsp;|&nbsp;
  <a href="#seedling-requisitos-mínimos">Requisitos</a>&nbsp;|&nbsp;
  <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
  <a href="#package-como-baixar-e-executar-o-projeto">Baixar e Executar</a>&nbsp;
</h3>

___

<div align="center" ><img src="https://media.giphy.com/media/H3XUA9dNSLmi8NlUm9/giphy.gif" width="500"></div> 

___

## :information_source: Sobre

O projeto de Controle Escolar é uma plataforma web voltada para o gerenciamentos de um sistema de ensino a distância e presencial.Esse projeto é composto por uma série de desafios (4-1 ao 4-7) do módulo de Controle de Academia do **Bootcamp LaunchBase da Rocketseat.**
Nesses desafios praticamos os conceitos básicos da criação de um sistema de cadastro, atualização, remoção e listagem em conjunto com o uso dos verbos HTTP, todos esses foram novos conhecimentos adquiridos nesse módulo de Controle de Academia. 
* Página Inicial dos Professores:
 
  <img src="https://i.imgur.com/OAmNibE.png" width="800"> 

* Página Inicial dos Alunos
  <img src="https://i.imgur.com/LIrzM3l.png" width="800">

* Versão Mobile dos Professores:
 
  <img src="https://i.imgur.com/FN1X5mD.png" width="300">

___
## :interrobang: Motivo

O Intuito é praticar os conhecimentos absorvidos ao longo do curso de javascript, html, nunjucks, css, servidor, banco de dados dentre outros a fim de estabelece-los e fixa-los de forma sólida aumentando o portfólio pessoal.
Nesse projeto, temos que praticar os conceitos de cadastro de dados via método Post, atualização via método Put, remoção de dados via método Delete e listagem de dados via método Get. Além  da criação de funções que filtram esses dados antes de serem mostrados na página web ou antes da inserção no banco de dados.
Não obstante, utilizamos aplicações como browser-sync e npm-run-all para a atualização e sincronização do código na web simultaneamente enquanto estiver atualizando o código , adicionando mais alguma funcionalidade ou alterando o visual, além de executarem todas ferramentas em conjunto permitindo que a partir do npm start o navegador abra automaticamente com tudo sincronizado.

* Página de visualização do Professor:
 
  <img src="https://i.imgur.com/DyOkFYk.png" width="800"> 

* Página de visualização do Aluno:

  <img src="https://i.imgur.com/JyjH5Mf.png" width="800">

* Versão Mobile do Professor e do Aluno:
 
  <img src="https://i.imgur.com/RCXrcce.png" width="300">___________<img src="https://i.imgur.com/JqYJmjV.png" width="300">

  <img src="https://i.imgur.com/RABfmJX.png" width="300">___________<img src="https://i.imgur.com/I55abpN.png" width="300">
___
## :seedling: Requisitos Mínimos

Node.js, Nunjucks, Express, Browser-sync, npm-run-all e method-override.

* Página de Cadastro do Professor:
  <img src="https://i.imgur.com/l7s8CEh.png" width="800">

* Página de Cadastro do Aluno:
  <img src="https://i.imgur.com/IbhxKGc.png" width="800">

* Versão Mobile do Cadastro do Professor e do Aluno:
 
  <img src="https://i.imgur.com/U8AylUh.png" width="300">___________<img src="https://i.imgur.com/o9LHgLK.png" width="300">

  <img src="https://i.imgur.com/YgpyPkx.png" width="300">___________<img src="https://i.imgur.com/oMlo0UD.png" width="305">
___
## :rocket: Tecnologias Utilizadas 

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [Node.js](https://nodejs.org/en/)
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [Nunjucks](https://mozilla.github.io/nunjucks/)

* Página de Edição do Professor:
  <img src="https://i.imgur.com/SmZzxT0.png" width="800">

* Página de Edição do Aluno:
  <img src="https://i.imgur.com/UsblpJC.png" width="800">

* Versão Mobile do Edição do Professor e do Aluno:
 
  <img src="https://i.imgur.com/mFbWDui.png" width="300">___________<img src="https://i.imgur.com/LHlihpM.png" width="300" height="625">

  <img src="https://i.imgur.com/ogPKYkf.png" width="300">___________<img src="https://i.imgur.com/Xo6h4Mp.png" width="300" height="628">
___
## :package: Como baixar e executar o projeto

  - Antes de tudo, é necessário a instalação do node.js, ela é feita a partir do download na página oficial do node.js que está linkado no tópico anterior, ou por aqui: 
    * [Node.js](https://nodejs.org/en/)

  - Clonar o projeto:
```bash
  $ git clone https://github.com/Aszurar/Controle_Escolar.git
```
- Entrar na pasta do projeto:
```bash
  $ cd NomedaPasta
```
- Após instalar o Node.js, executar o npm:
```bash
  $ npm init -y
```
- Instalar o Express:
```bash
  $ npm install express
```
- Instalar o Nodemon:
```bash
  $ npm install -D nodemon  
```
- Após isso configure o script do arquivo package.json assim:
```json
  "scripts": {
      "start": "nodemon server.js"
    }
```
- Instalar o Nunjucks:
```bash
  $ npm install nunjucks
```
 - Instalar o  Browser-sync e npm-run-all:
```bash
  $ npm install browser-sync npm-run-all -D
```
 - Após isso configure o script do arquivo package.json assim:
 ```bash
   "scripts": {
    "start": "npm-run-all -p nodemon browsersync",
    "nodemon": "nodemon server.js",
    "browsersync": "browser-sync start --proxy http://localhost:5001 --files 'public,views'"
  },
```
 - Execução:
 ```bash
  $ npm start
```
- A utilização do browser-sync e npm-run-all basicamente serve para que o site seja aberto automaticamente assim que executamos o projeto, que a página na web se atualize cada veze que realizarmos alguma mudança no projeto, ou seja, a sincronia estea totalmente automática, facilitando o desenvolvimento.
- As configurações no serve.js já estão feitas para utilizarem essas ferramentas.
```json
{   
    "ignore": ["*.json"] 
}
```
- Isso previne o projeto de ficar em loop de carregamento "infinito" no navegador quando uma mudança for feita no arquivo json de dados.
___
Desenvolvido por :star2: Lucas de Lima Martins de Souza.

