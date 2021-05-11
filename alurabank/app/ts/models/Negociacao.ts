export class Negociacao {
    
    //Podemos utilizar a propriedade data readonly para determinar que os atributos da classe são apenas de leitura
    //e que não podem ter seus valores alterados. Com isso eliminamos o uso dos getters.
    //Detalhe: Caso não queria expor de maneira nenhuma seu atributo para o mundo externo, deixe-o como private e crie um getter para o mesmo caso necessário.
    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {}

    get volume(){

        return this.quantidade * this.valor;
    }
}