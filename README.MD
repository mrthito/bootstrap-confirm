# Bootstrap Confirm

A simple Bootstrap-based confirmation modal for JavaScript.

## Installation

```sh
npm install bootstrap5-confirm
```

```sh
pnpm install bootstrap5-confirm
```

```sh
bun install bootstrap5-confirm
```

## Usage

```js
import BootstrapConfirm from "bootstrap5-confirm";

new BootstrapConfirm({
  selector: ".delete-btn",
  message: "Are you sure you want to delete this?",
  onConfirm: () => console.log("Confirmed!"),
});
```
