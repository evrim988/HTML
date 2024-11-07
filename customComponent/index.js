class MyElement extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = 'Merhaba Arkadaşlar';
        this.innerHTML += '<h2>Kimsiniz</h2>';
        this.innerHTML += 'ben....: ' + this.getAttribute('name') + '<br>' + '<br>';
        this.innerHTML += '<b>Burası Önemli</b>';
    }
}
customElements.define('benim-ozel-elementim', MyElement);