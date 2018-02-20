//命令行中输入一个文件的路径，并打印出该文件中行数
var fs = require('fs');

function readFile(src){
  var buf = fs.readFileSync(src,'utf-8');
  var strArr = buf.split("\n")
  console.log(strArr.length-1)
}
function main(argv){
  readFile(argv[0])
}
main(process.argv.slice(2))
