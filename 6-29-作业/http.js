/*
 * 这些页面 有几个请求
 * 3个页面请求
 * 1个图片请求
 * 共4个请求
 *
 * */
var http = require('http');
var fs = require('fs');
// 创建服务

http.createServer(function (req, res) {
    var url = req.url;
    switch (url) {
        case "/index.html": // 处理 index.html的请求
         fs.readFile("zuoye/index.html","utf-8",function (err, data) {
             if (err){
                 console.log("读取失败");
                 console.log(err)
             }else {
                 res.writeHead(200,{"content-type":"text/html;charset=utf8"})
                 res.end(data)
             }
         })
            break;
        case "/erji.html": // 处理 log.html的请求

            fs.readFile("zuoye/erji.html","utf-8",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"content-type":"text/html;charset=utf8"})
                    res.end(data)
                }
            })


            break;
            
             case "/index.css": // 处理 log.html的请求

            fs.readFile("zuoye/index.css","utf-8",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"content-type":"text/css;charset=utf8"})
                    res.end(data)
                }
            })


            break;
            
            
             case "/index.js": // 处理 log.html的请求

            fs.readFile("zuoye/index.js","utf-8",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"content-type":"text/javascript;charset=utf8"})
                    res.end(data)
                }
            })


            break;
        case "/img.html": // 处理 img.html的请求
            fs.readFile("zuoye/img.html","utf-8",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"content-type":"text/html;charset=utf8"})
                    res.end(data)
                }
            })
            break;
        case "/050C00005944D6ADADC0B05BFF079404.jpg":// 处理图片的请求

            fs.readFile("zuoye/050C00005944D6ADADC0B05BFF079404.jpg",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    console.log(data)

                    res.writeHead(200,{"content-type": "image/jpeg;charset=utf8"})
                    res.end(data)
                }
            })
            break
        default: //其他请求
            res.end("404 没有找到此内容")
    }
}).listen(2080);
console.log("localhost:2080")





