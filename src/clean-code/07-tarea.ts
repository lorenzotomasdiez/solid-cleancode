(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    interface HtmlElementProps{
        id   : string;
        type : HtmlType;
    }

    class HtmlElement {
        public id   : string;
        public type : HtmlType;
        constructor({
            id,
            type
        }: HtmlElementProps) {
            this.id = id;
            this.type = type;
        }
    }



    interface InputAttributesProps{
        placeholder : string;
        value       : string;
            
    }
    class InputAttributes{
        public placeholder : string;
        public value       : string;
        constructor({value, placeholder}:InputAttributesProps) {
            this.placeholder = placeholder;
            this.value = value;
        }
    }

    class InputEvents{
        constructor(){}
        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }
    

    interface InputElementProps{
        id          : string; 
        placeholder : string; 
        value       : string;
    }
    class InputElement{
        public attributes  :InputAttributes;
        public element     :HtmlElement;
        public events      :InputEvents;
        constructor({
            value, placeholder,
            id
        }: InputElementProps) {
            this.attributes = new InputAttributes({value, placeholder});
            this.element    = new HtmlElement({
                id, 
                type: 'input'
            });
            this.events     = new InputEvents();
        }
    }
    
    const nameField = new InputElement({
        value:'Fernando', 
        placeholder: 'Enter first name', 
        id:'txtName'
    });

    console.log({ nameField });

})()