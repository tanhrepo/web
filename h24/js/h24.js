$("#mytab a").click(function(e){
	e.preventDefault();
	$(this).tab("show");
})
// $("#damu-nav li a").click(function(e){
// 	var href = $(this).attr("href");
// 	console.log("#damu-list > li > a[href="+(href)+"]");
// 	$("#damu-list > li > a[href="'+(href)+'"]").tab('show');
// 	$(document).scrollTop($("#demo").offset().top);
// 	e.preventDefault();
// })