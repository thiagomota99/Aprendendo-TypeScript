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
    //modificador de acesso nomeDoAtributo;
    private _data;
    private _quantidade;
    private _valor;

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

4. Compilar arquivos ts sem precisar rodar o comando `npm run compile` faremos a seguinte configuração no arquivo `package.json`
```js
{
  "name": "alurabank",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "compile": "tsc",
    "start": "tsc -w" //definimos o atributo start do objeto script. Onde seu valor é o compilador typescript e o parâmetro -w(watch) que o mesmo ficará observando
                      //as alterações dos arquivos typescript.
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "typescript": "^2.3.2"
  }
}
```
Com isso agora no terminal podemos substituir o comando por `npm start`. Desta forma, toda vez que o arquivo typescript sofrer alguma alteração será realizada a compilação
novamente do arquivo.

5. Definindo o tipo dos atributos. Quando não definido um tipo específico para os atributos, por padrão o typescript adota para todos os atributos implicitamente o tipo `any` (qualquer coisa). Desta forma não precisamos especifica-lo. Entretando podemos definir nos mesmos os tipos dos atributos usando a seguinte sintaxe:
```ts
class Negociacao {
    
    //Criando os atributos da classe. O mesmo segue a sintaxe:
    //modificador de acesso nomeDoAtributo: tipoDoAtributo;
    //private variavelQualquer: any; => O tipo é atribuído implicitamente. Ou seja, pode omitir o tipo "any".
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    //Construtor da classe
    constructor(data: Date, quantidade: number, valor: number) { //Definindo o tipo dos parâmetros a serem passados para o construtor da classe
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

8. Podemos definir como configuração do compilador do typescript para o mesmo não adotar o tipo any como padrão. Isso será feito no arquivo, já conhecido anteriomente `tsconfig.json` da seguinte forma:
```js
{
    "compilerOptions": {
        "target": "es6",
        "outDir": "app/js",                             
        "noEmitOnError": true,
        "noImplicitAny": true //Propriedade a que não permite a adoção do tipo any de modo implícito. Caso contrário, defina o valor da propriedade como false.
    },
    "include": [
        "app/ts/**/*" //Levar em consideração na hora da compilação todos os arquivos que estão no diretório app/ts/
                      //os asterísticos significam todos. No caso todos diretórios, sub-diretórios e arquivos filhos de ts. 
    ]
}        
```

9. Podemos também utilizar atalhos na hora da criação de classes em typescript, veja um exemplo:
```ts
class Negociacao {
    
    //Construtor da classe
    //Desta forma estou criando os atributos e definindo seus valores no momento da criação do objeto da classe.
    constructor(private _data: Date, private _quantidade: number, private _valor: number) {}

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

10. O TypeScript trata todos os elementos do DOM como o tipo `Element`. Então caso queira acessar propriedades e métodos de elementos específicos, como por exemplo input utilizamos o cast. Que irá transformar nossos atributos do tipo `Element` em `HTMLInputElement`, com isso poderemos acessar propriedades específicas desse elemento como o "value".

```ts
class NegociacaoController {

    private _inputData: HTMLInputElement; //Definindo o tipo de elemento do html que queremos
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;

    constructor() {
        this._inputData = <HTMLInputElement>document.querySelector("#data"); //Utilizando o cast para converter Element => HTMLInputElement
        this._inputQuantidade = <HTMLInputElement>document.querySelector("#quantidade");
        this._inputValor = <HTMLInputElement>document.querySelector("#valor");
    }

}
```

11. Existem algumas formas de declarar um atributo como um Array em typescript. E também definir tipos de retornos dos métodos . Veja alguns dos exemplos:
```ts
class Negociacoes {
    private _negociacaoes: Array<Negociacao> = []; //Nesse caso estou definindo o atributo _negociacao como um Array que vai armazenar objetos do tipo Negociacao
                                                   //Isso garante que caso ele receba outro tipo de dado que não seja uma Negociacao irá acusar um erro de sintaxe

    private arrayDeNumbers: number[] = []; //Uma outra forma de definir um atributo como um Array. No caso um array de numbers

    adiciona(negociacao: Negociacao): void { //void representa que o método não retorna nada.

        this._negociacaoes.push(negociacao);
    }

    paraArray() : Negociacao[] { //Negociacao[] devolve uma cópia de um array de objetos do tipo Negociacao

        return [].concat(this._negociacaoes);
    }
}
```

12. Para criar uma herança entre classes em TypeScript utilizamos a palavra reservada `extends` na definição da classe. Existem outras funcionalidades que o typescript nos fornece na criação de classes e utilização do pilar herança. Veja algumas dessas funcionalidades:
```ts

//Criando a classe abstrata View. A palavra reservada abstracat gatante que a classe não pode ser instânciada apenas herdada.
abstract class View<T> { //O operador diamante <> indica que a classe é do tipo generics. Ou seja, vai variar conforme a classe filha
    
    private _elemento: Element;

    constructor(seletor: string){

        this._elemento = $(seletor);
    }

    update(modelo: T): void {
        this._elemento.innerHTML = this.template(modelo);
    }

    protected abstract template(modelo: T): string; //Esse método deverá ser implementado nas classes que herdarem o mesmo. Seu modificador de acesso é protected
                                                    //pois as classes filhas precisam implementa-lo e o mesmo não deve ficar exposto para fora da classes que o herdarem.
}





class MensagemView extends View<string> { //Aqui a classe MensagemView está determinado que os parâmetros dos métodos serão do tipo string

    //O contrutor poderia ser omitido nesse caso. Entretanto foi colocado para fins didáticos.
    constructor(seletor: string) {

        super(seletor); //Isso indica que o construtor está chamando o construtor da classe pai.
    }

    protected template(modelo: string): string {
        
        return `<p class="alert alert-info">${modelo}</p>`;
    }

}


class NegociacoesView extends View<Negociacoes>{ //Aqui a classe NegociacoesView está determinado que os parâmetros dos métodos serão do tipo string Negociacoes

    constructor(seletor: string) {

        super(seletor);        
    }

    protected template(modelo: Negociacoes): string {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
                ${modelo.paraArray().map(negociacao =>
                    `
                        <tr>
                            <td>${negociacao.data.getDate()}/${negociacao.data.getMonth()+1}/${negociacao.data.getFullYear()}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>                            
                        </tr>
                    `
                ).join('')}
            </tbody>
    
            <tfoot>
                <td colspan="3"></td>
                <td>
                    
                </td>
            </tfoot>
        </table>
        `;
    }

}
```

13. Instalando TSD (Type Script Definition). É um arquivo que mapeia a biblioteca (funções,métodos,objetos...) que você deseja utilizar no projeto. No caso utilizaremos o JQuery.
Podemos instalar diretamente através do npm (node package management). Abra seu prompt de comando na pasta raíz do projeto e execute os seguintes passos:
- Instale o TSD do JQuery com o comando: `npm install @types/jquery@2.0.42 --save-dev`</br>
Após isso podera notar que no diretório node_modules/@types agora possui o diretório jquery. Que por sua vez possui o arquivo `index.d.ts` que irá mapear todas as funções do JQuery
para o TypeScript.
*Obs:* Feche e abra novamente sua IDE após a instalação do TSD.

```ts
abstract class View<T> {
    
    private _elemento: JQuery; //Atribuindo o tipo JQuery ao atributo após instalar o TSD.
                               //isso nos possibilita lançar mão de alterar nosso código para trabalhar com as funções do Jquery.
    constructor(seletor: string){

        this._elemento = $(seletor); //$() representa a função querySelector;
    }

    update(modelo: T): void {
        this._elemento.html(this.template(modelo)); //a função html representa o innerHTML no javascript puro.
    }

    protected abstract template(modelo: T): string;
}
```

14. Remover comentários na hora da compilação dos arquivos ts para js pode ser uma boa estratégia para não vazar comentários no código javascript em produção. Para isso utilizamos uma nova propriedade no arquivo de configuração do compilador chamada `"removeComments": true;`. A mesma na hora de gerar os js a partir da compilação dos arquivos TypeScript irá remover os comentários.

15. Criando namespaces em TypeScript, isso facilita na hora de encontrar classes que estão em diretórios diferentes.
```ts
namespace Views { //Adicionamos o bloco namespace juntamente com um nome que fique claro sobre o que aquele namespace se refere, no meu caso é uma View, então coloquei Views
    export abstract class View<T> { //Devemos também adicionar a palavra reservada "export"
        
        private _elemento: JQuery;

        constructor(seletor: string){

            this._elemento = $(seletor);
        }

        update(modelo: T): void {
            this._elemento.innerHTML = this.template(modelo);
        }

        protected abstract template(modelo: T): string; 
    }

}

import View = Views.View // Uma outra abordagem é utilizar a palavra reservada import para importar a classe que queremos.
                         //Desta forma trocamos o "extends Views.View<string> => extends View<string>"

class MensagemView extends Views.View<string> { //Como a classe MensagemView estende a classe View que está dentro de um namespace, para acessa-la devemos utilizar o nome do namespace
                                               //para referenciar a classe que estamos estendendo.
    
    constructor(seletor: string) {

        super(seletor);
    }

    protected template(modelo: string): string {
        
        return `<p class="alert alert-info">${modelo}</p>`;
    }

}
```

17. Adequando todos os scripts (módulos, arquivos TypeScript) para o sistema de módulos do ECMASCRIPT 2015. Veja o exemplo de como fazer:

```ts
export abstract class View<T> { //utilizando a palavra reservada export para exportar o módulo View, no caso a classe
        
    private _elemento: JQuery;

    constructor(seletor: string){

        this._elemento = $(seletor);
    }

    update(modelo: T): void {
        this._elemento.innerHTML = this.template(modelo);
    }
        
    protected abstract template(modelo: T): string; 
}



import { View } from './View' //Está linha tem o objetivo de importar a classe View do diretório atual do arquivo View. import { nome_do_modulo } from 'diretorio/arquivo'

class MensagemView extends View<string> { 

    constructor(seletor: string) {

        super(seletor);
    }

    protected template(modelo: string): string {
        
        return `<p class="alert alert-info">${modelo}</p>`;
    }

}
```

18. Definindo um carregador (loader) de módulos js. Já que atualmente não existe um carregador nativo nos navegadores para carregar os módulos. Entretanto podemos utilizar uma biblioteca js o `System.js`. É um carregador universal de módulos. Para isso além de instanciar o arquivo js da biblioteca no index, devemos também adicionar uma nova propriedade no arquivo `tsconfig.json`. Para que o mesmo na hora de gerar os arquivos js, criar uma estrutura sobre os arquivos para que a biblioteca do loader consiga utilizar para carregar os módulos. Veja o exemplo:

```html
<!-- codigo html... -->

<script src="lib/system.js"></script>
<script>
    //Indicando o primeiro módulo que deve ser carregado pela biblioteca.
    System.defaultJSExtensions = true; //Omitir extensão na hora dos imports
    System.import('js/app.js').catch(err => console.error(err)); //Importar o arquivo app.js dentro do diretório js. A partir disso ele conseguirá importar os outros módulos.
</script>
```

```ts
//Arquivo tsconfig.json
{
    "compilerOptions": {
        "target": "es6",
        "outDir": "app/js",
        "noEmitOnError": true,
        "noImplicitAny": true,
        "removeComments": true,
        "module": "system", // a propriedade "module" aceita vários valores. Para a geração de arquivos js na estrutura de módulos utilizamos o valor system. Que é a biblioteca
                            //de loader que estamos utilizando.
    },
    "include": [
        "app/ts/**/*"
    ]
}
```
Apenas essa configuração não é suficiente, pois a biblioteca do loader faz requisições http para baixar os módulos. Com isso devemos colocar nossa aplicação em um servidor web que irá disponibilizar nossa aplicação para o browser. Para instalarmos um servidor web, podemos utilizar o npm. Que nos disponibiliza um servidor para rodarmos nossa aplicação. Portanto siga o exemplo para instalar o servidor web lite-server:</br>
- No prompt de comando execute o comando `npm install lite-server@2.3.0 --save-dev`
- Depois iremos até o arquivo `package.json` e acrescentaremos a seguinte propriedade ao objeto script:
```ts
{
  "name": "alurabank",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "compile": "tsc",
    "watch": "tsc -w", //cria-se a propriedade watch com o valor de observação do compilador TypeScript
    "server": "lite-server --baseDir=app", //quando essa propriedade for acionada no prompt de comando vai subir o servidor lite-server e vai considerar o diretório base "app"
    "start": "concurrently \" npm run watch\" \"npm run server\"" //quando o npm run start for executado no prompt o mesmo vai inicilizar o concurrently passando como
                                                                  //parâmetro os dois comandos npm run watch (inicializar o compilador ts) e npm run server (inicializar o lite-server)
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/jquery": "^2.0.42",
    "concurrently": "^3.4.0", //no prompt de comando rode o comando: npm install concurrently@3.4.0 --save-dev esse módulo garante que possamos iniciar o server e o compilador do ts.
    "lite-server": "^2.3.0",
    "typescript": "^2.3.2"
  }
}
```

19. Organizando os módulos da aplicação em barris. Essa estratégia consiste em colocar todos os módulos que são em comuns em um só lugar. Facilitando a importação em outros lugares
veja o exemplo abaixo</br>
- Primeiro criaremos um novo arquivo ts chamado `index.ts` nos diretórios de ts/views e ts/models
- Depois disso segue o código abaixo:

```ts
//index.ts do diretório ts/views
//O mesmo está exportando tudo que os módulos View, MensagemView e NegociacoesView exportam. Isso nos possibilita em uma outra classe usarmos a seguinte sintaxe:
// import { NegociacoesView, MensagemView } from ../views/index
export * from './View';
export * from './MensagemView';
export * from './NegociacoesView';

// A mesma coisa podemos fazer no diretório ts/models
// import { Negociacao, Negociacoes } from ../models/index
export * from './Negociacao';
export * from './Negociacoes';
```

20. Utilizando o `readonly` sobre os atributos da classe para defini-los apenas como atributos de leitura.
```ts
export class Negociacao {
    
    //Podemos utilizar a propriedade data readonly para determinar que os atributos da classe são apenas de leitura
    //e que não podem ter seus valores alterados. Com isso eliminamos o uso dos getters.
    //Detalhe: Caso não queria expor de maneira nenhuma seu atributo para o mundo externo, deixe-o como private e crie um getter para o mesmo caso necessário.
    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {}

    get volume(){

        return this.quantidade * this.valor;
    }
}
```

