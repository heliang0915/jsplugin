(function(global){
  var defaultPng="data:image/png;base64,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";
  var defaultOptions={
     loadBackFn:function(){},
     maxTap:50,
     isBg:false //默认不是背景加载
  }
   function LazyImg(container,selector,options){
      if(container==null){
          return new Error("please set Container");
      }
      //做一下兼容处理
      if(typeof selector =="object"){
         options=selector;
         selector=null;
      }
      this.container=container;
      this.selector=selector||"lazy";
      this.options=this.mergeOptions(options,defaultOptions);
      this.init();
   }
   LazyImg.proto=LazyImg.prototype;
   LazyImg.proto.mergeOptions=function(newOptions,oldOptions){
        for(var key in newOptions){
          if(newOptions[key]){
            oldOptions[key]=newOptions[key];
          }
        }
        return oldOptions;
   }
   LazyImg.proto.init=function(){
      this.setPosition();
      this.initEvnt();
      this.lazyImgs();
   }
    LazyImg.proto.getImgs=function(){
        var imgs=this.container.querySelectorAll('*['+this.selector+']');
         return imgs
   }
   LazyImg.proto.initEvnt=function(){
        var self=this;
        var dom=this.container.tagName=="HTML"?document.body:this.container;
        dom.onscroll=function(e){
           self.lazyImgs(this);
       }
   }
    LazyImg.proto.addClass =function(ele, cls) {
        if (!this.hasClass(ele, cls)) {
          ele.className = ele.className == '' ? cls : ele.className + ' ' + cls;
        }
    }
    LazyImg.proto.lazyImg=function(img){
       var tap=this.options.maxTap;
       var _this=this;
       var url=img.getAttribute('data-src');
       var isBg=this.options.isBg;
       var imgs=this.getImgs();
       var load=img.getAttribute('load');
       var top=img.t;
       var scrollTop=this.container.scrollTop;
       var offsetHeight=this.container.offsetHeight;// window.screen.availHeight;
       var scrollHeight=this.container.scrollHeight;
       var load=img.getAttribute('load');
       if(top<offsetHeight+scrollTop+tap){
          if(load=="false"||load==undefined){
              var image=new Image();
              image.index=img.ind;
              image.src=url;
              //注意:这个地方是异步
              image.onload=function(){
                var item=imgs[this.index];
                var tempLoad=item.getAttribute('load');
                if(tempLoad=="false"||tempLoad==undefined){
                  if(isBg){
                    var realImg=item.getAttribute('data-src');
                    img.style.backgroundImage='url(\"'+realImg+'\")';
                    img.style.backgroundSize='100% 100%';
                  }else{
                   item.src=item.getAttribute('data-src');
                  }
                  item.setAttribute('load',true);
                  _this.addClass(item,"lazyel-loaded");
                  console.log("加载图片"+this.index);
                   _this.options.loadBackFn(item);
                }
              }
            }
           }
   }
   LazyImg.proto.hasClass =function(elem, cls) {
      cls = cls || '';
      if (cls.replace(/\s/g, '').length == 0) return false; //当cls没有参数时，返回false
      return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
    }
   LazyImg.proto.lazyImgs=function(){
     var imgs=this.getImgs();
      for(var i=0;i<imgs.length;i++){
        var img=imgs[i];
        this.lazyImg(img);
      }
   }
    LazyImg.proto.setPosition=function(){
       var imgs=this.getImgs();
       var isBg=this.options.isBg;
       var containerTop=this.container.offsetTop;

       for(var i=0;i<imgs.length;i++){
            var img=imgs[i];
            var imgTop=img.offsetTop;
            //计算当前图片和容器的差值
            var diffTop=imgTop-containerTop;
            console.log(diffTop);
            img.t=img.clientHeight+diffTop;
            img.ind=i;
            // img.style.backgroundImage='url('+defaultPng+')';
            // img.style.backgroundSize='100% 100%';
            if(isBg){
              img.style.backgroundImage='url('+defaultPng+')';
              img.style.backgroundSize='100% 100%';
            }else{
               img.src=defaultPng;
            }

       }
    }
    global.LazyImg=LazyImg;
})(window)
