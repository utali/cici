/**
 * Created by liqiaoqiao on 2018/1/16.
 */

var fs = require('fs');
var rs = fs.createReadStream('cryptoDemo.js');
var ws = fs.createWriteStream('copy4.js');

rs.on('data', function (chunk) {
    if (ws.write(chunk) == false) {
        rs.pause();
    }
});

rs.on('end', function () {
    ws.end();
});

rs.on('drain', function () {
    rs.resume();
});
