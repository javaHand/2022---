var li = document.getElementById('lunbo').getElementsByTagName("li");
var num = 0;
var len = li.length;

setInterval(function() {
	li[num].style.display = "none";
	num = ++num == len ? 0 : num;
	li[num].style.display = "block";

}, 2800);
