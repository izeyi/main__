/**
 * 配置apiUrl
 * @type {String}
 */
window.globalApi_ = "http://192.168.1.154"  //测试Api
// window.globalApi_ = "http://api.greatorange.cn"  //生产Api
/**
 * setStorage 过期控制代码
 * @param {[type]} key   要存储的数据
 * @param {[type]} value 过期时间
 */
function setStorage(key, value) {
    var curTime = new Date().getTime();
    localStorage.setItem(key, JSON.stringify({ data: value, time: curTime }));
}
/**
 * [getStorage description]
 * @param  {[type]} key [description]
 * @param  {[type]} h   为存储数据有效时间
 * @return {[type]}     [description]
 */
function getStorage(key,h) {
    var datas = localStorage.getItem(key),
        exp = 3600000 * h,
        dataObj = JSON.parse(datas),
        json =''
    if (dataObj){
        var com = new Date().getTime() - dataObj.time;
        json = com > exp ? '' : dataObj.data
    }
    return json
}
/**
 * 判断字符是否为空
 * @param  {[type]}  obj [description]
 * @return {Boolean}     [description]
 */
function isEmpty(obj){
    return (typeof obj === 'undefined' || obj === null || obj === "");
}