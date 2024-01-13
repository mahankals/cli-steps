const cliProcess = require(".");
const process = new cliProcess({
  style: 'binary',
  success: 'Finish',
  fail: 'Fail',
});

process.start();
process.text = "Downloading 0%";

let progressPercent = 0;

const updateProgress = () => {
  if (progressPercent <= 100) {
    process.text = `Downloading ${progressPercent}%`;

    setTimeout(() => {
      progressPercent += 10; // Update progress by 10%
      updateProgress();
    }, 1000);
  } else {
    process.succeed("Download completed.");
  }
};

updateProgress();