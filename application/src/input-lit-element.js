
import { LitElement, html } from 'lit-element';

export class InputLitElement extends LitElement {
 
  static get properties() {
    return {
      message: { type: String },
      pie: { type: Boolean }
    };
  }
  constructor() {
    super();

    this.loadComplete = false;
    this.message = 'Text Here';
    this.pie = false;
  }

  render() {
    return html`

      <style> 
        :host *, ::after, ::before {
          box-sizing: border-box;
          font-family: 'Zhi Mang Xing', cursive;
        }  
        :host input {
          display: block;
          width: 100%;
          height: calc(1.5em + .75rem + 2px);
          padding: .375rem .75rem;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          color: #495057;
          background-color: #fff;
          background-clip: padding-box;
          border: 1px solid #ced4da;
          border-radius: .25rem;
          transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        }     
        :host .polymer-container{
          border: 5px solid red;
          padding: 20px;
        }
      </style>
      <style>
        @import url('https://fonts.googleapis.com/css?family=Zhi+Mang+Xing&display=swap');
      </style>

      <div class="polymer-container">
        <h1>
          Polymer Shadow Area: ${this.message}
        </h1>
        <div class="input-container"><input name="myinput"
          type="text"
          @keyup="${this.togglePie}" >
        </div>

      </div>

    `;
  }

  firstUpdated() {
    const input = this.shadowRoot.querySelector('input');
    input.focus();
  }  
  togglePie(e) {
    console.log(e.target.value);
    this.message = e.target.value;
    let event = new CustomEvent('poly-input-keyup', {
      detail: {
        value: e.target.value
      }
    });
    this.dispatchEvent(event);
  }
}


customElements.define('input-lit-element', InputLitElement);
