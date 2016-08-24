    <script type="text/javascript">
        /*因为ie对document.getElementsByClassName();支持比较差*/
        function getByClassName( obj, cls){
            var elements = obj.getElementsByTagName("*");
            var result = [];
            for( var i = 0; i < elements.length; i++ ) {
                if(elements[i].className == cls) {
                    result.push(elements[i]);
                }
            }
            return result;
        }

        function hasClass( obj, cls) {
            /*正则判断是否是class*/
            return obj.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
        }

        function removeClass( obj, cls) {
            if(hasClass( obj, cls)) {
                var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
                obj.className = obj.className.replace(reg, "");
            }
        }

        function addClass( obj, cls) {
            if( !hasClass( obj, cls )) {
                obj.className += " " + cls;
            }
        }

        window.onload = function () {
            window.onscroll = function () {
                /*不同浏览器对方法支持不同，导致*/
                var top = document.documentElement ? document.documentElement.scrollTop : document.body.scrollTop;
                var menus = document.getElementById("menu").getElementsByTagName("a");

                var items = getByClassName(document.getElementById("content"),  "item");
                var currentId = "";

                for( var i = 0; i < items.length; i++){
                    var _item = items[i];
                    var _itemTop = _item.offsetTop;
                    if( top > _itemTop - 200) {
                    /*在JavaScript内一切皆对象，id直接获取itemN属性*/
                        currentId = _item.id;
                    } else {
                        break;
                    }
                }

                if(currentId) {
                    for( var j = 0; j < menus.length; j++) {
                        var _menu = menus[j];
                        /* obj.href获取一长串字符串*/
                        var _href = _menu.href.split("#");

                        if(_href[_href.length - 1] != currentId ) {
                            /* JS没有removeClass和addClass方法，自己写*/
                            removeClass(_menu, "current");
                        } else {
                            addClass(_menu, "current")
                        }
                    }
                }
            }
        }
    </script>
