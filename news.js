var fetch = global.nodemodule["node-fetch"];
var rssConverter = global.nodemodule["rss-converter"];
var BitlyClient = global.nodemodule['bitly'].BitlyClient;
var date = new Date();


var news = function news(type, data) {
	(async function () {
	var args = data.args;
	    args.shift();
	var bot = data.facebookapi;
    var msg = data.msgdata;
		var bitly = new BitlyClient('22c59f2d679709228e2cab88b6f2c60308e316d3');
	    var rssNews = {};
        var nowTime = date.getHours();
	    var timeMsg = {};
	
	if (!args[0]) {
		return {
			handler: 'internal',
			data: `Sử dụng: /news <cnn-news/vnex-news> <1/2/3/4/5>`
		}
	}
	
	if (nowTime >= '0'){
		timeMsg = `Chúc bạn đọc báo buổi sáng vui vẻ`;
	}
	
	if (nowTime > '10'){
		timeMsg = `Chúc bạn đọc báo buổi trưa vui vẻ`;
	}
	
	if (nowTime > '15'){
		timeMsg = `Chúc bạn đọc báo buổi chiều vui vẻ`;
	}
	
	if (nowTime > '18'){
		timeMsg = `Chúc bạn đọc báo buổi tối vui vẻ`;
	}
	
	if (nowTime > '20'){
		timeMsg = `Chúc bạn đọc báo buổi đêm vui vẻ. À đi ngủ được rồi nha bé`;
	}
			data.log(`The time is now ${nowTime} and the message is ${timeMsg}`);
	switch (args[0].toLowerCase()) {
		case 'vnex-news':
		rssNews = await rssConverter.toJson('https://vnexpress.net/rss/tin-moi-nhat.rss');
		switch (args[1].toLowerCase()) {
			case '1':
			var number1 = '0';
			var number2 = '1';
			var newsTitle1 = rssNews.items[number1].title;
			var newsTitle2 = rssNews.items[number2].title;
			var newsUrl1 = rssNews.items[number1].link;
			var newsUrl2 = rssNews.items[number2].link;
			var linkNews1 = await bitly.shorten(newsUrl1);
			var linkNews2 = await bitly.shorten(newsUrl2);
			var str = `\r\nVN-EXPRESS NEWS:\r\n- ${newsTitle1}:\r\n ${linkNews1.link}\r\n\r\n- ${newsTitle2}:\r\n ${linkNews2.link}\r\n\r\n • ${timeMsg}`;
			return bot.sendMessage(str, msg.threadID, msg.messageID);
			break;
			case '2':
			var number1 = '2';
			var number2 = '3';
			var newsTitle1 = rssNews.items[number1].title;
			var newsTitle2 = rssNews.items[number2].title;
			var newsUrl1 = rssNews.items[number1].link;
			var newsUrl2 = rssNews.items[number2].link;
			var linkNews1 = await bitly.shorten(newsUrl1);
			var linkNews2 = await bitly.shorten(newsUrl2);
			var str = `\r\nVN-EXPRESS NEWS:\r\n- ${newsTitle1}:\r\n ${linkNews1.link}\r\n\r\n- ${newsTitle2}:\r\n ${linkNews2.link}\r\n\r\n • ${timeMsg}`;
			return bot.sendMessage(str, msg.threadID, msg.messageID);
			break;
			case '3':
			var number1 = '4';
			var number2 = '5';
			var newsTitle1 = rssNews.items[number1].title;
			var newsTitle2 = rssNews.items[number2].title;
			var newsUrl1 = rssNews.items[number1].link;
			var newsUrl2 = rssNews.items[number2].link;
			var linkNews1 = await bitly.shorten(newsUrl1);
			var linkNews2 = await bitly.shorten(newsUrl2);
			var str = `\r\nVN-EXPRESS NEWS:\r\n- ${newsTitle1}:\r\n ${linkNews1.link}\r\n\r\n- ${newsTitle2}:\r\n ${linkNews2.link}\r\n\r\n • ${timeMsg}`;
			return bot.sendMessage(str, msg.threadID, msg.messageID);
			break;
			case '4':
			var number1 = '6';
			var number2 = '7';
			var newsTitle1 = rssNews.items[number1].title;
			var newsTitle2 = rssNews.items[number2].title;
			var newsUrl1 = rssNews.items[number1].link;
			var newsUrl2 = rssNews.items[number2].link;
			var linkNews1 = await bitly.shorten(newsUrl1);
			var linkNews2 = await bitly.shorten(newsUrl2);
			var str = `\r\nVN-EXPRESS NEWS:\r\n- ${newsTitle1}:\r\n ${linkNews1.link}\r\n\r\n- ${newsTitle2}:\r\n ${linkNews2.link}\r\n\r\n • ${timeMsg}`;
			return bot.sendMessage(str, msg.threadID, msg.messageID);
			break;
			case '5':
			var number1 = '8';
			var number2 = '9';
			var newsTitle1 = rssNews.items[number1].title;
			var newsTitle2 = rssNews.items[number2].title;
			var newsUrl1 = rssNews.items[number1].link;
			var newsUrl2 = rssNews.items[number2].link;
			var linkNews1 = await bitly.shorten(newsUrl1);
			var linkNews2 = await bitly.shorten(newsUrl2);
			var str = `\r\nVN-EXPRESS NEWS:\r\n- ${newsTitle1}:\r\n ${linkNews1.link}\r\n\r\n- ${newsTitle2}:\r\n ${linkNews2.link}\r\n\r\n • ${timeMsg}`;
			return bot.sendMessage(str, msg.threadID, msg.messageID);
			break;
		}
		break;		
		case 'cnn-news':
		rssNews = await rssConverter.toJson('http://rss.cnn.com/rss/cnn_world.rss');
		switch (args[1].toLowerCase()) {
			case '1':
			var number1 = '0';
			var number2 = '1';
			var newsTitle1 = rssNews.items[number1].title;
			var newsTitle2 = rssNews.items[number2].title;
			var newsUrl1 = rssNews.items[number1].link;
			var newsUrl2 = rssNews.items[number2].link;
			var linkNews1 = await bitly.shorten(newsUrl1);
			var linkNews2 = await bitly.shorten(newsUrl2);
			var str = `\r\nCNN NEWS:\r\n- ${newsTitle1}:\r\n ${linkNews1.link}\r\n\r\n- ${newsTitle2}:\r\n ${linkNews2.link}\r\n\r\n • ${timeMsg}`;
			return bot.sendMessage(str, msg.threadID, msg.messageID);
			break;
			case '2':
			var number1 = '2';
			var number2 = '3';
			var newsTitle1 = rssNews.items[number1].title;
			var newsTitle2 = rssNews.items[number2].title;
			var newsUrl1 = rssNews.items[number1].link;
			var newsUrl2 = rssNews.items[number2].link;
			var linkNews1 = await bitly.shorten(newsUrl1);
			var linkNews2 = await bitly.shorten(newsUrl2);
			var str = `\r\nCNN NEWS:\r\n- ${newsTitle1}:\r\n ${linkNews1.link}\r\n\r\n- ${newsTitle2}:\r\n ${linkNews2.link}\r\n\r\n • ${timeMsg}`;
			return bot.sendMessage(str, msg.threadID, msg.messageID);
			break;
			case '3':
			var number1 = '4';
			var number2 = '5';
			var newsTitle1 = rssNews.items[number1].title;
			var newsTitle2 = rssNews.items[number2].title;
			var newsUrl1 = rssNews.items[number1].link;
			var newsUrl2 = rssNews.items[number2].link;
			var linkNews1 = await bitly.shorten(newsUrl1);
			var linkNews2 = await bitly.shorten(newsUrl2);
			var str = `\r\nCNN NEWS:\r\n- ${newsTitle1}:\r\n ${linkNews1.link}\r\n\r\n- ${newsTitle2}:\r\n ${linkNews2.link}\r\n\r\n • ${timeMsg}`;
			return bot.sendMessage(str, msg.threadID, msg.messageID);
			break;
			case '4':
			var number1 = '6';
			var number2 = '7';
			var newsTitle1 = rssNews.items[number1].title;
			var newsTitle2 = rssNews.items[number2].title;
			var newsUrl1 = rssNews.items[number1].link;
			var newsUrl2 = rssNews.items[number2].link;
			var linkNews1 = await bitly.shorten(newsUrl1);
			var linkNews2 = await bitly.shorten(newsUrl2);
			var str = `\r\nCNN NEWS:\r\n- ${newsTitle1}:\r\n ${linkNews1.link}\r\n\r\n- ${newsTitle2}:\r\n ${linkNews2.link}\r\n\r\n • ${timeMsg}`;
			return bot.sendMessage(str, msg.threadID, msg.messageID);
			break;
			case '5':
			var number1 = '8';
			var number2 = '9';
			var newsTitle1 = rssNews.items[number1].title;
			var newsTitle2 = rssNews.items[number2].title;
			var newsUrl1 = rssNews.items[number1].link;
			var newsUrl2 = rssNews.items[number2].link;
			var linkNews1 = await bitly.shorten(newsUrl1);
			var linkNews2 = await bitly.shorten(newsUrl2);
			var str = `\r\nCNN NEWS:\r\n- ${newsTitle1}:\r\n ${linkNews1.link}\r\n\r\n- ${newsTitle2}:\r\n ${linkNews2.link}\r\n\r\n • ${timeMsg}`;
			return bot.sendMessage(str, msg.threadID, msg.messageID);
			break;
		}
		break;
	}
		
		
	})().then(function (returndata) {
		data.return(returndata);
	});
}

module.exports = {
	news: news
}
