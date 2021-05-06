# Aprendendo-TypeScript
Esse repositório é destinado para o aprendizado da linguagem TypeScript.
<hr>

## Anotações

1. Configurando o compilador do TypeScript</br>
    - Abra o terminal no seu computador e acesse o diretório do seu projeto.
    - Já dentro do diretório raiz do projeto execute o seguinte comando `npm init`. O mesmo estará fazendo o downloads necessário para a configuração do typescript na máquina</br>
    após a instalação será criado um arquivo chamado `package.json` onde estarão todas as dependências baixadas do npm.
    - Agora novamente através o terminal iremos baixar e instalar o typescript na máquina com o comando `npm install typescript@2.3.2 --save-dev`
    Posterior isso analisando as pastas do projeto notamos que foi criado o diretório node_modules. Lá encontraremos diversos sub-diretórios inclusive o typescript onde dentro do</br>
    mesmo encontramos a bin e o arquivo **tsc** que é o compilador do typescript
    - Criar um novo arquivo na raiz do projeto chamado `tsconfig.json` que é o arquivo responsável por conter as configurações que serão consideradas pelo compilador do typescript na hora da execução.
    - A configuração mínima para o compilador typescript é:
```js
{
    "compilerOptions": { //Opções do compilador
        "target": "es6", //O código typescript será convertido(traduzido) para ECMASCRIPT 2016 
        "outDir": "app/js", //O diretório onde serão armazenados o resultado da compilação dos arquivos typescript. Caso não exista o diretório de destino, o mesmo será criado,
                            //juntamente com seus sub-diretórios.                            
        "noEmitOnError": true,
        "noImplicitAny": true,
        "removeComments": true,
        "module": "system",
        "strictNullChecks": true
    },
    "include": [
        "app/ts/**/*" //Levar em consideração na hora da compilação todos os arquivos que estão no diretório app/ts/
                      //os asterísticos significam todos. No caso todos diretórios, sub-diretórios e arquivos filhos de ts. 
    ]
}        
```
*Obs*: Após a criação e configuração inicial do arquivo `tsconfig.json` feche e abra novamente seu editor de código.

- Para conseguirmos acionar o compilador do typescript iremos no arquivo `package.json`. e colocaremos no objeto script um atributo com o valor do compilador, veja o exemplo:
```js
{
  "name": "alurabank",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "compile": "tsc", //Defina um nome para o atributo, no caso utilizei "complie" e o seu valor é o próprio compilador do typescript (tsc)
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "typescript": "^2.3.2"
  }
}
```
Por fim, volte novamente ao terminal e execute o comando `npm run compile`. Esse comando é responsável por chamar o arquivo `package.json`.</br>
O mesmo irá executar o objeto script e o atributo que criamos (compile).