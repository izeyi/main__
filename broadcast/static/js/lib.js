/**/
var sc = 0,_pass, audiodata = [], videodata = [], video_ = 1, audio_ = 1,_open;;
var pushApi = globalApi_+"/box/push/";
var _user = store.get('userinfo');
var _gid = _user.userinfo.gid;
var _uid = _user.userinfo.uid;
var _index = parent.layer.getFrameIndex(window.name);
if(!AgoraRTC.checkSystemRequirements())alert("Your browser does not support WebRTC!")
var AppId = "";
var ChannelId = _gid;//_gid
window.onload = function () {
httpx.get(globalApi_+"/box/rtc/oauth/",{'token':_user.token},function(data){
var _data = JSON.parse(data);
if(_data.success)AppId=_data["AppId"];
kling();
})
}

//初始化
function kling(){
  _open = layer.open({
    type: 1,
    title:'超级提案',
    area:'516px',
    skin:'layui-layer-nobg',
    content:$('#Bind_phone_box'),
    cancel:function(index){parent.layer.close(_index);}
  });
  // layer.prompt({
  //   title: '请输入会议室口令，并确认',
  //   formType: 1,
  //   btn2:function(index){parent.layer.close(_index);},
  //   cancel:function(index){parent.layer.close(_index);}
  // },function(pass, index){
  //   layer.close(index);
  //   msg("您会议室的口令是：["+pass + "]请牢记！");
  //   ChannelId=pass;
  //   join();
  // });
}
function JoinConference() {
  if(!$("#bind_phone").val()){msg('口令不能为空');return}
  if(!$("#bind_code").val()){msg('密码不能为空');return}
  var pass = $("#bind_phone").val()
  var text = $("#bind_code").val();
  ChannelId = ChannelId+pass+text;
  store.set('channelid',{"channelid": pass+text,"pass" : ChannelId});
  join();
  // getDevices();
  layer.close(_open);
}

var client, localStream, camera, microphone;

function join() {
  console.log("Init AgoraRTC client with App ID: " + AppId);

  var channel_key = null;

  client = AgoraRTC.createClient({mode: 'live'});
  client.init(AppId, function () {
    console.log("AgoraRTC client initialized");
    client.join(channel_key, ChannelId, null, function(uid) {
      console.log("User " + uid + " join channel successfully");
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
    if($('div#video_box>div').length == 1){$('div#video_box>div').first().addClass('main')}
    if($('div#video_box>div').length >= 2){flag = true;$("#main").removeClass("off").find(".Previou").attr('tooltip','隐藏成员');$('.icon-zhankai').removeClass('icon-zhankai').addClass('icon-shouqi');}
    stream.play('agora_remote' + stream.getId());
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
  // document.getElementById("im").src= "../im/im.html?pass="+ChannelId;
}

function leave() {
  document.getElementById("leave").disabled = true;
  client.leave(function () {
    console.log("Leavel channel successfully");
    stream.stop();
    parent.layer.close(_index);
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




/**
 * @tong and
 */
function Members(){//其余人员显示
  if(!$("#main").hasClass("off")){
    $("#main").addClass("off").find(".Previou").attr('tooltip','显示成员');
    $('.icon-shouqi').removeClass('icon-shouqi').addClass('icon-zhankai');
  }else {
    $("#main").removeClass("off").find(".Previou").attr('tooltip','隐藏成员');
    $('.icon-zhankai').removeClass('icon-zhankai').addClass('icon-shouqi');
  }
}
//主播切换
function toggleBox(e){$(e).addClass("main").siblings().removeClass("main")}
$('#video_box > div').on('click',function (){
  if(!$(this).hasClass("main"))$(this).addClass("main").siblings().removeClass("main")
})



//全屏开关
function toggleFullScreen(e){var el=e.srcElement||e.target;FullScreen(el)}
//全屏
function FullScreen(el){
  if(sc == 0){sc=1;document.documentElement.webkitRequestFullscreen();}else{sc=0;document.webkitCancelFullScreen();}
}



function voice_switch(t){ //扬声器开关
  if($('#loudspeaker').hasClass('off')){ opvoice(); console.log('扬声器开')
    $('#loudspeaker').removeClass('off');$('#loudspeaker i').removeClass('icon-yangshengqiguanbi').addClass('icon-yangshengqi');
  }else{ disvoice(); console.log('扬声器关')
    $('#loudspeaker').addClass('off'); $('#loudspeaker i').removeClass('icon-yangshengqi').addClass('icon-yangshengqiguanbi');
  }
}


// 推送结束
function opvoice(){$("#video_box audio,#video_box video").each(function(){document.getElementById($(this).attr("id")).muted=false});}//关声
function disvoice(){$("#video_box audio,#video_box video").each(function(){document.getElementById($(this).attr("id")).muted=true});}//开声