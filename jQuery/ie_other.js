var eventUtil = {
            addHandler: function (element, type, handler) {
              if(element.addEventListener){
                element.addEventListener(type, handler, false);
              } else if(element.attachEvent) {
                element.attachEvent('on' + type, handler);
              } else {
               /* element.onclick === element['onclick'];
                element['on' + type] = handler;
              }
            },
            
            removeHandler: function (element, type, handler) {
              if(element.removeEventListener){
                element.removeEventListener(type, handler, false);
              } else if(element.detachEvent) {
                element.detachEvent('on' + type, handler);
              } else {
               /* element.onclick === element['onclick'];
                element['on' + type] = null;
              }
            }
          }
