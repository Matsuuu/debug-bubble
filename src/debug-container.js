import Styles from "./debug-container.css" assert { type: "css" };

export class DebugContainer extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.shadowRoot.adoptedStyleSheets = [Styles];
        this.shadowRoot.innerHTML = `
        <slot></slot>
    `;
    }
}

