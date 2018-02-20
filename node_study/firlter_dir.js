//命令行中输入一个目录的路径和某个文件后缀名，并打印出符合该后缀名的文件列表
var fs = require('fs');
var path = require('path');

function readDir(src,arg2){
   fs.readdir(src,function(err,data){
     if(err){

     } else {
        data.filter(function(file){
          if(path.extname(file) == '.'+arg2){
            console.log(file)
          }
        })
     }
   });
}
function main(argv){
  readDir(argv[0],argv[1])
}
main(process.argv.slice(2))
