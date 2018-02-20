//命令行中输入一个目录的路径和某个文件后缀名，并打印出符合该后缀名的文件列表
//使用异步IO和两个文件来解决此问题。必须使用模块的形式。
//此模块的使用实例是module_use.js
var fs = require('fs')
     var path = require('path')

     module.exports = function (dir, filterStr, callback) {

       fs.readdir(dir, function (err, list) {
         if (err){
           return callback(err)
         } else {
           list = list.filter(function (file) {
             return path.extname(file) === '.' + filterStr

           })
             callback(null, list)
         }


       })
     }
