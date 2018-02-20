//命令行接受一个url作为参数，使用http get请求该url，并在响应回调data事件中打印响应信息的字符串
var http = require('http');

http.get(process.argv[2],function(res){
  res.on('data',function(chunk){
    console.log(chunk.toString())
  })
})
