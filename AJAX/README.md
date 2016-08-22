1.检测是否符合xmr条件
  var request;
  if(window.XMLHttpRequest){
    request = new XMLHttpRequest();
    } else {
      request = new ActiveXObject("MicrosoftHTTP");
    }
2.http:无状态协议
3.http请求全过程：
  1.建立tcp链接
  2.web浏览器向web服务器发送请求命令
  3.web浏览器发送请求头信息
  4.web服务器应答
  5.web服务器发送应答头信息
  6.web服务器向浏览器发送数据
  7.web服务器关闭tcp链接
4.http请求由四个部分组成：
  1.http请求的方法或动作：get或post
  2.正在请求的url，
  3.请求头，客户端信息，身份验证信息等
  4.请求体：请求正文，包括客户提交的查询字符串信息，表单信息等
  
5.get：信息获取，使用url传递参数，对所发送的信息的数量也有限制，2000个字符
  post：一般用于修改服务器上的资源，对所发送的信息数量无限制。
6.http响应：
  1.数字和文字组成的状态码 用来显示成功或者失败
  2.响应头：服务器类型，日期时间，内容类型和长度
  3.响应体，响应正文。
7.状态码
  1xx：信息类，收到web浏览器请求，正在进一步处理
  2xx：成功，请求被正确接收，处理，和理解：200 ok
  3xx：重定向，表示请求没有成功，客户必须采取进一步动作
  4xx：客户端错误，客户端提交请求有错，400 not found，请求中所应用的文本不存在
  5xx：服务器错误，服务器不能完成对请求的处理：500
8.XMLHttpRequest发送请求
  1.open(method,url,async);默认异步
    send(string);
    
    request.open("GET","get.php",true);
    request.open("GET","get.php");
    request.send();
    
    request.open("GET","create.php");
    request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    request.send("name=哈哈哈&sex=男");
9.readyState属性
  0：请求未初始化，open还没有调用
  1：服务器连接已建立，open已经调用了
  2：请求已接收，也就是接收到头信息了
  3：请求已完成，且响应已就绪，也就是响应完成了。
10.AJAX请求异步更新对象
  var request = new XMLHttpRequest();
  request.open("GET","get.php");
  request.send();
  request.onreadystatechange = function () {
    if(request.readyState ===4 && request.status === 200){
      request.responseText;
    }
  }
11.php是一种创建动态交互性站点的服务器端脚本语言。
  <?php ?>
12.代码另外附:
  
