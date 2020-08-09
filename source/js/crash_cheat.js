 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/joke.ico");
         document.title = '‘(-`Д´-)ノ死鬼去哪了！';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = '(Ő∀Ő)ノ欢迎回来！';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
