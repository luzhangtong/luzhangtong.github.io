window.onload = function(){
   var footers=document.getElementsByTagName("footer");
   var parents=document.getElementsByClassName("wrapper");
   var parent=parents[0];
   for (var i = 0;i < footers.length;i++){
     parent.removeChild(footers[i]);
   }
} 