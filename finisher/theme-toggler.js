import { LitElement, html, css } from "lit";

class ThemeToggler extends LitElement {
  themes = ['red', 'blue', 'purple', 'dark', 'light'];
  currentTheme = '';

  static styles = css`
    :host {
      box-sizing: border-box;
    }

    button {
      font-family: inherit;
      font-size: inherit;
      background: white;
      border-radius: 2px;
      cursor: pointer;
      padding: 8px;
      border: 1px solid black;
      filter: drop-shadow(2px 2px 0px var(--black));
      width: fit-content;
    }

    button:active {
      transform: translate(2px, 2px);
      filter: drop-shadow(0px 0px 0px var(--black));
    }
  `;

  toggleTheme() {
    if (!this.currentTheme) {
      this.currentTheme = 'red';
    } else {
      const currIndex = this.themes.indexOf(this.currentTheme);
      this.currentTheme = this.themes[currIndex + 1] || this.themes[0];
    }

    document.body.setAttribute('data-theme', this.currentTheme);
  }

  render() {
    return html`
      <button @click=${this.toggleTheme}>Change theme</button>
    `;
  }
}


window.customElements.define('theme-toggler', ThemeToggler);
