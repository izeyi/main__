$(function(){
select_client_id = 'all';
$("#client_list").change(function(){select_client_id = $("#client_list option:selected").attr("value")});

$("textarea").on("keydown", function(e) {
if(e.keyCode === 13 && !e.ctrlKey) {e.preventDefault();onSubmit();return false;}// 按enter键自动提交
if(e.keyCode === 13 && e.ctrlKey) {$(this).val(function(i,val){return val + "\n";})}// 按ctrl+enter组合键换行
});

connect();//开启
});


var arr = [];//
var count = 0;//总人数
var newMsg = 0;
// 连接服务端
function connect() {
ws = new WebSocket("ws://chat.namenb.com:7272");// 创建websocket
ws.onopen = onopen;// 当socket连接打开时，输入用户名
ws.onmessage = onmessage;// 当有消息时根据消息类型显示不同信息
ws.onclose = function() {console.log("连接关闭，定时重连");connect()};
ws.onerror = function() {console.log("出现错误")};
}

// 连接建立时发送登录信息
function onopen(){
if(!userinfo || userinfo=='null'){userinfo = '测试员';}
var login_data = '{"type":"login","client_name":"'+encodeURIComponent(EN_JSON(userinfo))+'","room_id":"'+room_id+'"}';// 登录
console.log("websocket握手成功，发送登录数据:"+decodeURIComponent(login_data));
ws.send(login_data);
}

// 服务端发来消息时
function onmessage(e){
console.log(decodeURIComponent(e.data));
var data = JSON.parse(e.data);
switch(data['type']){
case 'ping':// 服务端ping客户端
ws.send('{"type":"pong"}');
break;
case 'login':// 登录 更新用户列表
// say(data['client_id'],data['client_name'],DE_JSON(decodeURIComponent(data['client_name']))["nickname"]+' 进入了魔方云!',data['time']);
$("#dialog").append('<div class="message_item default"><div class="content"><div class="msg_userinfo"><span class="msg_time">'+data['time']+' '+DE_JSON(decodeURIComponent(data['client_name']))["nickname"]+' 进入了魔方云!</span></div></div><div style="clear:both;"></div></div>');
if(data['client_list']){client_list = data['client_list'];}else{client_list[data['client_id']] = data['client_name'];}
flush_client_list();
break;
case 'say':// 发言
newMsg ++;
say(data['from_client_id'],data['from_client_name'],data['content'], data['time']);
$('#newMsg').html(newMsg);
break;
case 'logout':// 用户退出 更新用户列表
// say(data['from_client_id'],data['from_client_name'],DE_JSON(decodeURIComponent(data['from_client_name']))["nickname"]+' 退出了魔方!',data['time']);
// msg(DE_JSON(decodeURIComponent(data['from_client_name']))["nickname"]+' 退出了魔方!')
delete client_list[data['from_client_id']];
flush_client_list();
}
}
var errorimg = 'static/images/head.png';
// 刷新用户列表框
function flush_client_list(){
console.log(DE_JSON(decodeURIComponent(client_list)))
var client_list_slelect = $("#client_list");
var userlist_window = $("#userlist");
client_list_slelect.empty();
client_list_slelect.append('<option value="all" id="cli_all">所有人</option>');
userlist_window.empty();
// userlist_window.append('<h4>在线用户</h4><ul class="scroll-content">');
for(var p in client_list){
	// arr.push(decodeURIComponent(client_list[p]));
	var o = {};o[p] = decodeURIComponent(client_list[p]); arr.push(o);
	if(Object.prototype.hasOwnProperty.call(client_list,p)){count++}
	userlist_window.append('<li class="chat_item" onclick="Enter_chat(this)" id="'+p+'"><div class="avatar"><img class="img" src="'+DE_JSON(decodeURIComponent(client_list[p]))["face"]+'" onerror="this.src=\'static/images/head.png\'"></div><div class="info"><h3 class="nickname"><span class="nickname_text">'+DE_JSON(decodeURIComponent(client_list[p]))["nickname"]+'</span></h3><p class="msg"><span class="new_msg" id="new_msg">'+DE_JSON(decodeURIComponent(client_list[p]))["position"]+'</span></p></div></li>');
	client_list_slelect.append('<option value="'+p+'">'+DE_JSON(decodeURIComponent(client_list[p]))["nickname"]+'</option>');
}
console.log(count)
console.log(arr);

$("#client_list").val(select_client_id);
$("#tit_count").html("("+arr.length+")");

arr= [];
count = 0;
}

// 发言
function say(from_client_id, from_client_name, content, time){
var contentobj = DE_JSON(decodeURIComponent(content));

console.log(from_client_id)
console.log(DE_JSON(decodeURIComponent(from_client_name)))
console.log(contentobj)
console.log(content)

switch(contentobj['type']){// 服务端ping客户端
case 'tts'://播报消息
$("#dialog").append('<div class="message_item"><img class="avatar" src="'+DE_JSON(decodeURIComponent(from_client_name))["face"]+'"/><div class="content"><div class="msg_userinfo"><h4 class="msg_nickname">'+DE_JSON(decodeURIComponent(from_client_name))["nickname"] +' </h4> <span class="msg_time">'+ time+'</span></div><div class="bubble bubble_default left"><div class="bubble_cont"><p class="triangle-isosceles top plain">'+contentobj["details"]+'</p></div></div></div><div style="clear:both;"></div></div>');
MsgTts(contentobj["details"]);//语音广播
break;
case 'text'://文本消息
console.log(userinfo["uid"])
console.log(DE_JSON(decodeURIComponent(from_client_name))["uid"])
if(userinfo["uid"] == DE_JSON(decodeURIComponent(from_client_name))["uid"]){
$("#dialog").append('<div class="message_item me"><img class="avatar" src="'+DE_JSON(decodeURIComponent(from_client_name))["face"]+'"/><div class="content"><div class="msg_userinfo"><h4 class="msg_nickname">'+DE_JSON(decodeURIComponent(from_client_name))["nickname"] +' </h4> <span class="msg_time">'+ time+'</span></div><div class="bubble bubble_default right"><div class="bubble_cont"><p class="triangle-isosceles top plain">'+contentobj["details"]+'</p></div></div></div><div style="clear:both;"></div></div>');}else{
$("#dialog").append('<div class="message_item"><img class="avatar" src="'+DE_JSON(decodeURIComponent(from_client_name))["face"]+'"/><div class="content"><div class="msg_userinfo"><h4 class="msg_nickname">'+DE_JSON(decodeURIComponent(from_client_name))["nickname"] +' </h4> <span class="msg_time">'+ time+'</span></div><div class="bubble bubble_default left"><div class="bubble_cont"><p class="triangle-isosceles top plain">'+contentobj["details"]+'</p></div></div></div><div style="clear:both;"></div></div>');
}
break;
case 'barrager':
$('body').barrager({'img':DE_JSON(decodeURIComponent(from_client_name))["face"],'speed':20,'info': DE_JSON(decodeURIComponent(from_client_name))["nickname"] + ':' + contentobj["details"]+'!'});//弹幕
break;
case 'voice'://发送语音

break;
case 'mute'://指定关麦克风

break;
case 'discam'://关画面

break;
default:
if(userinfo["uid"] == DE_JSON(decodeURIComponent(from_client_name))["uid"]){
$("#dialog").append('<div class="message_item me"><img class="avatar" src="'+DE_JSON(decodeURIComponent(from_client_name))["face"]+'"/><div class="content"><div class="msg_userinfo"><h4 class="msg_nickname">'+DE_JSON(decodeURIComponent(from_client_name))["nickname"] +' </h4> <span class="msg_time">'+ time+'</span></div><div class="bubble bubble_default right"><div class="bubble_cont"><p class="triangle-isosceles top plain">'+decodeURIComponent(content)+'</p></div></div></div><div style="clear:both;"></div></div>');}else{
$("#dialog").append('<div class="message_item"><img class="avatar" src="'+DE_JSON(decodeURIComponent(from_client_name))["face"]+'"/><div class="content"><div class="msg_userinfo"><h4 class="msg_nickname">'+DE_JSON(decodeURIComponent(from_client_name))["nickname"] +' </h4> <span class="msg_time">'+ time+'</span></div><div class="bubble bubble_default left"><div class="bubble_cont"><p class="triangle-isosceles top plain">'+decodeURIComponent(content)+'</p></div></div></div><div style="clear:both;"></div></div>');}

}

document.getElementById('dialog').scrollTop=document.getElementById('dialog').scrollHeight;
}


// 提交对话
function onSubmit() {
var input = document.getElementById("textarea");
if(!input.value){return msg('不能发送空消息！');}
var to_client_id = $("#client_list option:selected").attr("value");
var to_client_name = $("#client_list option:selected").text();
ws.send('{"type":"say","to_client_id":"'+to_client_id+'","to_client_name":"'+to_client_name+'","content":"'+encodeURIComponent(input.value)+'"}');
input.value = "";
input.focus();
}