System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View_1, MensagemView;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            MensagemView = class MensagemView extends View_1.View {
                constructor(seletor, escapar) {
                    super(seletor, escapar);
                }
                template(modelo) {
                    return `<p class="alert alert-info">${modelo}</p>`;
                }
            };
            exports_1("MensagemView", MensagemView);
        }
    };
});
