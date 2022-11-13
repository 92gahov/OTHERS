const fs = require('fs');

// reading files

// fs.readFile('./blog/blogs.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log("last line");

// writing files

// const date = new Date().getHours()

// console.log(date)

// fs.writeFile('./blog/blogs.txt', 'Hello world', () => {
//     console.log('file was writen')
// });

// fs.writeFile(`./blog/blogs${date}.txt`, 'Hello world', () => {
//     console.log('file was writen')
// });

// directories

// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('folder created')
//     })
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('folder deleted')
//     })
// }

// delete files

if (fs.existsSync('./blog/deleteme.txt')) {
    fs.unlink('./blog/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted')
    })
}