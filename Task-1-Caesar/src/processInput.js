const { getShiftedString } = require('./shiftedString');
const fs = require('fs');
const { pipeline, Transform } = require('stream');
const { stdin, stdout, stderr } = require('process');

function processInput(inputFilePath, shift, outputFilePath) {
  const transformer = new Transform({
    transform: (chunk, _, done) =>
      done(null, getShiftedString(chunk.toString(), shift)),
  });
  const input = inputFilePath ? fs.createReadStream(inputFilePath) : stdin;
  const output = outputFilePath ? fs.createWriteStream(outputFilePath, {flags:'a'}) : stdout;
  return pipeline(input, transformer, output, (err) => {
    if (err) {
      stderr.write(
        `\x1B[31m The following error occured when performing operation: \n ${err.message}\n The text has NOT been processed! Please, fix the error and try again.\x1b[0m`
      );
      process.exit(1);
    }
  });
}

module.exports = {
  processInput,
};
