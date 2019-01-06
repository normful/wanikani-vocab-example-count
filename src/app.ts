import { createMutationObserver } from "./dom/dom";

export class App {
  public init() {
    addEventListener("DOMContentLoaded", this.onDomContentLoaded.bind(this));
  }

  private onDomContentLoaded() {
    createMutationObserver();
  }
}
