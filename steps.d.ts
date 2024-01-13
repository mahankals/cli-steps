declare module 'cliProcess' {
  class cliProcess {
    constructor(options: {
      success?: string;
      fail?: string;
      position?: string;
      style?: string;
    });

    start(): void;
    set text(value: string): void;
    succeed(message: string): void;
    fail(errorMessage: string): void;
  }

  export = cliProcess;
}
