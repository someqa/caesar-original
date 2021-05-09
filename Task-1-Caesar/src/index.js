const { program } = require('commander');
const { processInput } = require('./processInput');

program
  .requiredOption('-s, --shift <shift>', 'a shift')
  .requiredOption('-a, --action <action>', 'an action (encode  or decode)')
  .option('-i, --input <input>', 'path to input file')
  .option('-o, --output <output>', 'path to outpu file');


program.parse(process.argv);
const { shift, input, output, action } = program.opts();
if (action!='encode'&&action!='decode') return console.log('error: unknown action passed, please, pass "encode" or "decode" to -a, --action param');

const shiftNumber = parseInt(shift);
const adjustedShiftNumber = action == 'encode' ? shiftNumber : -shiftNumber;

processInput(input, adjustedShiftNumber, output);
