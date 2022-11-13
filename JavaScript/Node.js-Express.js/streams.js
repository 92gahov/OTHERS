const fs = require('fs');

const readStream = fs.createReadStream('./blog/blogg.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./blog/blog3.txt');

// readStream.on('data', (chunk) => {
//     console.log('--------new chunk------')
//     console.log(chunk.toString());
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// })

// piping

readStream.pipe(writeStream);