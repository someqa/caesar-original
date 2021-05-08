const inputFile='./input.txt';
const outputFile='./output.txt'

const {getShiftedString}=require('./shiftedString');
const fs=require('fs');
const { pipeline, Transform } = require('stream');

function processFileInput(inputFilePath, shift, outputFilePath){
    const transformer=new Transform({
        transform:(chunk, _, done)=>
        done(null, getShiftedString(chunk.toString(), shift) )
    })
    return pipeline(
        fs.createReadStream(inputFilePath),
        transformer,
        fs.createWriteStream(outputFilePath),
        (err)=>console.log(err)
    )
}

processFileInput(inputFile, 1, outputFile)