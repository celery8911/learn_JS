var fs = require('fs');

var filePathString = './write_file_sync.txt';

var data =  fs.readdirSync('./');

fs.writeFileSync(filePathString, data);
