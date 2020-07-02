$("#myModal").modal("show");
document.getElementById("mydiv").addEventListener("transitionend",function(e){
	this.innerHTML="过渡"
})