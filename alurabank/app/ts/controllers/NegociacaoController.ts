import { NegociacoesView, MensagemView  } from '../views/index';
import { Negociacao, Negociacoes } from '../models/index';

export class NegociacaoController {

    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView("#mensagemView",);

    constructor(){
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._negociacoesView.update(this._negociacoes);
    }

    incluir(event: Event): void{

        event.preventDefault();

        if(!this._isDiaUtil(new Date(this._inputData.val().replace(/-/g,',')))) {
            this._mensagemView.update('Negociações não podem ser incluídas aos finais de semana.');
            return;
        }

        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g,',')),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );
            
        this._negociacoes.adiciona(negociacao);
        
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negociação adicionada com sucesso!");

    }

    private _isDiaUtil(data: Date): boolean {
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }
    
}


//Criando um Enum dos dias das semana. Não estou exportando, pois não existe necessidade dessa classe seja vizualida por outros módulos.
enum DiaDaSemana {

    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}