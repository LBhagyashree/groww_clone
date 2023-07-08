document.getElementById("btn1").addEventListener('click',show);
document.getElementById("btn2").addEventListener('click',show);
document.getElementById("clsbtn").addEventListener('click',hide);
function show(){
	document.getElementById("popup").style.display ='block';
}
function hide(){
	document.getElementById("popup").style.display ='none';
}
