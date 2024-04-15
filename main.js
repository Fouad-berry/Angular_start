class HelloWorld extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = '<p>Hello world!</p>';
    }
}

customElements.define('hello-world', HelloWorld);