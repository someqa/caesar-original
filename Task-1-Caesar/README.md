# Caesar cipher CLI tool

**Caesar cipher CLI tool is a tool that encodes and decodes a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)**.

It accept 4 options (short alias and full name):

1.  **-s, --shift**: a shift
2.  **-i, --input**: an input file
3.  **-o, --output**: an output file
4.  **-a, --action**: an action encode/decode

It changes only English letters (lowercase and uppercase), all the other symbols stay untouched.

## Parameters:

**Shift (required)**
It determines a shift in the English alphabet. E.g. if `-s 1` is passed, `AbZ` will be changed to `BcA` (+1 letter in English alhabet). If shift gets to "z", it starts from "a" again (e.g. in the example above "Z" got changed to "A").
Shift can be positive or negative. If there's no shift passed or it's not a number, an error occurs and program doesn't execute.

**Action (required)**
It can be either "encode" (to encode message) or "decode" (to decode message). If there's no action passed or it's other than "encode" or "decode", an error occurs and program doesn't execute.

**Input**
Path to the input file. By default it writes to src folder, so it's recommended to pass absolute path value.
If there's no input passed, programm will wait for you to type text in the console window. When you're done, you can press Ctrl+C (Windows) to finish.

**Output**
Path to the output file. By default it writes to src folder, so it's recommended to pass absolute path value. If file doesn't exist, it will be created. If it exists, the result will be written to the end of the file.
If there's no output passed, programm will write result to the console window. 

## How to use:
You need to have node installed in your machine and open your command line (console) in src folder.
Then you may write in any of the following ways (parameters are just the examples of use):
1. **with node**:
```bash
$ node index.js -a encode -s 7 -i "./input.txt" -o "./output.txt"
```
(it will encode text from input.txt with shift=7 and write the result to output.txt)

2. **with npm run**:
```bash
$ npm run my_caesar_cli -- -a decode -s 5 -i "D:\encoded.txt" -o "D:\decoded.txt"
```
(it will decode text from encoded.txt with shift=5 and write the result to decoded.txt)

3. **with yarn** (if you have it installed):
```bash
$ yarn my_caesar_cli -a encode -s -2
```
(it will encode text you input into console with shift=-2 and write the result back to the console)
