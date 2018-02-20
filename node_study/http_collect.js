//命令行接受3个url作为参数，并打印出所有的返回值
//这里涉及到异步请求url，计算回调函数的调用次数是解决此问题的关键
//使用第三方包bl来处理返回的数据流
var http = require('http')
var bl = require('bl')
var urls=process.argv.slice(2)
var out = []
var done= 0

for (var i = 0; i < urls.length; i++) {
    http.get(urls[i],function(index){
        return function(response){
            response.pipe(bl(function(err,data){
                out[index] = data.length
                done+=1
                if (done==3){
                    for (var i = 0; i < out.length; i++) {
                        console.log(out[i])
                    }
                }
            }))
        }
    }(i))
}
