class WhatsAppController{

    constructor(){
        
        this.elementsPrototype();  
        this.loadElements();
    }

    // lendo zilhoes de elementos  
    loadElements(){
        
        this.el = {};

        document.querySelectorAll('[id]').forEach(element=>{

            this.el[Format.getCamelCase(element.id)] = element;
        });
    }

    elementsPrototype(){
        
        Element.prototype.hide = function(){

            this.style.display = 'none';
            return this;
        }
        
        Element.prototype.show = function(){

            this.style.display = 'block';
            return this;
        }
        
        Element.prototype.toggle = function(){

            this.style.display = (this.style.display ==='none')? 'block': 'none';
            return this;
        }

        // multiplos eventos
        Element.prototype.on = function(events){

            events.spit(' ').forEach(event =>{

                this.addEventListener(event, fn)
            });
        }

        Element.prototype.css = function (styles) {

            for(let name in styles){
                this.styel[name] = styles[name];
            }
            return this;
        }
        
        Element.prototype.addClass = function (name) {
            this.classList.add(name);
            return this;
        }
        
        Element.prototype.removeClass = function (name) {
            this.classList.remove(name);
            return this;
        }
        
        Element.prototype.toggleClass = function (name) {
            this.classList.toggle(name);
            return this;
        }

        Element.prototype.hasClass = function (name) {

            return this.classList.contains(name);
        }
    }
}