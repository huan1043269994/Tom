//1.兼容所有浏览器，ie和其他的事件调用。
var eventUtil = {
            //增加事件
            addHandler: function (element, type, handler) {
              if(element.addEventListener){
                element.addEventListener(type, handler, false);
              } else if(element.attachEvent) {
                element.attachEvent('on' + type, handler);
              } else {
                element.onclick === element['onclick'];
                element['on' + type] = handler;
              }
            },
            //删除事件
            removeHandler: function (element, type, handler) {
              if(element.removeEventListener){
                element.removeEventListener(type, handler, false);
              } else if(element.detachEvent) {
                element.detachEvent('on' + type, handler);
              } else {
                element.onclick === element['onclick'];
                element['on' + type] = null;
              }
            },
            //事件类型
            getType: function (event){
                        return event.type;
            },
            //事件目标
            getElement: function (event) {
                        return event.target || event.srcElement;
            },
            //事件
            getEvent: function (event) {
                        return event?event:window.event;           
            },
            //停止默认行为
            preventDefault: function (event) {
                        if(event.preventDefault){
                         event.preventDefault();           
                        } else {
                         event.returnValue = false;
                        }
                       
            },
            //阻止冒泡
            stopPropagation: function (event) {
             if(event.stopPropagation) {
                         event.stopPropagation();
             } else {
                         event.cancelBubble = true;
             }
            }
            
          }
//测试
            eventUtil.addHandler(go,'click',function (e) {
                        e = eventUtil.getEvent(e);
                        alert(eventUtil.getElement(e).nodeName);
                        eventUtil.preventDefault(e);
                        eventUtil.stopPropagation(e);
            });
            
            //返回本元素样式，不包括边框,width,height,font-size,backgroundColor,color,等等
            function getStyle(obj, attr) {
                        if(obj.currentStyle) {
                                    return obj.currentStyle[attr];
                        } else {
                                    return getComputedStyle(obj, false)[attr];
                        }
            }
            
