### Descrição do Projeto GithubapiFrontend
O sistema realiza a busca do usuário no github, e exibe os dados de perfil do mesmo.

### Mapa de tecnologia
| Nome | Documentação | Links dos pacotes |
| :-: | :-: | :-: |
| Typescript | https://www.typescriptlang.org/docs/ | https://www.npmjs.com/package/typescript |
| Angular | https://angular.io/docs | https://www.npmjs.com/package/@angular/cli |
| Bootstrap | https://getbootstrap.com/docs/5.0/getting-started/introduction/ | https://www.npmjs.com/package/bootstrap |
| Api Search users | https://docs.github.com/pt/rest/search#search-users |
| Api Get a user | https://docs.github.com/pt/rest/users/users#get-a-user |

### Como gerar token da api
No menu do github entre no settings 

<img src="https://i.imgur.com/VO049cp.png"/>

### E depois em developer settings

<img src="https://i.imgur.com/yZnccK8.png"/>

### Em seguida Personal access tokens

<img src="https://i.imgur.com/l74BBr8.png"/>

### Tem o botão Generate new token

<img src="https://i.imgur.com/o1gSBVd.png"/>

### No note de o nome do projeto e o tempo de Expiration do token

<img src="https://i.imgur.com/KnIkg4c.png"/>

### seleciona a caixa read:user

<img src="https://i.imgur.com/I3akcTx.png"/>

### E Generate token

<img src="https://i.imgur.com/ikqeILq.png"/>

Sera gerado um token, adicione o token gerado no arquivo environment, foi usado o dotenv.

```
npm i dotenv
```

Dotenv é um módulo de dependência zero que carrega variáveis ​​de ambiente de um .envarquivo em 
process.env. O armazenamento da configuração no ambiente separado do código é baseado na metodologia.

Crie um .env arquivo no projeto passe o token e rota da API:

```
S3_BUCKET = " YOURS3BUCKET "
SECRET_KEY = " YOURSECRETKEYGOESHERE "
```