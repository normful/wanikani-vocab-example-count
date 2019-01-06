import { Logger } from "./logger/logger";
import { createMutationObserver } from "./dom/dom";
const Log = new Logger();

export class App {
  public init() {
    addEventListener("DOMContentLoaded", this.onDomContentLoaded.bind(this));
  }

  private onDomContentLoaded() {
    Log.debug("onDomContentLoaded");
    createMutationObserver();
  }
}
