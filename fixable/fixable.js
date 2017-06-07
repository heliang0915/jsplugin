/**
 * 插件说明：
 * 此插件用于解决滚动顶部固定问题  目前只试用于容器中一个的滚动情况 多个暂时不支持
 * 插件用法：
 *	new ScrollFix({
	 el:'元素选择器-指的是被固定的元素',
	 parent:'监听的能滚动的元素' 如果外围容器没有则不需要填写
  	});
 **/
;(function(global,factory){
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :(global.ScrollFix = factory(global));
})(window,function(global){

    var defaultOption={
        parent:global,
        el:null,
        direction:'top'
    }

    //定义滚动对象
    function ScrollFix(option){
        this.options=extend(defaultOption,option);
        this._init();
    }

    ScrollFix.prototype._init=function(){
        if(this.options.el==null){
            console.err("必须填写绑定元素");
        }else{
            this.$el=document.querySelector(this.options.el);
            this.$doc=getOverFlowParentEle(this.$el);
            this.$parent=this.options.parent==global?global:document.querySelector(this.options.parent);
            this.addEvent();
        }
    }

    ScrollFix.prototype.addEvent=function(){
        var _this=this;
        var maxTop=offset(this.$el).top;
        this.$parent.addEventListener('scroll',function (e) {
            e=global.event||e;
            var winTop=_this.getScrollTop();
            if(winTop>=maxTop){
                _this.$el.style.cssText="position:fixed;"+_this.options.direction+":0";
            }else{
                _this.$el.style.cssText="";
            }
        });
    }

    //获取监听scrollTop的元素
    function getOverFlowParentEle(el){
        var parent=el.parentNode;
        while(parent&&parent.nodeType!=1&&parent.style.overflow!='hidden'){
            parent=parent.parentNode;
        }
        return parent;
    }


    ScrollFix.prototype.getScrollTop=function(){
        return this.$doc.nodeName=="BODY"?(document.documentElement.scrollTop||document.body.scrollTop):this.$doc.scrollTop;
    }

    //获取当前位置的绝对偏移量
    function offset(el){
        var l=el.offsetLeft;
        var t=el.offsetTop;
        var p=el.offsetParent;
        while(p){
            l+=p.offsetLeft+p.clientLeft;
            t+=p.offsetTop+p.clientTop;
            p=p.offsetParent;
        }
        return {
            top:t,
            left:l
        }
    }

    //对象拷贝
    function extend(oldObj,newObj){
        for(var key in newObj){
            if(newObj[key]!=null){
                oldObj[key]=newObj[key];
            }
        }
        return oldObj;
    }
    return ScrollFix;
});