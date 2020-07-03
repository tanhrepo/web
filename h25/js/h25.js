var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString()
  }
});

var app3 = new Vue({
	el:'#app-3',
	data:{
		message:"tanhong",
		info:"hello"
	}
});

var app4 = new Vue({
	el:'#app-4',
	data:{
		food:"西红柿炒鸡蛋",
	},
	methods: {
		doIt:function(){
			alert("hello")
		},
		change:function(){
			this.food+="好好吃！"
		}
	},
});

var app5 = new Vue({
	el:'#app-5',
	data:{
		num:1,
	},
	methods: {
		add:function(){
			if(this.num<10){
				this.num++;
			}
			else{
				alert('已达最大值')
			}
		},
		sub:function(){
			if(this.num>0){
				this.num--;
			}
			else{
				alert('已达最小值')
			}
		},
	},
});

var app6 = new Vue({
	el:'#app-6',
	data:{
		isShow:false,
	},
	methods: {
		changeisShow:function(){
			this.isShow = !this.isShow;
		},
	},
});

var app7 = new Vue({
	el:'#app-7',
	data:{
		imgSrc:"img/btn03.png",
		imgTitle:"苍风一目连",
		isActive:false,
	},
	methods: {
		toggleActive:function(){
			this.isActive = !this.isActive;
		}
	},
});

var app8 = new Vue({
	el:'#app-8',
	data:{
		imgArr:[
			"img/btn01.png",
			"img/btn02.png",
			"img/btn03.png",
		],
		index:0
	},
	methods: {
		prev:function(){
			this.index--;
		},
		next:function(){
			this.index++;
		}
	},
});

var app9 = new Vue({
	el:'#app-9',
	methods: {
		doIt:function(p1,p2){
			console.log("it");
			console.log(p1);
			console.log(p2);
		},
		sayHi:function(){
			alert("吃了没");
		}
	},
});

var app10 = new Vue({
	el:'#app-10',
	data:{
		message:"西红柿炒鸡蛋"
	},
	methods: {
		getM:function(){
			alert(this.message);
		},
		setM:function(){
			this.message="沙丁鱼";
		}
	},
});