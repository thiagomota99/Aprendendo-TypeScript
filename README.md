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

11. Existem algumas formas de declarar um atributo como um Array em typescript, tipos de retornos dos métodos . Veja alguns dos exemplos:
```ts
class Negociacoes {
    private _negociacaoes: Array<Negociacao> = []; //Nesse caso estou definindo o atributo _negociacao como um Array que vai armazenar objetos do tipo Negociacao
                                                   //Isso garante que caso ele receba outro tipo de dado que não seja uma Negociacao irá acusar um erro de sintaxe

    private arrayDeNumbers: number[] = []; //Uma outra de definir um atributo como um Array

    adiciona(negociacao: Negociacao): void { //void representa que o método não retorna nada.

        this._negociacaoes.push(negociacao);
    }

    paraArray() : Negociacao[] { //Negociacao[] devole um array de objetos do tipo Negociacao

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