/* tslint:disable:no-console */

const logPrefix = "[WKVEC] ";

export class Logger {
  private prefix: string;
  private disableLogging: boolean;

  constructor() {
    this.prefix = logPrefix;
    this.disableLogging = false; // Set to false for development
  }

  public debug(msg: string, ...args: any[]) {
    if (this.disableLogging) {
      return;
    }
    console.debug(this.prefix + msg, ...args);
  }

  public info(msg: string, ...args: any[]) {
    if (this.disableLogging) {
      return;
    }
    console.log(this.prefix + msg, ...args);
  }

  public warn(msg: string, ...args: any[]) {
    if (this.disableLogging) {
      return;
    }
    console.warn(this.prefix + msg, ...args);
  }

  public error(msg: string, ...args: any[]) {
    if (this.disableLogging) {
      return;
    }
    console.error(this.prefix + msg, ...args);
  }
}
