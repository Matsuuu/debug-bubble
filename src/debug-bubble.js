import Styles from "./debug-bubble.css" assert { type: "css" };

export class DebugBubble extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
            <p>Debug</p>
        `;

        this.shadowRoot.adoptedStyleSheets = [Styles];
    }

    attributeChangedCallback(name, oldValue, newValue) { }

    observedAttributes() {
        return [];
    }
}
