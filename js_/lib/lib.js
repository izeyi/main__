/*
* lib.js
*
* @Author: TongZhou
* @Date:   2020-02-28 15:55:45
* @Last Modified by:   TongZhou
* @Last Modified time: 2020-03-03 15:32:35
* @email: 993234530@qq.com
* @des: ---
*/
var order = {
	phone:'',
	code:''
}
/**
 * [serialize 表单序列化]
 * @Author   TongZhou
 * @DateTime 2020-03-03T13:32:15+0800
 * @param    {[str]} form [formId]
 * @return   {[obj]}      [form表单的Json数据]
 */
function serialize(form) {//
	var form_arr = {};
	for (var i = 0, len = form.elements.length; i < len; i++) {
		var input = form.elements[i]
		switch (input.type) {
			case 'select-one':
			case 'select-multiple':
				if (input.name.length) { //只取有name的
					var options = form.elements[i].options;
					for (var j = 0, option_len = options.length; j < option_len; j++) {
						var option = options[j];
						if (option.selected) {
							var option_value = '';
							if (option.hasAttribute) {
								option_value = option.hasAttribute('value') ? option.value : option.text;
							} else {
								option_value = option.attributes['value'].specified ? option.value : option.text;
							}
							form_arr[input.name]=input.value;
						}
					}
				}
				break;
			case undefined:
			case 'button':
			case 'submit':
			case 'file':
			case 'reset':
			break;
			case 'checkbox':
			case 'radio':
				if (!input.checked)break; //如果未选中，就break，选中了就执行default
			default:
				if (input.name.length)form_arr[input.name]=input.value;
				//form_arr.push(encodeURIComponent(input.name) + '=' + encodeURIComponent(input.value));
		}
	}
	//return form_arr.join('&');
	return form_arr;
}

/**
 * [countdown 发送验证码倒计时]
 * @Author   TongZhou
 * @DateTime 2020-03-03T14:38:58+0800
 * @param    {[type]} elem [description]
 * @return   {[type]}      [description]
 */
function countdown(elem){
	elem.data("sendFlag",true);
	var i = 60;
	elem.text(i + "秒后重发");
	var timer = setInterval(function(){
	    elem.text(--i + "秒后重发");
	    elem.css('cursor','not-allowed')
	    if(i == 0){
	        clearInterval(timer);
	        elem.data("sendFlag",false);
	        elem.text("重新发送");
	        elem.css('cursor','pointer')
	    }
	},1000);
}
function msg(v) {layer.msg(v);}
//语音播报 TTS
function MsgTts(str,token){
httpx.get("http://api.greatorange.cn/box/altts/",{"token":token}, function(data) {
var audio = document.createElement('audio');
audio.autoplay="autoplay";
audio.src='https://nls-gateway.cn-shanghai.aliyuncs.com/stream/v1/tts?appkey=tiFkz04PcrulyOVU&token='+JSON.parse(data)["token"]+'&text='+str+'&format=mp3&sample_rate=16000';
});
}
function openwindow (tit,url,id){layer.open({type:2,id:id,title:tit,shadeClose:false,shade:false,area: '1366px',maxmin: true,content: url});}
function openwindowA(tit,url,id){layer.open({type:2,id:id,title:tit,shadeClose:false,shade:false,area: ['1280px','800px'],maxmin: true,content: url});}
function openwindowT(tit,url,id){layer.open({type:2,id:id,title:tit,shadeClose:false,shade:false,area: ['780px' ,'800px'],maxmin: true,content: url});}
function openwindowD(tit,url,id){layer.open({type:2,id:id,title:tit,shadeClose:false,shade:false,area: ['860px' ,'726px'],maxmin: true,content: url});}
function openwindowR(tit,url,id){layer.open({type:2,id:id,title:tit,shadeClose:false,shade:false,area: ['1366px','870px'],content: url});}
//Pdf阅读器
function openwindowP(tit,url,id){layer.open({type: 2,id:id,title: tit,shadeClose: false,maxmin: true,area: ['1366px', '870px'],content: 'http://box.chinavcr.com/tcbox/PDFViewe/web/?file='+url});}

/**
 * [checkvalue 必填验证]
 * @Author   TongZhou
 * @DateTime 2020-03-03T14:39:48+0800
 * @param    {[type]}                 value [description]
 * @param    {[type]}                 check [description]
 * @return   {[type]}                       [description]
 */
function checkvalue(value,check) {
	var res={};
	res["success"]=true;
	for(key in check){
		if (typeof(value[key]) == "undefined" ||  value[key]==""){
			//return(key+':'+check[key]);
			res["success"]=false;
			res["info"]= "请填写"+check[key];
		}
	}
	return res;
}


/**
 * [isIphoneX 是否为IphoneX]
 * @Author   TongZhou
 * @DateTime 2020-03-03T14:40:20+0800
 * @param    {[type]}   [description]
 * @return   {Boolean}  [description]
 */
function isIphoneX(){if(/iphone/gi.test(navigator.userAgent) && (screen.height == 812 && screen.width == 375))console.log('垃圾X')}

/**
 * [getUrlParam 获取url参数（支持中文）]
 * @Author   TongZhou
 * @DateTime 2020-03-03T14:41:20+0800
 * @param    {[type]}                 key [description]
 * @return   {[type]}                     [description]
 */
function getUrlParam(key) {
// 获取参数
var url = window.location.search;
// 正则筛选地址栏
var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
// 匹配目标参数
var result = url.substr(1).match(reg);
 //返回参数值
 return result ? decodeURIComponent(result[2]) : null;
}


/**
 * [vmup vue解析数组]
 * @Author   TongZhou
 * @DateTime 2020-03-03
 * @param    {[type]}   vm    [description]
 * @param    {[type]}   jdata [description]
 * @return   {[type]}         [description]
 */
function vmup(vm, jdata) {
	for(var o in jdata) {
		Vue.set(vm, o, jdata[o]);
	}}
/**
 * [add 加减input数值]
 * @Author   TongZhou
 * @DateTime 2020-03-03
 * @param    {[type]}   id [description]
 */
function add(id) {
	var a = document.getElementById(id).value;
	a++;
	document.getElementById(id).value = a;
}
function sub(id) {
	var b = document.getElementById(id).value;
	b--;
	document.getElementById(id).value = b;
}


/**
 * [setTab 标题切换内容]
 * @Author   TongZhou
 * @DateTime 2020-03-03
 * @param    {[type]}   cursel [description]
 * @param    {[type]}   total  [description]
 * @param    {[type]}   name   [description]
 */
function setTab(cursel, total, name) {
	for(i = 1; i <= total; i++) {
		var con = document.getElementById(name + "tab_" + i);
		console.log(con)
		con.style.display = i == cursel ? "block" : "none";
//con.style.display=i==cursel?"block":"none";
}
}



/**
 * [pushtoken 跨域推送TOKEN]
 * @Author   TongZhou
 * @DateTime 2020-03-03
 * @param    {[type]}   arr       [description]
 * @param    {[type]}   tokendata [description]
 * @return   {[type]}             [description]
 */
function pushtoken(arr,tokendata) {
	for(var i= 0;i<arr.length;i++){
		document.write('<iframe style="display:none;" src="'+arr[i]+'?udata='+tokendata+'&time='+(new Date()).valueOf()+'"></iframe>');
	}
}
/**
 * [Base64 Base64转码]
 * @Author   TongZhou
 * @DateTime 2020-03-03
 */
function Base64(){
	_keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	//编码
	this.encode = function (input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;
		input = _utf8_encode(input);
		while (i < input.length) {
			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);
			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;
			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}
			output = output +
			_keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
			_keyStr.charAt(enc3) + _keyStr.charAt(enc4);
		}
		return output;
	}
	//解码
	this.decode = function (input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
		while (i < input.length) {
			enc1 = _keyStr.indexOf(input.charAt(i++));
			enc2 = _keyStr.indexOf(input.charAt(i++));
			enc3 = _keyStr.indexOf(input.charAt(i++));
			enc4 = _keyStr.indexOf(input.charAt(i++));
			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;
			output = output + String.fromCharCode(chr1);
			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}
		}
		output = _utf8_decode(output);
		return output;
	}

	// private method for UTF-8 encoding  UTF-8编码
	_utf8_encode = function (string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";
		for (var n = 0; n < string.length; n++) {
			var c = string.charCodeAt(n);
			if (c < 128) {
				utftext += String.fromCharCode(c);
			} else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			} else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}
		}

		return utftext;
	}
	//UTF-8解码
	_utf8_decode = function (utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;
		while ( i < utftext.length ) {
			c = utftext.charCodeAt(i);
			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			} else if((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			} else {
				c2 = utftext.charCodeAt(i+1);
				c3 = utftext.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}
		}
		return string;
	}
}

//var base = new Base64();
//AA=base.encode("我是谁");
//base.decode(AA);



/**
 * [isJSON 是否为json对象]
 * @Author   TongZhou
 * @DateTime 2020-03-03
 * @param    {[type]}   str [description]
 * @return   {Boolean}      [description]
 */
function isJSON(str) {
	if (typeof str == 'string') {
		try {
			var obj=JSON.parse(str);
			if(typeof obj == 'object' && obj ){return true;}else{return false;}
		} catch(e) {
			console.log('error：'+str+'!!!'+e);
			return false;
		}
	}
	console.log('It is not a string!')
}
/**
 * [EN_JSON 将json对象转换为Json字符串]
 * @Author   TongZhou
 * @DateTime 2020-03-03
 * @param    {[type]}   obj [需要转换的json对象]
 * @return   {[str]}        [转换后的json字符串]
 */
function EN_JSON(obj) {return JSON.stringify(obj)}
/**
 * [DE_JSON ]
 * @Author   TongZhou
 * @DateTime 2020-03-03
 * @param    {[type]}   str) {if(isJSON(str)){return JSON.parse(str)}else{alert("非对象!" [description]
 */
function DE_JSON(str) {if(isJSON(str)){return JSON.parse(str)}else{alert("非对象!")}}


//数组插入下拉菜单
function getArray(str){return str.split("||")}

//console.log(getArray("{$Info(9)$}"));
//var seletarr =getArray("{$Info(9)$}");
//var obj = document.getElementById("kechengse");
//for (var i = 0; i < seletarr.length; i++) {
//obj.options.add(new Option(seletarr[i],seletarr[i]));
//}

/**
 * [extend 合并对象]
 * @Author   TongZhou
 * @DateTime 2020-03-03
 * @param    {[type]}   target  [description]
 * @param    {[type]}   source) {for         (var obj in source [description]
 * @return   {[type]}           [description]
 */
function extend(target, source) {for (var obj in source){target[obj] = source[obj]} return target}

// 测试
// var a = {a: 1, b: 2};
// var b = {a: 2, b: 3, c: 4};
// var c = extend(a, b);
// console.log(c);

// //搜索json
// var edata={"data":[
// {"kk":"pp","kk1":"pp1"},
// {"kk":"pp1"},
// {"kk":"pp"}
// ]};


/**
 * [getarrdata 搜索json]
 * @Author   TongZhou
 * @DateTime 2020-03-03
 * @param    {[type]}   arr   [description]
 * @param    {[type]}   key   [description]
 * @param    {[type]}   value [description]
 * @return   {[type]}         [description]
 */
function getarrdata(arr,key,value){
	var res=[];for (var i=0;i<arr.length;i++){if(arr[i][key]==value)res.push(arr[i])}return res
}

// var aa=getarrdata(edata["data"],"kk","pp");
// console.log(edata["data"]);
// console.log(getarrdata(edata["data"],"kk","pp"));
// console.log(getarrdata(aa,"kk1","pp1"));


// var tj= {"kk":"pp","kk1":"pp1"};//搜索条件

/**
 * [getdata 多条件搜索json]
 * @Author   TongZhou
 * @DateTime 2020-03-03
 * @param    {[type]}   arr [description]
 * @param    {[type]}   obj [description]
 * @return   {[type]}       [description]
 */
function getdata(arr,obj){
	var res=arr;for(key in obj){res=getarrdata(res,key,obj[key]);}return res
}
// console.log(getdata(edata["data"],tj));




/**
 * [imgwidth 响应式图片自动缩放]
 * @Author   TongZhou
 * @DateTime 2020-03-03
 * @param    {[type]}   id [description]
 * @return   {[type]}      [description]
 */
function imgwidth(id) {
	var wrap=document.getElementById(id);
	var imgs=wrap.getElementsByTagName('img');
	console.log(imgs.length);
	for(var i in imgs){
		imgs[i].index=i;
		if(imgs[i].width > window.screen.width){
			imgs[i].width=window.screen.width*0.9;
			imgs[i].height=imgs[i].naturalHeight*((window.screen.width*0.9)/imgs[i].naturalWidth);	
		}
	}
}

// window.onload = function () {
// imgwidth("divid");
// };

/**
 * [diff 判断2对象是否相等]
 * @Author   TongZhou
 * @DateTime 2020-03-03
 * @param    {[type]}   obj1 [description]
 * @param    {[type]}   obj2 [description]
 * @return   {[type]}        [description]
 */
function diff(obj1,obj2){
	var o1 = obj1 instanceof Object;
	var o2 = obj2 instanceof Object;
	if(!o1 || !o2){return obj1 === obj2}/*  判断不是对象  */
	if(Object.keys(obj1).length !== Object.keys(obj2).length){
		return false;
		//Object.keys() 返回一个由对象的自身可枚举属性(key值)组成的数组,
		//例如：数组返回下表：let arr = ["a", "b", "c"];
		//console.log(Object.keys(arr))->0,1,2;
	}
	for(var attr in obj1){
		var t1 = obj1[attr] instanceof Object;
		var t2 = obj2[attr] instanceof Object;
		if(t1 && t2){
			return diff(obj1[attr],obj2[attr]);
		}else if(obj1[attr] !== obj2[attr]){
			return false;
		}
	}
	return true;
}


/**
 * [openvideo video.js播放器]
 * @Author   TongZhou
 * @DateTime 2020-03-03
 * @param    {[type]}   url   [description]
 * @param    {[type]}   title [description]
 * @return   {[type]}         [description]
 */
function openvideo(url,title){//
	store.set('mlog','{"mod":"player","info":"播放了视频：'+title+'"}');

	var myPlayer = videojs('my-video');
	videojs("my-video").ready(function(){var myPlayer = this;});
	myPlayer.width(864);
	myPlayer.src({type: "video/mp4", src:url});
	layer.open({
		type: 1,
		title: title,
		maxmin: false,
		closeBtn: 1,
		resize:false,
		area: '864px',
		skin: 'layui-layer-nobg', //没有背景色
		shadeClose: false,
		shade: false,
		content: $('#player'),
		cancel: function(){
			myPlayer.pause();
		},
		full: function(){
			myPlayer.size(640,480);
			myPlayer.width(document.body.clientWidth);
		},
		restore: function(){
			myPlayer.size(640,480);
			myPlayer.width(864);
		}
	});
	myPlayer.play();
}

/**
 * [open_video 腾讯云播放器]
 * @Author   TongZhou
 * @DateTime 2020-03-03
 * @param    {[type]}   _vid  [description]
 * @param    {[type]}   title [description]
 * @return   {[type]}         [description]
 */
/*function open_video(_vid,title){//
	store.set('mlog','{"mod":"player","info":"播放了视频：'+title+'"}');
	var myPlayer = videojs('my-video');
	videojs("my-video").ready(function(){var myPlayer = this;});
	myPlayer.width(864);
	httpx.post('http://api.greatorange.cn/box/videososs/play/',{"token":_token,"videoid":_vid},function (data){
		console.log(JSON.parse(data).PlayInfoList.PlayInfo[0].PlayURL)
		console.log(JSON.parse(data))
		myPlayer.src({type: "video/mp4", src:JSON.parse(data).PlayInfoList.PlayInfo[0].PlayURL});
		layer.open({
			type: 1,
			title: title,
			maxmin: false,
			closeBtn: 1,
			resize:false,
			area: '864px',
			skin: 'layui-layer-nobg', //没有背景色
			shadeClose: false,
			shade: false,
			content: $('#player'),
			cancel: function(){
				myPlayer.pause();
			},
			full: function(){
				myPlayer.size(640,480);
				myPlayer.width(document.body.clientWidth);
			},
			restore: function(){
				myPlayer.size(640,480);
				myPlayer.width(864);
			}
		});
		myPlayer.play();
	})
}*/

/**
 * [open_video Aliplayer播放器]
 * @Author   TongZhou
 * @DateTime 2020-03-03
 * @param    {[type]}   _vid  [description]
 * @param    {[type]}   title [description]
 * @return   {[type]}         [description]
 */
function open_video(_vid,title){
	var playbackurl = {};
	var _token = store.get('userinfo').token;
	httpx.post('http://api.greatorange.cn/box/videososs/play/',{"token":_token,"videoid":_vid},function (data){
		var _data = JSON.parse(data);
		var _PlayInfo = _data.PlayInfoList.PlayInfo;
		for(var p in _PlayInfo)playbackurl[_PlayInfo[p].Definition] = _PlayInfo[p].PlayURL;
		var player = new Aliplayer({
		    id: "player", width: "100%", height: "486px", autoplay: false, preload: false, language: "zh-cn", isLive: false,
		    source:JSON.stringify(playbackurl),
		    cover: _data.VideoBase.CoverURL
		},function (player) {console.log("播放器创建成功")});
		layer.open({
			type: 1, title: title, maxmin: false, closeBtn: 1, resize:false, area: '864px', skin: 'layui-layer-nobg', shadeClose: false, shade: false, content: $('#player'),
			cancel: function(){ //取消
				player.dispose();//销毁
			},
			full: function(){},
			restore: function(){}
		});
		player.play();
	})
}

/*
 * 获取元素移动的方向
 * @param  $element  元素的jQuery对象
 * @param  event     事件对象
 * @return direction 返回一个数字：0:上，1:右，2:下，3:左
 **/
function getDirection($element, event) {
    var w = $element.width(),
        h = $element.height(),
        x = (event.pageX - $element.offset().left - (w / 2)) * (w > h ? (h / w) : 1),
        y = (event.pageY - $element.offset().top - (h / 2)) * (h > w ? (w / h) : 1),
        direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;

    return direction;
}

$('#content').on('mouseenter', function(event){
    console.log( 'enter: '+ getDirection($(this), event) );
}).on('mouseleave', function(event){
    console.log( 'leave: '+getDirection($(this), event) );
})


//格式化日期
Date.prototype.format = function (fmt) {
    var o = {
        "y+": this.getFullYear(),
        "M+": this.getMonth() + 1,               //月份
        "d+": this.getDate(),                    //日
        "h+": this.getHours(),                   //小时
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S+": this.getMilliseconds()             //毫秒
    };
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)){
	        if(k == "y+"){
	            fmt = fmt.replace(RegExp.$1, ("" + o[k]).substr(4 - RegExp.$1.length));
	        }else if(k=="S+"){
	            var lens = RegExp.$1.length;
	            lens = lens==1?3:lens;
	            fmt = fmt.replace(RegExp.$1, ("00" + o[k]).substr(("" + o[k]).length - 1,lens));
	        }else{
	            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	        }
        }
    }
    return fmt;
}

var date = new Date();
console.log(date.format("yyyy年MM月dd日 hh:mm:ss.S")); //输出: 2016年04月01日 10:41:08.133
console.log(date.format("yyyy-MM-dd hh:mm:ss")); //输出: 2016-04-01 10:41:08
console.log(date.format("yy-MM-dd hh:mm:ss")); //输出: 16-04-01 10:41:08
console.log(date.format("yy-M-d hh:mm:ss")); //输出: 16-4-1 10:41:08