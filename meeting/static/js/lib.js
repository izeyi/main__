/**/

var sc = 0, _pass,audiodata = [],videodata = [],video_ = 1,audio_ = 1,layerOpen,
pushApi = globalApi_+"/box/push/";
/**/
var audioSelect = document.querySelector('select#audioSource');
var videoSelect = document.querySelector('select#videoSource');
var pushApi = globalApi_+"/box/push/";
var _user = store.get('userinfo');
var _gid = _user.userinfo.gid;
var _uid = _user.userinfo.uid;
var _index = parent.layer.getFrameIndex(window.name);
if(!AgoraRTC.checkSystemRequirements())alert("Your browser does not support WebRTC!")
var AppId = "";
var ChannelId = getUrlParam('roomId')+_gid;//_gid
// console.log(ChannelId)
window.onload = function () {
httpx.get(globalApi_+"/box/rtc/oauth/",{'token':_user.token},function(data){
var _data = JSON.parse(data);
if(_data.success)AppId=_data["AppId"];
join();
getDevices();
})
}//初始化




var client, localStream, camera, microphone;
function join() {
  console.log("Init AgoraRTC client with App ID: " + AppId);

  var channel_key = null;

  client = AgoraRTC.createClient({mode: 'live'});
  client.init(AppId, function () {
    console.log("AgoraRTC client initialized");
    client.join(channel_key, ChannelId, null, function(uid) {
      console.log("User " + uid + " join channel successfully");

      camera = videoSource.value;
      microphone = audioSource.value;
      localStream = AgoraRTC.createStream({streamID:uid,audio:true,cameraId:camera,microphoneId:microphone,video:document.getElementById("video").checked,screen:false});
      if (document.getElementById("video").checked) {localStream.setVideoProfile('720p_3');}
      localStream.on("accessAllowed", function() {console.log("accessAllowed");});// The user has granted access to the camera and mic.
      localStream.on("accessDenied", function() {console.log("accessDenied");});// The user has denied access to the camera and mic.
      localStream.init(function() {
        localStream.play('agora_local');
        client.publish(localStream, function (err) {console.log("Publish local stream error: " + err);});
        client.on('stream-published', function (evt) {console.log("Publish local stream successfully");});
        console.log("getUserMedia successfully");
      }, function (err) {
       console.log("getUserMedia failed", err);
      });


    }, function(err) {
      console.log("Join channel failed", err);});
  }, function (err) {
    console.log("AgoraRTC client init failed", err);
  });

  channelKey = "";
  client.on('error', function(err) {
    console.log("Got error msg:", err.reason);
    if (err.reason === 'DYNAMIC_KEY_TIMEOUT') {
      client.renewChannelKey(channelKey, function(){
        console.log("Renew channel key successfully");
      }, function(err){
        console.log("Renew channel key failed: ", err);
      });
    }
  });


  client.on('stream-added', function (evt) {
    var stream = evt.stream;
    console.log("New stream added: " + stream.getId());
    console.log("Subscribe ", stream);
    client.subscribe(stream, function (err) {
      console.log("Subscribe stream failed", err);
    });
  });

  client.on('stream-subscribed', function (evt) {
    var stream = evt.stream;
    console.log("Subscribe remote stream successfully: " + stream.getId());
    if ($('div#video_box #agora_remote'+stream.getId()).length === 0) {
      $('div#video_box').append('<div id="agora_remote'+stream.getId()+'"  onclick="toggleBox(this)"></div>');
    }
    if($('div#video_box>div').length == 1)$('div#video_box>div').first().addClass('main')
    if($('div#video_box>div').length >= 2){$("#main").removeClass("off").find(".Previou").attr('tooltip','隐藏成员');$('.icon-zhankai').removeClass('icon-zhankai').addClass('icon-shouqi');}
    stream.play('agora_remote' + stream.getId());
    if($('#loudspeaker').hasClass('off')){ disvoice();//关闭自己扬声器
      $('#loudspeaker i').removeClass('icon-yangshengqi').addClass('icon-yangshengqiguanbi');
    };
  });

  client.on('stream-removed', function (evt) {
    var stream = evt.stream;
    stream.stop();
    $('#agora_remote' + stream.getId()).remove();
    console.log("Remote stream is removed " + stream.getId());
  });

  client.on('peer-leave', function (evt) {
    var stream = evt.stream;
    if (stream) {
      stream.stop();
      $('#agora_remote' + stream.getId()).remove();
      console.log(evt.uid + " leaved from this channel");
    }
  });
}

function leave() {//退出
  document.getElementById("leave").disabled = true;
  client.leave(function () {
    console.log("Leavel channel successfully");
    location.href = "../meeting/index.html";
  }, function (err) {
    console.log("Leave channel failed");
  });
}

function publish() {
  document.getElementById("publish").disabled = true;
  document.getElementById("unpublish").disabled = false;
  client.publish(localStream, function (err) {console.log("Publish local stream error: " + err);});
}

function unpublish() {
  document.getElementById("publish").disabled = false;
  document.getElementById("unpublish").disabled = true;
  client.unpublish(localStream, function (err) {console.log("Unpublish local stream failed" + err);});
}

function getDevices() {
  AgoraRTC.getDevices(function (devices) {
    for (var i = 0; i !== devices.length; ++i) {
      var option = document.createElement('option');
      var device = devices[i];
      option.value = device.deviceId;
      if (device.kind === 'audioinput') {
        option.text = device.label || 'microphone ' + (audioSelect.length + 1);
        if(option.value !== "default")audiodata.push(option.value);
        audioSelect.appendChild(option);
      } else if (device.kind === 'videoinput') {
        option.text = device.label || 'camera ' + (videoSelect.length + 1);
        if(option.value !== "default")videodata.push(option.value);
        videoSelect.appendChild(option);
      } else {
        console.log('Some other kind of source/device: ', device);
      }
    }
  });
}


/**
 * @tong and
 */

function switchDevice(_obj,_Device,_id) {
  if(_id == _Device.length & _obj == 'audio'){_id = 0;audio_ =1}
  if(_id == _Device.length & _obj == 'video'){_id = 0;video_ =1}
  show_sub(_obj,_Device[_id])
}

function Members(){//其余人员显示
  if(!$("#main").hasClass("off")){
    $("#main").addClass("off").find(".Previou").attr('tooltip','显示成员');
    $('.icon-shouqi').removeClass('icon-shouqi').addClass('icon-zhankai');
  }else {
    $("#main").removeClass("off").find(".Previou").attr('tooltip','隐藏成员');
    $('.icon-zhankai').removeClass('icon-zhankai').addClass('icon-shouqi');
  }
}
//切换媒体
function show_sub(obj,val){ console.log(obj+":"+val)
  localStream.switchDevice(obj,val,function(){console.log(obj+'切换成功')},function(err){console.log(err)})
}

//主播切换
function toggleBox(e){
  $(e).addClass("main").siblings().removeClass("main")
}


$('#video_box > div').on('click',function (){
  if(!$(this).hasClass("main"))$(this).addClass("main").siblings().removeClass("main")
})

//设置
function set_fun(){
 layerOpen = layer.open({type: 1,title: ['设置','background:#333;color: #fff'],closeBtn: 0,closeBtn:1,shadeClose: true,content: $('#set_box').html()})
}

//切屏
function cam2screen() {
  client.leave(function () {
    parent.layer.close(_index);
    parent.push_screen();
    console.log("Leavel channel successfully")
  },function (err){
    console.log("Leave channel failed")
  })
}

//抢麦
function robMicrophone(){
  httpx.get(pushApi,{'token':_user.token,'push':JSON.stringify({'type':'DirectorCall','content':'ShutMicrophone','gid':_gid,'uid':_uid,'key':ChannelId})},function (data) {
    JSON.parse(data).success ? msg('静音成功！') : msg(JSON.parse(data).info)
  })
}

//全屏开关
function toggleFullScreen(e){var el=e.srcElement||e.target;FullScreen(el)}
//全屏
function FullScreen(el){
  if(sc == 0){sc=1;document.documentElement.webkitRequestFullscreen();}else{sc=0;document.webkitCancelFullScreen();}
}

function audio_switch(t){//麦克风开关
  if($('#microphone').hasClass('off')){ opaudio();
    $('#microphone').removeClass('off');$('#microphone i').removeClass('icon-maikefeng-jingyin1').addClass('icon-maikefeng-shi');
  }else { disaudio();
    $('#microphone').addClass('off');$('#microphone i').removeClass('icon-maikefeng-shi').addClass('icon-maikefeng-jingyin1');
  }
}
function video_switch(t) {//摄像头开关
  if($('#camera').hasClass('off')){ disvideo();
    $('#camera').removeClass('off'); $('#camera i').removeClass('icon-ic_videocam_off_px').addClass('icon-ic_videocam_px');
  }else { opvideo();
    $('#camera').addClass('off'); $('#camera i').removeClass('iicon-ic_videocam_px').addClass('icon-ic_videocam_off_px');
  }
}
function voice_switch(t){ //扬声器开关
  if($('#loudspeaker').hasClass('off')){ opvoice(); console.log('扬声器开')
    $('#loudspeaker').removeClass('off');$('#loudspeaker i').removeClass('icon-yangshengqiguanbi').addClass('icon-yangshengqi');
  }else{ disvoice(); console.log('扬声器关')
    $('#loudspeaker').addClass('off'); $('#loudspeaker i').removeClass('icon-yangshengqi').addClass('icon-yangshengqiguanbi');
  }
}
function opaudio() {localStream.unmuteAudio()}//开音
function disaudio(){localStream.muteAudio()}//关音
function opvideo() {localStream.enableVideo()}//开画
function disvideo(){localStream.disableVideo()}//关画
function opvoice(){$("#video_box audio,#video_box video").each(function(){document.getElementById($(this).attr("id")).muted=false});}//关声
function disvoice(){$("#video_box audio,#video_box video").each(function(){document.getElementById($(this).attr("id")).muted=true});}//开声

// 推送服务端
var socket = io('http://api.namenb.com:2120');
uid = _gid;// uid可以是自己网站的用户id，以便针对uid推送以及统计在线人数
socket.on('connect',function(){socket.emit('login', uid);});// socket连接后以uid登录
socket.on('new_msg',function(msg_){// 后端推送来消息时
  _msg=msg_.replace(/&quot;/g,'"');
  var msgarr=DE_JSON(_msg);
  console.log(msgarr);
  if(!msgarr.gid || msgarr.gid !== uid) return; //是否为同一家公司
  if(!msgarr.type || msgarr.type !== "DirectorCall") return; //是否为同一个栏目
  if(msgarr.key == ChannelId && msgarr.uid != _uid){ msg('麦克风已禁用！');
    if(!$('#microphone').hasClass('off')){ disaudio(); //关闭他人麦克风
      $('#microphone').addClass('off'); $('#microphone i').removeClass('icon-maikefeng-shi').addClass('icon-maikefeng-jingyin1');
    }
  }
  if(msgarr.uid == _uid){
    if(!$('#loudspeaker').hasClass('off')){ disvoice();//关闭自己扬声器
      $('#loudspeaker').addClass('off');$('#loudspeaker i').removeClass('icon-yangshengqi').addClass('icon-yangshengqiguanbi');
    };
    if($('#microphone').hasClass('off')){ opaudio();//打开自己麦克风
      $('#microphone').removeClass('off'); $('#microphone i').removeClass('icon-maikefeng-jingyin1').addClass('icon-maikefeng-shi');
    }
  };//是否为本人
//询问框
});
socket.on('update_online_count', function(online_stat){console.log(online_stat)});// 后端推送来在线数据时
