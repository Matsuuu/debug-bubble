# Debug Bubble

For those pesky usecases where you just want a pretty implicator that something happened.

## Usage

### Install to your project

```bash
npm install debug-bubble
```

### Or use import maps

```html
<script type="importmap">
  {
    "imports": {
      "debug-bubble": "https://cdn.jsdelivr.net/npm/debug-bubble/src/bundle.js"
    }
  }
</script>
```

### Call Debug Bubble

```javascript
import { debugBubble } from "debug-bubble";

window.addEventListener("keydown", e => {
    debugBubble("Key pressed!", "You pressed the key " + e.key);
})
```
