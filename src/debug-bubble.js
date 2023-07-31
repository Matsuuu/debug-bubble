import Styles from "./debug-bubble.css" assert { type: "css" };

export class DebugBubble extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });

        this.shadowRoot.adoptedStyleSheets = [Styles];
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <button onclick="this.parentNode.host.removeBubble()">X</button>
            <h2>${this.getAttribute("message-title")}</h2>
            <p>${this.getAttribute("message-content")}</p>
        `;

        const timeout = parseInt(this.getAttribute("message-timeout")) || 5;
        setTimeout(() => {
            this.removeBubble();
        }, timeout * 1000);
    }

    removeBubble() {
        const padding = 16;
        this.style.setProperty("--bubble-height", this.clientHeight - 16 + "px");
        this.setAttribute("closing", "");
        this.addEventListener("animationend", () => {
            this.remove();
        })
    }
}
