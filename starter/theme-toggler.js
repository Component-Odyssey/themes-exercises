import { LitElement, html } from "lit";
import { styles } from "./src/toggler-styles.js";

class ThemeToggler extends LitElement {
  static styles = styles;

  render() {
    return html``;
  }
}

window.customElements.define('theme-toggler', ThemeToggler);
