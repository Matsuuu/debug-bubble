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
      "debug-bubble": "./node_modules/debug-bubble/src/index.js"
    }
  }
</script>
```

### Call debug bubble

```javascript
import { debugBubble } from "debug-bubble";

window.addEventListener("keydown", e => {
    debugBubble("Key pressed!", "You pressed the key " + e.key);
})
```
