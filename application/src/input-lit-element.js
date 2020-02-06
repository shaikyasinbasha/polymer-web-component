
import { LitElement, html } from 'lit-element';

export class InputLitElement extends LitElement {
 
  static get properties() {
    return {
      value: { type: String, reflect: true },
      type: { type: String, reflect: true },
      name: { type: String, reflect: true }
    };
  }
  constructor() {
    super();
    this.value = '';
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
      </style>
      <style>
        @import url('https://fonts.googleapis.com/css?family=Zhi+Mang+Xing&display=swap');
      </style>

             
      <div class="input-container">
        <input name="myinput"
          type="${this.type}"
          name="${this.name}"
          value="${this.value}"
          @keyup="${this.onChangeKeyup}" >
      </div>
    `;
  }

  onChangeKeyup(e) {
    console.log(e.target.value);
    this.message = e.target.value;
    let event = new CustomEvent('poly-input-keyup', {
      detail: {
        value: e.target.value,
        name: this.name
      }
    });
    this.dispatchEvent(event);
  }
}


customElements.define('input-lit-element', InputLitElement);
