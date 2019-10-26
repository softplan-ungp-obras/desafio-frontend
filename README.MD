<br />
<p align="center">
<img src="https://revelry.co/wp-content/uploads/2019/05/react-native-UX-design.gif" alt="Logo Author" width=400px>

  <h3 align="center">Documentação Projeto Reactjs</h3>

</p>

<!-- TABLE OF CONTENTS -->

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conte%C3%BAdo)
- [Sobre o Projeto](#sobre-o-projeto)
  - [Feito Com](#feito-com)
- [Começando](#come%C3%A7ando)
  - [Pré-requisitos](#pr%C3%A9-requisitos)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
  - [Edição](#edi%C3%A7%C3%A3o)

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

Este projeto visa a criação de um template que possa ser utilizado no momento de criação de projetos utilizando React, visto que o processo de instalação e configuração das libs no início de um projeto podem gerar certa complexidade e muitas vezes até erros que atrasam o processo, atrapalhando assim o fluxo de desenvolvimento.

### Feito Com

Abaixo segue o que foi utilizado na criação deste template:

- [React](http://facebook.github.io/react/) - O React é uma biblioteca que permite o desenvolvimento de aplicações usando Javascript e React;
- [Redux](https://redux.js.org/) - O Redux é um contêiner de estado previsível para aplicativos JavaScript. Ele ajuda você a escrever aplicativos que se comportam consistentemente, executados em diferentes ambientes (cliente, servidor e nativo) e são fáceis de testar;
  - [Redux Saga](https://redux-saga.js.org/) - O redux-saga é uma biblioteca que tem como objetivo tornar os efeitos colaterais dos aplicativos mais fáceis de gerenciar, mais eficientes de executar, fáceis de testar e melhores em lidar com falhas;
- [React Router Dom ](https://reacttraining.com/react-router/) - O React Router Dom surgiu da necessidade comunidade do React de uma navegação de forma fácil de se usar, e escrita toda em Javascript;
- [Styled Components](https://www.styled-components.com/) - O Styled Components é uma biblioteca que permite criar escopos de estilização para os componentes;
- [Axios](https://github.com/axios/axios) - O Axios é um cliente HTTP baseado em Promises para Browser e NodeJS;
- [Prop Types](https://github.com/facebook/prop-types) - Verificação de tipo em tempo de execução para propriedades (props) React e objetos semelhantes;
- [Seamless Immutable](https://github.com/rtfeldman/seamless-immutable) - Integrado com Redux, seta o estado como imutável, ganhando performance e organizacao.
- [Reactotron](https://github.com/infinitered/reactotron) - O Reactotron é um app Desktop para inspecionar projetos em React ou React Native. Está disponível para macOS, Linux e Windows;
  - [reactotron-redux](https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux.md) - Plugin que permite acompanhar todas as Actions que são disparadas na aplicação, mostrando toda a estrutura da Action;
  - [reactotron-redux-saga](https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux-saga.md) - Plugin que permite você percorrer uma saga na sua aplicação, poderá ver a saga e os efeitos que ela desencadeia ao longo do caminho;
  - [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) - Plugin permite verificar as informações do redux via console do browser (necessário possuir extensão do navegador - Redux DevTools)
- [Babel](https://babeljs.io/) - O Babel é um compilador JavaScript gratuito e de código aberto e transpiler configurável usado no desenvolvimento de aplicações Javascript;
  - [babel-eslint](https://github.com/babel/babel-eslint) - Este pacote é um _wrapper_ do parser do Babel para o ESLint;
- [Eslint](https://eslint.org/) - O ESLint é uma ferramenta de lint plugável para JavaScript e JSX;
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - Este pacote fornece o .eslintrc do Airbnb como uma configuração compartilhada extensível;
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - Plugin do ESLint com regras para ajudar na validação de imports;
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Verificador estático AST das regras do a11y em elementos JSX;
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - Regras de linting do ESLint específicas do React;
- [Prettier](https://prettier.io/) - O Prettier atualiza seu código automaticamente seguindo os padrões que você quiser toda vez salva o arquivo;
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) - Roda o Prettier como uma regra do ESLint;
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - Desativa todas as regras que são desnecessárias ou que podem dar conflito com o Prettier;
- [EditorConfig](https://editorconfig.org/) - O EditorConfig é um formatador de arquivos e coleções em forma de Plugin para Editores de código/texto com o objetivo de manter um padrão de código consistente entre diferentes editores, IDE's ou ambientes;
- [Jest](https://jestjs.io/) - Biblioteca principal para testes da aplicação. Normalmente utilizando o conceito de Test Driven Development (TDD), são testados
  os reducers, sagas, integrações, etc.
  - [react-testing-library](https://github.com/testing-library/react-testing-library) - Biblioteca para facilitar o processo de test utilizando DOM, no qual conseguimos importar os componentes JSX. Normalmente utilizado em testes end-to-end
- [react-hot-loader](https://github.com/gaearon/react-hot-loader) - Biblioteca para carregamento da página de modo instantâneo sem carregamento, prevenindo perda de informações em tela (estado da aplicação), assim melhorando a produtividade
- [react-app-rewired](https://github.com/timarney/react-app-rewired) - Biblioteca para sobrescrever configurações do webpack sem ejetar o create-react-app
- [storybook](https://storybook.js.org) - Ferramenta para pré-visualização isolada dos componentes, muito útil no processo de desenvolvimento pois não precisamos acessar o local que o componente é renderizado ou até mesmo startar a aplicação.

<!-- GETTING STARTED -->

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
react-test
├── src/
│   ├── .storybook
│   ├── __tests__
│   ├── components
├───├── config/
│   │   └── ReactotronConfig.js
│   ├── assets/images/
│   │   ├── logo.png
│   │   └── logo.svg
│   ├── pages/
│   │   └── Main/
│   │       └── index.js
│   ├── services/
│   │   └── api.js
│   ├── store/
│   │   ├── ducks/
│   │   │   └── index.js
│   │   ├── sagas/
│   │   │   └── index.js
│   │   └── index.js
│   ├── index.js
│   └── routes.js
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── index.js
├── jsconfig.js
├── LICENSE
├── package.json
└── README.md
```

Serão explicados os arquivos e diretórios na seção de [Edição](#edição).

### Edição

Nesta seção haverão instruções caso você queira editar o template, explicando para que os diretórios são utilizadas e também os arquivos de configuração.

- **src** - Diretório contendo todos os arquivos da aplicação, é criado um diretório `src` para que o código da aplicação possa ser isolado em um diretório e facilmente portado para outros projetos, se necessário;

  - **tests**- Diretório contento todos os arquivos destinados a testes da aplicação, os tests são realizados atraves das bibliotecas Jest e Enzyme;
  - **.storybook**- Diretório contento todas configurações do storybook;
  - **Components** - Diretório principal da aplicação contendo todos componentes. Para melhor organização a estrutura foi dividida da seguinte forma: nome da pasta (inicial maiuscula) > arquivo index.js (componente statefull ou stateless) e styles.js (css via styled components)

  - **config** - Diretório para guardar os arquivos de configuração da aplicação, por exemplo, a configuração de uso do Reactotron e configuração de inicialização do Firebase;

    - **ReactotronConfig.js** - Arquivo contendo a configuração do Reactotron, com os Plugins `reactotron-redux` e `reactotron-redux-saga`, para ser usado na aplicação;

  - **images** - Diretório para armazenar imagens em geral que possam ser utilizadas na aplicação, esse diretório pode ser renomeado para `assets` e dentro de `assets` criar um novo diretório para guardar somente as imagens, assim é possível ter um diretório para guardar todo tipo de arquivo, e não apenas imagens;

  - **pages** - Diretório onde ficam as páginas (telas) da aplicação, como forma de padronização e boas práticas toda página fica dentro de um diretório com seu nome;

    - **Main** - Diretório exemplo de uma página cujo nome é **Main**, por padrão foi adotado usar sempre como nome do diretório o nome da página em camelCase, dentro desse diretório é necessária a criação ao menos do arquivo `index.js`;

      - **index.js** - Arquivo com toda a lógica da página, com os componentes visuais a serem renderizados e também o código para conectar o componente ao Redux para acessar o State global e as Actions criadas nos Ducks;

  - **services** - Diretório onde serão criados os arquivos relacionados a serviços utilizados na aplicação, por exemplo, requisições HTTP, autenticação com Firebase ou qualquer outro serviço que for utilizado;

    - **api.js** - Arquivo com a configuração da biblioteca Axios para envio de requisições HTTP, o endereço que vem configurado por padrão é para a API do Github;

  - **store** - Diretório onde será criada toda a estrutura do Redux para a aplicação, como os **Ducks** (Reducers + Action Types + Action Creators), os **Sagas** e um arquivo para centralizar toda essa configuração e disponibilizar para o restante da aplicação;

    - **ducks** - Diretório destinado a centralizar os **Ducks** da aplicação para padronização na estrutura relacionada ao Redux;

      - **index.js** - Arquivo responsável por importar cada **Duck** criado e combiná-los em um só para serem usados no Redux através da função `combineReducers()`;

    - **sagas** - Diretório destinado a centralizar os **Sagas** da aplicação para padronização na estrutura relacionada ao Redux;

      - **index.js** - Arquivo responsável por relacionar as **Actions** disparadas pela aplicação às funções do **Saga**, que são Funções Generator, nele é definido os **Action Types** a serem "escutados" e qual função executar quando um Action Creator for executado;

    - **index.js** - Arquivo responsável por executar a configuração para o funcinamento do Redux + Redux Saga, dentre suas funções estão: criar um **Middleware** para monitorar as Actions disparadas na aplicação, aplicar o middleware criado juntamente com um Enhancer que monitora o fluxo de uma função do **Saga**, criar o store global da aplicação combinando os reducers existentes e exportar o state criado;

  - **index.js** - Arquivo responsável por centralizar o código do diretório `src`, nele é inserido o HOC Provider do `react-redux` que é o responsável por disponilizar o state global para a aplicação, e dentro do Provider são chamadas as rotas tal como qualquer outra configuração que precise ser executada na inicialização da aplicação, ele é como um _Entry Point_ do diretório `src`;

  - **routes.js** - Arquivo com as configurações de navegação da aplicação, nele são criados os Navigator disponibilizados na biblitoeca React Navigation;

- **.editorconfig** - Arquivo destinado à configuração do Plugin Editor Config, que padroniza algumas configurações para o editor em diferentes ambientes;

- **.eslintrc.json** - Arquivo de configuração do ESLint, é nele que são inseridas as regras e configurações de Linting do projeto, tal como a configuração do Resolver para o Babel Plugin Root Import e configuração da variável global `__DEV__`;

* **index.js** - Arquivo raiz da aplicação, também chamado de _Entry Point_, é o primeiro arquivo chamado no momento do build e execução da aplicação, nele é chamado o arquivo `src/index.js` que por sua vez chama as rotas da aplicação;

* **jsconfig.json** - Arquivo de configuração do Javascript no Editor, ele é o responsável por ativar o Auto Complete de códigos Javascript na aplicação;

* **config-overrides.js** - Arquivo de configuração para sobreescrever caminho para o babel-plugin-root-import identificar o caminho absoluto;

* **package.json** - Diferente dos projetos comuns, esse arquivo tem as configurações necessárias para a publicação do Template no NPM, para saber mais sobre isso veja a seção abaixo.

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.
