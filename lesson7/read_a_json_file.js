// 引入jsonfile模块
// https://github.com/jprichardson/node-jsonfile
var jsonFile = require('jsonfile');

jsonFile.readFile('./data.json', function (err, file) {
  if (err) {
    console.log(err);
  } else {
    console.log(file);
  }
});




