## Desafio
O desafio consiste em implementar uma *SPA* a partir de um layout pré-estabelecido, conforme abaixo:
- Realizar uma consulta de processos e visualizar o resultado.
- Visualizar os detalhes de processo.
- Inserir, editar e excluir um processo.

Siga os [protótipos](https://www.figma.com/proto/BTa9Vpz4S1XUscURxANvFH5Z/DESAFIO?node-id=19%3A70&scaling=scale-down&redirected=1) e o [guideline](https://www.figma.com/proto/BTa9Vpz4S1XUscURxANvFH5Z/DESAFIO?node-id=27%3A1&scaling=contain&redirected=1) disponibilizados ao máximo.

### Considerações 
- Considerar que os seguintes endpoints estão disponíveis (`docker run -p 3002:3002 gcpasquadproduto/softplan-desafio-frontend`)
```
$ curl -i -X POST http://localhost:3002/processo \
        -H 'accept: application/json' \
        -H 'content-type: application/json' \
        -d '{"descricao" : "Solicitação de licença-prêmio", "assunto" : "Licença", "interessados" : ["Edmilson Cherem"]}'

HTTP/1.1 201 
Location: http://localhost:3002/processo/04c7197f-c0fe-4dab-b27c-d69611eca40f
Content-Length: 0
Date: Tue, 07 Aug 2018 20:26:22 GMT
```

```
$ curl -i -X GET http://localhost:3002/processo/04c7197f-c0fe-4dab-b27c-d69611eca40f

HTTP/1.1 200 
Content-Type: application/json;charset=UTF-8
Transfer-Encoding: chunked
Date: Tue, 07 Aug 2018 20:32:59 GMT
{
    "id": "04c7197f-c0fe-4dab-b27c-d69611eca40f",
    "numero": "SOFT 2018/00008",
    "entrada": "07/08/2018",
    "descricao": "Solicitação de licença-prêmio",
    "assunto" : "Licença",
    "interessados": ["Edmilson Cherem"]
}
```

```
curl -i -X GET http://localhost:3002/processo?q=licenca \
  -H 'accept: application/json' \
  -H 'content-type: application/json'

HTTP/1.1 200 
Content-Type: application/json;charset=UTF-8
Transfer-Encoding: chunked
Date: Tue, 07 Aug 2018 20:29:43 GMT
[
    {
        "id": "04c7197f-c0fe-4dab-b27c-d69611eca40f",
        "numero": "SOFT 2018/00008",
        "entrada": "07/08/2018",
        "descricao": "Solicitação de licença-prêmio",
        "assunto" : "Licença",
    	"interessados": ["Edmilson Cherem"]
    }
]
```

```
$ curl -i -X DELETE http://localhost:3002/processo/04c7197f-c0fe-4dab-b27c-d69611eca40f

HTTP/1.1 200 
Content-Type: application/json;charset=UTF-8
Transfer-Encoding: chunked
Date: Tue, 07 Aug 2018 20:32:59 GMT
{
    "id": "04c7197f-c0fe-4dab-b27c-d69611eca40f",
    "numero": "SOFT 2018/00008",
    "entrada": "07/08/2018",
    "descricao": "Solicitação de licença-prêmio",
    "assunto" : "Licença",
    "interessados": ["Edmilson Cherem"]
}
```
