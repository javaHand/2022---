var index = 0;
function ChangeImg() {
	index++;
	var a = document.getElementsByClassName("banneres");
	if (index >= a.length) index = 0;
	for (var i = 0; i < a.length; i++) {
		a[i].style.display = 'none';
	}
	a[index].style.display = 'inline-block';
}
setInterval(ChangeImg, 1800);
