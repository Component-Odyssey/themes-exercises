import { LitElement, html, css } from "lit";
import { when } from "lit/directives/when.js";

class LitProduct extends LitElement {
  static styles = css`
    * {
      box-sizing: border-box;
    }

    :host {
      display: block;

      max-width: var(--pc-max-width);
      border: var(--pc-border-size) solid var(--pc-border-color);
      filter: var(--pc-background-shadow);
      background: var(--pc-background-color);
      font-family: var(--pc-font-family);
      color: var(--pc-font-color);
    }

    h2 {
      margin: var(--pc-header-margin);
    }

    img {
      display: block;
      width: 100%;
    }

    button {
      width: fit-content;
      font-family: var(--pc-button-font-family);
      padding: var(--pc-button-padding);
      border: var(--pc-button-border-size) solid var(--pc-button-border-color);
      color: var(--pc-button-color);
      background: var(--pc-button-background-color);
      filter: var(--pc-button-shadow);
    }

    button:active {
      transform: var(--pc-button-transform-active);
      filter: var(--pc-button-shadow-active);
    }

    #purchase-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      margin: var(--pc-info-wrapper-margin);
    }
  `;

  static properties = {
    count: {
      type: Number,
    },
    title: {},
    imgSrc: {
      attribute: 'img-src'
    },
  };

  constructor() {
    super();
    this.count = 0;
  }

  addToBasket() {
    this.count++;
  }

  render() {
    return html`
      <h2>${this.title}</h2>
      <img src=${this.imgSrc} />
      <div id="purchase-wrapper">
        <p>Quantity: ${this.count}</p>
        <button
          @click=${this.addToBasket}
        >
          Add to basket
        </button>
      </div>
    `;
  }
}

customElements.define("product-card", LitProduct);
