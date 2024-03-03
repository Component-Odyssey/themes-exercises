import { LitElement, html } from "lit";
import { styles } from "./src/toggler-styles.js";

class ThemeToggler extends LitElement {
  themes = ['red', 'blue', 'purple', 'dark', 'light'];
  currentTheme = '';

  static styles = styles;

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
