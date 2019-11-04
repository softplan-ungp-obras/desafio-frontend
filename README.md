### Considerações sobre a aplicação

Requisitos:

- NodeJS (10+);
- Npm(6.9.0+);

Antes de rodar o projeto, precisamos instalar suas dependências, para isso execute:

```npm install```

Agora com as dependências instaladas, para subir a aplicação, executamos:

```npm start```

Para o backend, subimos uma imagem Docker:

```docker run -p 3002:3002 gcpasquadproduto/softplan-desafio-frontend```

### Arquitetura

- Atomic Design;
- React Reach Router;
- Axios;
- Create react app;
- Material-UI.


### Considerações finais

Tive bem pouco tempo para executar essa prova, todo este código foi produzido em apenas um dia. Por conta disso, não tive tempo hábil de executar testes unitários. Tentei focar o máximo em componentização, clean code, reutilização e otimização dos componentes. Por isso também, optei por criar o projeto com create-react-app, para mais agilidade no desenvolvimento.

Obrigado.