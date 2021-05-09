const { program } = require('commander');
const { processInput } = require('./processInput');

program
  .requiredOption('-s, --shift <shift>', 'a shift')
  .requiredOption('-a, --action <action>', 'an action (encode  or decode)')
  .option('-i, --input <input>', 'path to input file')
  .option('-o, --output <output>', 'path to outpu file');

program.parse(process.argv);
const { shift, input, output, action } = program.opts();

if (action != 'encode' && action != 'decode') {
  process.stderr.write(
    `error: unknown action passed, please, pass "encode" or "decode" to -a, --action param\n`
  );
  process.exit(1);
}

const shiftNumber = parseInt(shift);
if (isNaN(shiftNumber)) {
  process.stderr.write(
    `error: not a number passed as shift parameter. Please, pass integer number and try again\n`
  );
  process.exit(1);
}
const adjustedShiftNumber = action == 'encode' ? shiftNumber : -shiftNumber;

processInput(input, adjustedShiftNumber, output);
