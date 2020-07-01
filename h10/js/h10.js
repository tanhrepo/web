// // example1
// let a={},
// b='0',
// c=0;
// a[b]='tom';
// a[c]='jerry';
// console.log(a[b]);

// // example2
// let a = {},
// b=Symbol('1'),
// c=Symbol('1');
// a[b]='珠峰';
// a[c]='培训';
// console.log(a[b]);

// example3
let a = {},
b={
	n:'1'
},
c={
	m:'2'
};
a[b]='珠峰';
a[c]='培训';
console.log(a[b]);