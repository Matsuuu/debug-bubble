// src/debug-bubble.js
import Styles from "./debug-bubble.css" assert { type: "css" };
var DebugBubble = class extends HTMLElement {
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
    }, timeout * 1e3);
  }
  removeBubble() {
    const padding = 16;
    this.style.setProperty("--bubble-height", this.clientHeight - 16 + "px");
    this.setAttribute("closing", "");
    this.addEventListener("animationend", () => {
      this.remove();
    });
  }
};

// src/debug-container.js
import Styles2 from "./debug-container.css" assert { type: "css" };
var DebugContainer = class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [Styles2];
    this.shadowRoot.innerHTML = `
        <slot></slot>
    `;
  }
};

// src/index.js
function debugBubble(title, message, timeout = 5) {
  if (!customElements.get("debug-bubble")) {
    customElements.define("debug-bubble", DebugBubble);
  }
  if (!customElements.get("debug-container")) {
    customElements.define("debug-container", DebugContainer);
  }
  let container = document.querySelector("debug-container");
  if (!container) {
    container = document.createElement("debug-container");
    document.body.appendChild(container);
  }
  const bubble = document.createElement("debug-bubble");
  bubble.setAttribute("message-title", title);
  bubble.setAttribute("message-content", message);
  bubble.setAttribute("message-timeout", timeout.toString());
  container.prepend(bubble);
  if (getBubbleCount() > 4) {
    getOldestBubble()?.removeBubble();
  }
}
function getBubbleCount() {
  const container = document.querySelector("debug-container");
  return container?.querySelectorAll("debug-bubble").length;
}
function getOldestBubble() {
  const container = document.querySelector("debug-container");
  return [...container?.querySelectorAll("debug-bubble:not([closing])")].at(-1);
}
export {
  debugBubble
};
