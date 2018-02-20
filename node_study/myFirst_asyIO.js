//命令行中输入一个文件的路径，并打印出该文件中行数(使用异步)
var fs = require('fs');

function readAsFile(src){
   fs.readFile(src,'utf-8',function(err,data){
     if(err){

     } else {
       var dataArr = data.split('\n')
       console.log(dataArr.length-1)
     }
   });
}
function main(argv){
  readAsFile(argv[0])
}
main(process.argv.slice(2))
