# Documentation

Para este projeto vamos utilizar React e Firebase.

O app está disponível em [Processos App](https://processos-3c583.web.app/)

## GIT
```
git clone [url]
git checkout -b brynner-ferreira
```


## React

Vamos criar uma aplicação em React, utilizando o Boilerplate oficial.

```
npm install -g create-react-app
npx create-react-app app
```

### Removendo arquivos desnecessários
Remover os arquivos listado abaixo, bem como suas referências: 
- src/App.css
- src/index.css
- src/logo.svg


### Running
```
cd app
npm install
yarn start
```


## Packages

### Bootstrap

Para deixar nossa aplicação mais atraente, vamos utilizar o React Bootstrap como Framework de CSS.

```
npm install react-bootstrap bootstrap
```

### React Router

Controle de rotas da aplicação.

```
npm install react-router-dom --save
```


## Firebase

No console do Firebase:

1. Cria-se um projeto
2. Criar database
3. Cria-se um web app

### Implementado Firebase no projeto

No diretório /app

```
npm install firebase --save
```

### Configurando o Firebase

#### Database

1. Start collection 'processos'
2. Clique em 'Auto id' para criar o primeiro documento do banco
3. Em seguida clique em 'Save'


#### Notes

No ambiente local de desenvolvimento:

1. Implementar SDK

Adicionar no index.html do projeto, imediatamente antes do </body>
```
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/6.5.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#reserved-urls -->

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>
```

5. CLI
```
npm install -g firebase-tools
```

6. Deploying to Firebase
```
firebase login
firebase init
firebase deploy
```


