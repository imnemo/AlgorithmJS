/**
 * 问题描述：
 * 约瑟夫问题：有ｎ只猴子，按顺时针方向围成一圈选大王（编号从１到ｎ），从第１号开始报数，一直数到ｍ，数到ｍ的猴子退出圈外，
 * 剩下的猴子再接着从1开始报数。就这样，直到圈内只剩下一只猴子时，这个猴子就是猴王，编程求输入ｎ，ｍ后，输出最后猴王的编号。
 * 自己扩展下这个问题，如果从1开始报数，倒序数到第m只猴子退出，求最后剩下的猴子序号！
 */
/**
 * 
 */
(function(global){
	/*define global var start*/
	var Algo = global.Algorithm || {};
	/*define global var end*/
	
	/*main code start*/
	Algo.monkeyKing = function(n, m){
		var numAll = parseInt(n, 10),
			indexIgnore = parseInt(m, 10);
		if(isNaN(numAll) || isNaN(indexIgnore) || numAll <= 0 || indexIgnore === 0){
			throw new Error('The param n and m should all be a number, specially n must be above zero and m not be equal to zero!');
		}
		if(numAll === 1) return 1;
		
		var kingKey = 0,
			monkeyArry = [];
		//初始化猴子序号数组
		if(m < 0){
			//反向报数
			indexIgnore = Math.abs(indexIgnore);
			monkeyArry[0] = 1;
			for(var i = numAll; i > 1; i--){
				monkeyArry.push(i);
			}
		}
		else{
			//正向报数
			for(var i = 1; i <= numAll; i++){
				monkeyArry.push(i);
			}
		}
		
		while(numAll > 1){
			var tmp = kingKey + indexIgnore;
			kingKey = tmp % numAll;
			kingKey = kingKey - 1 < 0 ? numAll - 1 : kingKey - 1;
			monkeyArry.splice(kingKey, 1);
			numAll--;
		}
		return monkeyArry[kingKey - 1];
	}
	/*main code end*/
	
	/*exports global var start*/
	if ( typeof exports !== "undefined") {
		exports = module.exports = Algo;
	}
	/*exports global var end*/
})(this);