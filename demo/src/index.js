import { router } from "./routing/router";
import { debugBubble } from "debug-bubble";


function spawn(delay) {
    setTimeout(() => {
        debugBubble("Debug", "Something happened over here", 9999);
        spawn(Math.floor(Math.random() * 3) + 2);
    }, delay * 1000);
}

router.start();
