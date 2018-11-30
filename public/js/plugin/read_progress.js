/**
 * 显示阅读进度插件
 * @type {[type]}
 */
var section=document.createElement('section');
section.className="progress_bar";
document.body.appendChild(section);
var progress_bar=document.querySelector('.progress_bar');
window.onscroll=function(e) {
    var doc = document.documentElement || document.body;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var clientHeight = doc.clientHeight;
    var scrollHeight = doc.scrollHeight;
    var maxHeight = scrollHeight - clientHeight;
    var p = parseFloat(scrollTop / maxHeight) * 100 + "%";
    progress_bar.style.width = p;
    // console.log(scrollTop);
}
