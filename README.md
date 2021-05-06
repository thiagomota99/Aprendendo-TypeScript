# Aprendendo-TypeScript
Esse repositório é destinado para o aprendizado da linguagem TypeScript.
<hr>

## Anotações

1. Configurando o compilador do TypeScript</br>
    - Abra o terminal no seu computador e acesse o diretório do seu projeto.
    - Já dentro do diretório raiz do projeto execute o seguinte comando `npm init`. O mesmo estará fazendo o downloads necessário para a configuração do typescript na máquina</br>
    após a instalação será criado um arquivo chamado `package.json` onde estarão todas as dependências baixadas do npm.
    - Agora novamente através o terminal iremos baixar e instalar o typescript na máquina com o comando `npm install typescript@2.3.2 --save-dev`
    Posterioriamente a isso analisando as pastas do projeto notamos, que foi criado o diretório node_modules. Lá encontraremos diversos sub-diretórios inclusive o **typescript** onde dentro do</br>
    mesmo encontramos a pasta **bin** e o arquivo **tsc** que é o compilador do TypeScript
    - Criaremos um novo arquivo na raiz do projeto chamado `tsconfig.json`. É o arquivo responsável por conter as configurações que serão consideradas pelo compilador do typescript na hora da execução.
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

2. Definindo uma classe em TypeScript. Veja o exemplo abaixo.
```ts
class Negociacao {
    
    //Criando os atributos da classe. O mesmo segue a sintaxe:
    //modificador de acesso nomeDoAtributo: tipo do atributo;
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    //Construtor da classe
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    //Métodos get da classe
    get data(){
        return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

    get volume(){
        return this._quantidade * this._valor;
    }
}
```

3. Garantir que o typescript só irá gerar um js a partir de um arquivo typescript válido (sem erros de sintaxe). Para resolvermos isso iremos fazer a seguinte configuração<br>
no arquivo `tsconfig.json`:
```js
{
    "compilerOptions": {
        "target": "es6",
        "outDir": "app/js",
        "noEmitOnError": true //Enquanto houver um erro no arquivo typescript o mesmo não ira gerar um novo arquivo js.
    },
    "include": [
        "app/ts/**/*"
    ]
}    
```
*Obs*: Sempre que fizer qualquer alteração no arquivo `tsconfig.json` feche e abra novamente o editor de código para ele carregar as novas configurações colocadas.