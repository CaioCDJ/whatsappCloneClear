class Format{

    static getCamelCase(text){
        
        // nao seria mais logico fazer isso pelo local storage??
        let div = document.createElement('div');

        div.innerHTML = `<div data-${text}> </div>`;

        return Object.keys(div.firstChild.dataset)[0];
    }
}