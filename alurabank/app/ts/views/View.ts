export abstract class View<T> {
    
    private _elemento: JQuery;
    private _escapar: boolean;

    //O parâmetro escapar me permite dizer se quero ou não remover algo indesejado sob meu código.
    //Pode ser ou não um parâmetro opcional, caso sim o mesmo vem acompanhado pelo ponto de interrogação "escapar?: boolean"
    //Ele possui um valor padrão "false", caso você não passe 
    constructor(seletor: string, escapar: boolean = false){

        this._elemento = $(seletor);
        this._escapar = escapar;
    }

    update(modelo: T): void {
        let template = this.template(modelo); //template irá receber o resultado do método template
        
        //Caso o parâmetro estiver marcado como true
        if(this._escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/g,''); //utilizaremos o método replace para procurar e substituir a tag script por uma string em branco.
        }
        //Por fim o template é atribuído ao elemento
        this._elemento.html(template);
    }

    protected abstract template(modelo: T): string;
}