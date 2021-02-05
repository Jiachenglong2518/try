var Crawler = require("crawler");
var userAgents = require('./userAgent');

var c = new Crawler({
    maxConnections : 10,
    // 这个回调每个爬取到的页面都会触发
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $默认使用Cheerio
            // 这是为服务端设计的轻量级jQuery核心实现
            console.log(res.body);
        }
        done();
    }
});

// 爬取一个URL，使用默认的callback

c.queue('http://zq.win007.com/jsData/Count/2019-2020/teamTech_36.js');

// 爬取URL列表
// c.queue(['http://www.google.com/','http://www.yahoo.com']);
var Season = '2019-2020';
var LeagueId = 36;
var win007 = "http://zq.win007.com";
// 爬取页面，自定义callback和参数
c.queue([{
    uri: 'http://parishackers.org/',
    jQuery: false,
    'Host': 'zq.win007.com',
    "Referer": win007 + "/cn/TechList/" + Season + "/" + LeagueId + ".html",
    "Content-Type": "application/json",
    "User-Agent": userAgents[parseInt(Math.random() * userAgents.length)],
    "Accept": "application/javascript",
    // 覆盖全局的callback
    callback: function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            console.log('Grabbed', res.body.length, 'bytes');
        }
        done();
    }
}]);












