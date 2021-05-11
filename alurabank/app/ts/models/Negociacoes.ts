import { Negociacao } from './Negociacao';

export class Negociacoes {
    private _negociacaoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void {

        this._negociacaoes.push(negociacao);
    }

    paraArray(): Negociacao[] {
        
        //Nessa linha estou criando um array vazio do tipo Negociacao e concatenando com o array de Negociacao
        return ([] as Negociacao[]).concat(this._negociacaoes);
    }
}