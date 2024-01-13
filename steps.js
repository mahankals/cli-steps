const spinners = Object.assign({}, require('./spinners.json')); //ref: https://github.com/sindresorhus/cli-spinners/blob/main/spinners.json

let msg = null;
class cliProcess {
  constructor(options) {
    this.success = options.success || 'Success';
    this.fail = options.fail || 'Error';
    this.position = options.position || 'start';
    this.style = options.style
    if (!spinners[this.style]) {
      this.style = 'line'; // Set a default style if the provided style is invalid
    }
    this.interval = spinners[this.style].interval;
    this.spinnerFrames = spinners[this.style].frames;
    this.dotCount = 0;
  }

  start() {
    this.spinnerInterval = setInterval(() => {
      process.stdout.write(`\r\u001b[2K${this.spinnerFrames[this.dotCount % this.spinnerFrames.length]}  ${msg}`);
      this.dotCount++;
    }, this.interval);
  }

  set text(value) {
    msg = value;
  }

  succeed(message) {
    clearInterval(this.spinnerInterval);
    process.stdout.write(`\r\u001b[2K\x1b[32m${this.success}\x1b[0m ${message}\n`);
  }

  failed(errorMessage) {
    clearInterval(this.spinnerInterval);
    process.stdout.write(`\r\u001b[2K\x1b[31m${this.fail}\x1b[0m ${errorMessage}\n`);
  }
}

module.exports = cliProcess;
