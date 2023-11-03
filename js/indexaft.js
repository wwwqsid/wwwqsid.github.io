//******<<>>（https://www.wyeditor.com，免费软件欢迎下载使用） JS库文件*******
var qrcodeQrCode_378150 = new QRCode(document.getElementById("QrCode_378150"), { 
 width : 179, 
 height : 179 
 }); 
  
 function makeCodeQrCode_378150 () { 
 qrcodeQrCode_378150.makeCode('https://wwwqsid.github.io/'); 
 } 
  
 makeCodeQrCode_378150(); 

       var imgs = document.querySelectorAll('img'); 
         function getTop(e) { 
             var T = e.offsetTop; 
             while(e = e.offsetParent) { 
                 T += e.offsetTop; 
             } 
             return T; 
         } 
         function lazyLoad(imgs) { 
             var H = document.documentElement.clientHeight;//获取可视区域高度 
             var S = document.documentElement.scrollTop || document.body.scrollTop; 
             for (var i = 0; i < imgs.length; i++) { 
                 if (H + S > getTop(imgs[i])) { 
                     var myscr = imgs[i].getAttribute('data-src');
                    if((String(myscr).length != 0)&&(String(imgs[i].src).length == 0 )){ imgs[i].src = myscr;} 
                 } 
             } 
         } 
         window.onload = window.onscroll = function () { //onscroll()在滚动条滚动的时候触发 
             lazyLoad(imgs); 
         }
