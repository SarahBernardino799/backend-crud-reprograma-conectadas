# API CRUD Reprograma


> Projeto criado para vivenciarmos a criação de uma aplicação


## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

* Você instalou a versão mais recente de `<Node.Js />`.
* Você criou um banco de dados mongodb e possui uma url de conexão `<MongoDB>` e o `<MongoDB Compass>`.


## 🚀 Instalando `<API CRUD Reprograma>`

Para instalar o `<API CRUD Reprograma>`, siga estas etapas:

Faça um fork da aplicação em:
```
https://github.com/JulianePires/backend-crud-reprograma-conectadas.git
```
Depois de clonado, no terminal do seu VSCode, digite 
```
npm install
```
para instalar as dependências.

## ☕ Usando `<API CRUD Reprograma>`

Para usar `<API CRUD Reprograma>`, siga estas etapas:

Copie o conteúdo do exemplo de .env com o comando:
```
cp .env.example .env
```

Preencha as informações com os dados de acesso

Existem TODO's espalhados pela aplicação, cumpra-os na ordem:

-  TODO 1: Modificar/criar o schema para adequar à sua aplicação no arquivo de models em /src/infra/database/models
-  TODO 2: Criar os serviços da aplicação em src/services
-  TODO 3: Criar os controllers da aplicação em scr/controllers
-  TODO 4: Criar as rotas da aplicação em src/routes

Rodar a aplicação:
```
npm run dev
```

Utilizando o Thunder Client, clique em New Request e digite no url http://localhost:8080/
```
Testando os endpoints:
 * http://localhost:8080/ METHOD GET => mostra todos os objetos listados no banco de dados.
 * http://localhost:8080/:id METHOD GET => mostra um objeto específico.
 * http://localhost:8080/submit METHOD POST => cadastra um nova objeto.
 * http://localhost:8080/edit/:id METHOD PUT => altera um objeto já cadastrado.
 * http://localhost:8080/delete/:id METHOD DELETE => apaga um objeto pré-cadastrado.
```

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://github.com/JulianePires.png" width="100px;" alt="Foto da Pessoa no GitHub"/><br>
        <sub>
          <b>Juliane Pires</b>
        </sub>
      </a>
    </td>
  </tr>
</table>


## 📝 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE) para mais detalhes.

[⬆ Voltar ao topo](#APICRUDReprograma)<br>









### 🌈 **Apresentação** 

 Este projeto é uma API com CRUD completo que contém um banco de dados e documentação. Possui a intenção de cadastrar Animes que estão no portifólio que facilita a visualização da quantidade de animes, descrição dos animes.

 ### ✨ **Funcionalidades**

#### **Para os animes**
_________________________________________

✔️ Cadastrar novos animes.

✔️ Listar todos os animes.

✔️ Visualizar um anime específico pelo ID.

✔️ Atualizar um anime específico pelo ID.

✔️ Remover um anime específico pelo ID do banco de dados.


________________________________________
### 🏗️ **Arquitetura MVC**
________________________________________

```
  📁 BACKEND-CRUD-REPROGRAMA-CONECTADAS  
  | 
  |-  📁 bin      
  |-  📁 node_modules
  |-  📁 Swagger    
  |         |- 📄 swagger_output.json   
  |-  📁 src  
  |    |- 📁 infra  
  |          |- 📁 database/models
  |             |- 📄 animes.js    
  |          |- 📁 mongoose
  |              |- 📄 index.js
  |    |- 📁 controllers   
  |         |- 📄 animesController.js 
  |           
  |    |- 📁 services  
  |         |- 📄 animesService.js  
  |    |- 📁 routes  
  |          |- 📄 index.js    
  |         
  |    |- 📄 app.js  
  |
  |           
  |-  📄 .env
  |-  📄 .env.example 
  |-  📄 .gitignore 
  |-  📄 package-lock.json   
  |-  📄 pakage.json 
  |-  📄 README.md 
  |-  📄 READMEAplicacao.md 
  |-  📄 LICENSE
  |-  📄 server.js
  |-  📄 Swagger.js
  |-  📁 material    
  ```
<br>

  ### 📦 **Dependências e Tecnologias**

<br>

**Base do projeto**
______________________________
```
Controle de versões: 
Git/GitHub

Editor de código - IDE:
VSCode

Desenvolver o back-end em Javascript:
Nodejs
```
 
**Instalações iniciais**
_______________________________________

```
Package.json em JS:
npm init -y

Express, cors e node_modules:
npm i express cors
versão
├── express@4.18.2
├── cors@2.8.5

Nodemon:
npm i -D nodemon
versão
├── nodemon@3.0.1
```

**Banco de dados**
___________________________________________________
```
Mongoose:
npm i mongoose
versão
├── mongoose@7.3.2
```

**Variaveis de ambiente**
____________________________________________________
```
Dotenv:
npm install dotenv-safe -- save
versão
├── dotenv@16.3.1
```


## 🔒 **Variáveis de Ambiente**

<br>

*Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env*
```
`PORT=NUMERO_PORTA`    
`DATABASE_URI=CONEXÃO_COM_MONGO_SEM_ASPAS` 
```
<br>

### 📌 **Rotas - EndPoint**

<br>

 📢 Todas as rotas existentes neste projeto:

- Dança

| Verbo  |   EndPoint      |        Descrição da Rota                   | Status |

| ------ | --------------- | -------------------------------------------| ------ |------|

| POST   | /add            | Adicionar um novo anime                    |   201  |

| GET    | /all            | Listar todos os animes                     |   200  |

| GET    | /:id            | Mostrar os animes pelo ID                  |   200  |

| DELETE | /:id            | Remove um anime                            |   200  |

| PATCH  | /:id            | Altera um anime                            |   200  |
<br>


<br>

### 📚 **Documentação da API**
________________________________________________________________________________

📝[Render]()

### ✨ **Instalação e Contribuição no projeto** 
________________________________________________________________
1. Faça um **fork** do projeto.
2. Realize o clone do projeto através do `git clone <link_do_fork_do_repositorio>`
3. Crie uma nova branch com as suas alterações: `git checkout -b minha-branch`
4. Instale as dependências necessárias à execução da API através do comando `npm install`
5. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: Minha contribuição"`
6. Envie as suas alterações: `git push origin minha-branch`

<br>

### 🗺️ **Referências**
_________________________________________________________
- [Emojis](https://emojipedia.org/)
---------------------------------------------------------
