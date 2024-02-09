import { LitElement, html, css } from "lit";

class ThemeToggler extends LitElement {
  static styles = styles;

  render() {
    return html``;
  }
}


window.customElements.define('theme-toggler', ThemeToggler);


const styles = css`
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
