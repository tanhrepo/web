document.querySelector(".get").onclick = function(){
	axios.get("https://autumnfish.cn/api/joke/list?num=3")
	.then(function(response){
		console.log(response);
	},
	function(err){
		console.log(err);
	})
}
document.querySelector(".post").onclick = function(){
	axios.post("https://autumnfish.cn/api/user/reg",{username:"thong"})
	.then(function(response){
		console.log(response);
	},function(err){
		console.log(err);
	})
}

var app1 = new Vue({
	el:"#app1",
	data:{
		joke:"笑话"
	},
	methods:{
		getJoke:function(){
			var that = this;
			axios.get("https://autumnfish.cn/api/joke").then
			(function(response){
				console.log(response.data);
				that.joke = response.data;
			},function(err){})
		}
	}
})