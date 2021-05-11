System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacoes;
    return {
        setters: [],
        execute: function () {
            Negociacoes = class Negociacoes {
                constructor() {
                    this._negociacaoes = [];
                }
                adiciona(negociacao) {
                    this._negociacaoes.push(negociacao);
                }
                paraArray() {
                    return [].concat(this._negociacaoes);
                }
            };
            exports_1("Negociacoes", Negociacoes);
        }
    };
});
