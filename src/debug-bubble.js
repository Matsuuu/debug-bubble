import Styles from "./debug-bubble.css" assert { type: "css" };

export class DebugBubble extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
            <button onclick="this.parentNode.host.remove()">X</button>
            <h2>Debug</h2>
            <p>Something happened over here</p>
        `;

        this.shadowRoot.adoptedStyleSheets = [Styles];
    }

    attributeChangedCallback(name, oldValue, newValue) { }

    observedAttributes() {
        return [];
    }
}
