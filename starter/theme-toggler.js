import { LitElement, html } from "lit";
import { styles } from "./src/toggler-styles.js";

// Hint: You'll want to store the list of toggles and track the currently active theme.
// When you've hit the last theme, you'll want to loop back to the first one.
// Assume that no theme is currently present on the body element. Clicking the theme toggler for the first time should set the theme to 'red'
// To get the tests passing, ensure that your theme cycles through the correct order defined in the README.

class ThemeToggler extends LitElement {
  static styles = styles;

  render() {
    return html``;
  }
}

window.customElements.define('theme-toggler', ThemeToggler);
