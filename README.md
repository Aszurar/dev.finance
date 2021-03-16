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

<div align="center" ><img src="https://media.giphy.com/media/Tjn1U4ubfS7C2kMxqy/giphy.gif" width="500"></div>

[**Link do vídeo completo sobre o projeto**](https://www.youtube.com/watch?v=DQ_U6KDpaPs&feature=youtu.be)

___

## :information_source: Sobre

O projeto **dev.finance\$**  é da 1º maratona Discover ministrada pelo Mayk Brito.  

O **dev.finance$** originalmente é uma plataforma que registra e calcula movimentações financeiras fornecendo o total de entradas, saídas e seu saldo final.

Com as adições feitas em cima do projeto original, **agora também é possível editar as transações registradas além de ativar o modo noturo e pesquisar por alguma transação específica por meio de sua descrição.**

* Página Inicial:
 
  <img src="https://i.imgur.com/r53EfNv.png" width="800"> 

* Página Inicial com o modo noturno ativado:
  <img src="https://i.imgur.com/HtZqxPe.png" width="800">

* Versão Mobile:
 
  <img src="https://i.imgur.com/zF5KIPt.png" width="300">___________<img src="https://i.imgur.com/Sc36wAD.png" width="300">
  
  <img src="https://i.imgur.com/8guUrUo.png" width="300">___________<img src="https://i.imgur.com/XAGusqM.png" width="300">
___
## :interrobang: Motivo

Esse projeto tem por objetivo por em prática os conceitos ensinados no curso **Discover** de **HTML, CSS e javascript** da  **Rocketseat.**. Agora, com as adições feitas também foi praticado **adições, remoções e edições no Banco de dados(PostgreSQL), gerenciamento de rotas, async-awaits, comandos básicos de SQL dentre outras ferramentas e práticas.**

Além disso, foi proposto o desafio de que os participantes alteracem o projeto, modificassem o visual ou adicionacem uma nova funcionalidade com o objetivo de praticar e enteder melhor sobre as tecnologias utilizadas.

Assim, estabeleci tais metas:
1. 📖 Modo Noturno  - Incompleto, Funcionava quando não haviam novas rotas(carregamento de página), agora toda vez que uma página é carregada é desativado. 
2. ✔️ Aletaração do visual utilizando propriedades CSS recentemente estudadas. 
3. ✔️ Cadastrar informações em um Banco de dados(PostgreSQL).
4. ✔️ Pesquisa das movimentações financeiras.
5. ✔️ Edição das informações das movimentações financeiras.
6. ❌ Paginação para a tabela de movimentações financeiras.

* Página de cadastro:
 
  <img src="https://i.imgur.com/jbtpbn2.png" width="800"> 

* Página de edição:

  <img src="https://i.imgur.com/hjSfk45.png" width="800">

* Remoção:
 
  <img src="https://i.imgur.com/zWHnPlA.png" width="800">
* Pesquisa:
 
  <img src="https://i.imgur.com/CkkMYgH.png" width="800">

___
## :seedling: Requisitos Mínimos

Node.js, Nunjucks, PostgreSQL dentre outras dependências espeficícadas no package-json. 

___
## :rocket: Tecnologias Utilizadas 

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [Node.js](https://nodejs.org/en/)
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [PostgreSQL](https://www.postgresql.org/)
___
## :package: Como baixar e executar o projeto

  - Antes de tudo, é necessário a instalação das tecnologias citadas acima e das das dependências utilizadas no projeto execute os comandos abaixo em um terminal aberto na pasta do projeto: 
  ```bash
      npm
   ```
  - Instalar o postgresql 
   ```bash
     sudo apt-get install postgresql
  ``` 
    
  - Para a instalão do Node, baixe e instale do site oficial: [Node.js](https://nodejs.org/en/) 
  - É necessário configurar o acesso do banco de dados no arquivo db na pasta config com a senha de acesso a seu postgres, por padrão é postgres.
 
  - Clonar o projeto:
  ```bash
    $ git clone https://github.com/Aszurar/dev.finance.git
  ```
 - Execução - Abra a pasta do projeto com alguma IDE(Vscode) ou simplesmente abra o terminal na pasta do projeto e execute o comando abaixo:
   ```bash
      $ npm start
    ``` 
___
Desenvolvido por :star2: Lucas de Lima Martins de Souza.

