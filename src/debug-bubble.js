export class DebugBubble extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector("h2").innerText = this.getAttribute("message-title");
        this.shadowRoot.querySelector("p").innerText = this.getAttribute("message-content");

        const timeout = parseInt(this.getAttribute("message-timeout")) || 5;
        setTimeout(() => {
            this.removeBubble();
        }, timeout * 1000);
    }

    removeBubble() {
        const padding = 16;
        this.style.setProperty("--bubble-height", this.clientHeight - padding + "px");
        this.setAttribute("closing", "");
        this.addEventListener("animationend", () => {
            this.remove();
        })
    }
}

const template = document.createElement("template");
template.innerHTML = `
    <style>
        ${Styles()}
    </style>

    <button onclick="this.parentNode.host.removeBubble()">X</button>
    <h2></h2>
    <p></p>
`;

function Styles() {
    return `
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

:host {
    position: relative;
    background: #FAFAFA;
    border-radius: 4px;
    --padding: 0.5rem;
    padding: var(--padding);
    --margin: 0.5rem 0;
    margin: var(--margin);
    display: flex;
    flex-direction: column;
    font-family: 'Rubik', sans-serif;
    box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19) ;
    transition: 200ms ease-in-out;
    animation: slide-in 1000ms;
    opacity: 1;
    height: var(--bubble-height);
    --bubble-height: auto;
}

:host([closing]) {
    animation: disappear 600ms;
}

@keyframes slide-in {
    from {
        opacity: 0;
        transform: translate(0, 100px);
    }
}

@keyframes disappear {
    0% {
        opacity: 1;
        height: var(--bubble-height);
        padding: var(--padding);
        margin: var(--margin);
    }
    50% {
        opacity: 0;
        height: var(--bubble-height);
        padding: var(--padding);
        margin: var(--margin);
    }
    100% {
        opacity: 0;
        height: 0;
        padding: 0;
        margin: 0;
    }
}

h2, p {
    padding: 0;
    margin: 0.2rem 0.6rem;
}

h2 {
    font-size: 1.3rem;
}

p {
    opacity: 0.8;
}

button {
    width: min-content;
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
    background: none;
    border: none;
    cursor: pointer;
}

button:hover {
    font-weight: bold;
}
`;
}