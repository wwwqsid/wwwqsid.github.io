//******<<>>（https://www.wyeditor.com，免费软件欢迎下载使用） JS库文件*******
 $(function(){ 
 $('.tabPanelTabsDiv1 ul li').click(function(){ 
 $(this).addClass('hit').siblings().removeClass('hit'); 
 $('.panesTabsDiv1>div:eq('+$(this).index()+')').show().siblings().hide(); 
 }) 
 })
