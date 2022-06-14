const fs = require('fs');
const path = require('path');

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
//     if(err) throw err;
//     console.log('Folder created');
// });

// Create an write to file
// fs.writeFile(path.join(__dirname, '/test', 'hellow.txt'), 'Hello World', function(err) {
//     if(err) throw err;
//     console.log('File File written');
//     fs.appendFile(path.join(__dirname, '/test', 'hellow.txt'), 'I love Node.js', function(err) {
//         if(err) throw err;
//         console.log('File File written');
//     });  
// });

// Read file
// fs.readFile(path.join(__dirname, '/test', 'hellow.txt'), 'utf-8', function(err, data) {
//     if(err) throw err;
//     console.log(data); 
// });

// Rename file
fs.rename(path.join(__dirname, '/test', 'hellow.txt'), path.join(__dirname, '/test', 'helloworld.txt'), function(err) {
    if(err) throw err;
    console.log('file renamed'); 
});
