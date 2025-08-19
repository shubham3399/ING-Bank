import { html, css, LitElement } from 'lit';

class myElement extends LitElement {
    static styles = css`
        p {
        color: green;
        }`;
    render() {
        return html`
           <div>
               <p>This is a simple web component.</p>
           </div>
       `;
    }
};

class displayInputBox extends HTMLElement {
    constructor() {
        super();
        this.temp = true;
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML =
            `<style>
            #submit {
              background-color: blue;
              color: white;
              outline: 0;
              border-radius: 5px;
            }
            </style>
            <input type="text" placeholder="Type something...">
         <button id="submit">Submit</button>
         <p id="output"></p>`;

        const input = this.shadowRoot.querySelector('input');
        if (this.hasAttribute('value')) {
            input.value = this.getAttribute('value');
        }

        const button = this.shadowRoot.querySelector("#submit");
        button.disabled = this.temp;

        this.shadowRoot.querySelector('input').addEventListener('input', (event) => {
            this.temp = event.target.value.length === 0;
            button.disabled = this.temp;
            console.log("This is", this.shadowRoot.querySelector('input'));
            this.shadowRoot.querySelector('#output').textContent = `You typed: ${event.target.value}`;

        });
        this.shadowRoot.querySelector('#submit').addEventListener('click', () => {
            this.shadowRoot.querySelector('input').value = '';
            alert('Button Clicked');
        });
        console.log("Value is", this.shadowRoot.querySelector('#submit').value)
    }
};

customElements.define('display-input-box', displayInputBox);
customElements.define('my-element', myElement);


export { displayInputBox, myElement };