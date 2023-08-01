export class DebugContainer extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

const template = document.createElement("template");
template.innerHTML = `
    <style>
        :host {
            display: flex;
            max-width: 20vw;
            min-width: 350px;
            position: fixed;
            bottom: 1rem;
            right: 1rem;
            flex-direction: column;
        }
    </style>
    
    <slot></slot>
`;