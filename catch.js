var http = require('http') // Node.js提供了http模块，用于搭建HTTP服务端和客户端
// var url = 'http://zq.win007.com/cn/SubLeague/15.html' //输入任何网址都可以
var url = 'http://info.jihai8.com/' //输入任何网址都可以
var cheerio = require('cheerio') // 抓取页面模块，为服务器特别定制的，快速、灵活、实施的jQuery核心实现
var fs = require('fs') // 抓取页面模块，为服务器特别定制的，快速、灵活、实施的jQuery核心实现
const koaRequest = require('koa2-request');

function get_catch(argument) {
  var html=''
  var res_data = '';
	http.get(url,function(res){  //发送get请求
	  res.on('data',function(data){
	    html += data  //字符串的拼接
	  })
	  res.on('end',function(data){
	  	// data = filterChapters(html);
	  	res_data = JSON.stringify(data);
	  	console.log(res_data,'f_re');
	  })
	}).on('error',function(){
	  console.log('获取资源出错！')
	})
	console.log(res_data,'out')
	return 'test1'
}

function filterChapters(html) {
  var $ = cheerio.load(html)  // 加载需要的html，然后就可以愉快地使用类似jQuery的语法了
  var chapters = $('.match-li')  //在html里寻找需要的资源的class
  var courseData = [] // 创建一个数组，用来保存资源
  chapters.each(function(item, index) {  //遍历我们的html文档
      var chapter = $(this)
      var nick_name = $(this).find('.name').text();
      var time = $(this).find('.time').text();
      courseData.push({
        nick_name: nick_name,
        time:time,
      })
  })
  return courseData //返回需要的资源
}
get_catch()
// http.createServer(function (request, response) {
// 		var res_text = '';
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     res_text = get_catch();
//     console.log('====');
//     console.log(res_text,'re');
//     // 发送响应数据 "Hello World"
//     response.end(res_text);
// }).listen(8888)

// let res = koaRequest({
//     url: url,
//     method: 'get',
// });
// console.log(res, 'res');



// let dataController = {
//     async getleaguelist(ctx, next) {
//       let lng = ctx.query.lng;
//       let res = await koaRequest({
//           url: url,
//           method: 'get'
//       });
//       ctx.body = JSON.parse(res.body);
//       console.log(res.body)
//     },
// }







