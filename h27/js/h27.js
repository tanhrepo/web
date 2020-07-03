var app = new Vue({
	el:"#todoapp",
	data:{
		list: ["Vue", "web前端", "Js","HTML","CSS"],
		inputValue: "",
	},
	methods:{
		add:function(){
			this.list.push(this.inputValue);
		},
		remove:function(index){
			this.list.splice(index, 1);
		},
		clear:function(){
			this.list = [];
		}
	}
})