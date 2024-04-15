class HelloWorld extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = '<p>Hello world!</p>';

        if(this.className == 'f-end'){
            this.innerHTML='<p style="font-weight:bold;">Bonjour le monde</p>';
        }
  }
}

customElements.define('hello-world', HelloWorld);