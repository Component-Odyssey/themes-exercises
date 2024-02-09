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
    const currentThemeIndex = this.themes.indexOf(this.currentTheme);
    const nextThemeIndex = (currentThemeIndex + 1) % this.themes.length;
    const nextTheme = this.themes[nextThemeIndex];

    document.body.setAttribute('data-theme', nextTheme);
    this.currentTheme = nextTheme;
  }

  render() {
    return html`
      <button @click=${this.toggleTheme}>Change theme</button>
    `;
  }
}


window.customElements.define('theme-toggler', ThemeToggler);
