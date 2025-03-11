# Bootstrap Confirm

A simple Bootstrap-based confirmation modal for JavaScript.

## Installation

```sh
npm install bootstrap-confirm
```

## Usage

```js
import BootstrapConfirm from "bootstrap-confirm";

new BootstrapConfirm({
  selector: ".delete-btn",
  message: "Are you sure you want to delete this?",
  onConfirm: () => console.log("Confirmed!"),
});
```
