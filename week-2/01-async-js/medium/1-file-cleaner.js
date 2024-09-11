// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs")
const path = require("path")

const run_cleaner = ()=>{
    fs.readFile(path.join(__dirname, '../README_demo.md'), 'utf-8', (err, contents) => {
        if (err){
            console.log('Error occurred while reading the file', err)
            return
        }
        
        // Method 1
        // const words_array = contents.split(' ').filter(word => word.trim() != '')
        // const cleansed_data = words_array.join(' ')

        // Method 2
        const cleansed_data = contents.replace(/\s+/g, ' ').trim()
        
        fs.writeFile(path.join(__dirname, '../README_demo.md'), cleansed_data, 'utf-8', (err)=>{
            if (err) console.log('Error occurred while reading the file', err);
            console.log('Data cleansed!')
            return
        })
    })
}

run_cleaner()