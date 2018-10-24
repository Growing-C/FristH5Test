 (function (window, undefined) {
     'use strict';//数据类型严格 必须使用var声明

	 var god="haven";
	 
     function add(a, b) {
         return a + b;
     }
	 function thankGod(){
		 return "thank you "+god;
	 }

     var a = 1,
         b = 2;
     var c = add(a, b);
	 console.log(c);
     document.write(thankGod());

	 console.log(thankGod());
 })(window);
