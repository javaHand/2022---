window.onscroll = function() {
		if (document.body.scrollTop || document.documentElement.scrollTop > 0) {
			document.getElementById('backtop').style.display = "block"
		} else {
			document.getElementById('backtop').style.display = "none"
		}
	} 
function Top() {
	window.scrollTo('0', '0');
	document.getElementById('backtop').style.display = "none"
}
