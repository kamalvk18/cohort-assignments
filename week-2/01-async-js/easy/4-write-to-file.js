// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require("fs")
const path = require("path")

const write = () => {
    const data = 'This  is a          sample    write   operation done using   fs module in node js'
    fs.writeFile(path.join(__dirname,'../README_demo.md'), data, 'utf-8', (err) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('Data written successfully')
    })
}

write()
console.log('Starting to write the file ......')
