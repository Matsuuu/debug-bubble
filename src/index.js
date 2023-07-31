import { DebugBubble } from "./debug-bubble.js";
import { DebugContainer } from "./debug-container.js";

/**
 * @param { string } title
 * @param { string } message
 * @param { number } [timeout]
 * */
export function debugBubble(title, message, timeout = 5) {
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
    console.log("Foo");

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
