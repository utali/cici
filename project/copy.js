/**
 * Created by liqiaoqiao on 2018/1/16.
 */

//小文件拷贝
var fs = require('fs');

function copy(src, dst) {
    fs.writeFileSync(dst, fs.readFileSync(src)); //将src文件拷贝到dst文件
}

function main() {
    copy('cryptoDemo.js', 'copy2.js');
}

// main();

//大文件拷贝
function copyL(src, dst) {
    fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

function mainL() {
    copy('cryptoDemo.js', 'copy3.js');
}

mainL();

//以上程序使用fs.createReadStream创建了一个源文件的只读数据流，并使用fs.createWriteStream创建了一个目标文件的只写数据流，并且用pipe方法把两个数据流连接了起来。连接起来后发生的事情，说得抽象点的话，水顺着水管从一个桶流到了另一个桶