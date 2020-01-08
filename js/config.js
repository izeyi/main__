function getjs(arr) {
for(var i= 0;i<arr.length;i++){
document.write('<script language="javascript" src="'+document.currentScript.src.substring(0,document.currentScript.src.lastIndexOf('/'))+'/lib/'+arr[i]+'"></script>');
}
}
function dynamicLoadCss(url) {
var head = document.getElementsByTagName('head')[0];
var link = document.createElement('link');
link.type='text/css';
link.rel = 'stylesheet';
link.href = url;
head.appendChild(link);
}


getjs([
"jquery.min.js",
"httpx.min.js",
"watch.min.js",
"store.legacy.min.js",
"vue.min.js",
"vue.filter.js",
"layer/layer.js",
"cityselect.js",
"socket.io.js",
// "video.min.js",
"aliplayer-min.js",
"lib.js"


]);
// dynamicLoadCss(document.currentScript.src.substring(0,document.currentScript.src.lastIndexOf('/'))+"/lib/video-js.min.css");
dynamicLoadCss(document.currentScript.src.substring(0,document.currentScript.src.lastIndexOf('/'))+"/lib/aliplayer-min.css");
dynamicLoadCss(document.currentScript.src.substring(0,document.currentScript.src.lastIndexOf('/'))+"/lib/loader.css");
//alert(document.currentScript.src.substring(0,document.currentScript.src.lastIndexOf('/'))); 
