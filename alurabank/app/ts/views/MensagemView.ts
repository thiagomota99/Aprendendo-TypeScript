import { View } from './View';

export class MensagemView extends View<string> {

    constructor(seletor: string, escapar?: boolean) {

        super(seletor,escapar);
    }

    protected template(modelo: string): string {
        
        return `<p class="alert alert-info">${modelo}</p>`;
    }

}