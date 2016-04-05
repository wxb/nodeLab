# WebSocket

WebSocket是HTML5开始提供的一种浏览器与服务器间进行全双工通讯的网络技术。WebSocket 技术使得浏览器直接与服务器端的程序通过socket通讯成为可能。使用WebSocket链接，Web应用程序可以实时的推送或者获取信息。

WebSocket的优势主要是：   
1. 推送信息：不需要客户端请求，服务器可以主动传送数据给客户端。     
2. 节省资源：互相沟通的Header是很小的-大概只有 2 Bytes。    

这两个优势主要是相对于其他技术而言：   
1. **轮询** 是在特定的的时间间隔（如每1秒），由浏览器对服务器发出HTTP请求，然后由服务器返回最新的数据给客服端的浏览器，这种方式有一个很大的弊端，就是会占用很多的带宽。
2. **Comet** 用了AJAX。但这种技术虽然可达到全双工通信，但依然需要发出请求

关于更多WebSocket的信息请学习：        [MDN-WebSocket](https://developer.mozilla.org/zh-CN/docs/WebSockets)

# socket.io

Socket.IO是一个WebSocket库，包括了客户端的js和服务器端的nodejs    
