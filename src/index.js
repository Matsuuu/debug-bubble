import { DebugBubble } from "./debug-bubble.js";
import { DebugContainer } from "./debug-container.js";

/**
 * @param { string } message
 * */
export function debugBubble(message) {
    if (!customElements.get("debug-bubble")) {
        customElements.define("debug-bubble", DebugBubble);
    }
    if (!customElements.get("debug-container")) {
        customElements.define("debug-container", DebugContainer);
    }


}
