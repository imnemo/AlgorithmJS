/*
 * @author sunshine1988
 * 
 * Algorithm code template
 * 兼容浏览器环境和node环境
 * 开发时，每个算法或者几个算法一组写一个文件
 * 发布使用的时候，肯定要打包合并，因此分离出一些公共代码，作为模板
 * 每个算法脚本文件，都以本文件为基础
 * 
 * 打包合并时，可以将下面的define global var、 main code 、 exports global var单独分开处理
 * define 和 exports global var都是保留一处的
 */
(function(global){
	/*define global var start*/
	var Algo = global.Algorithm = global.Algorithm || {};
	/*define global var end*/
	
	/*main code start*/
	Algo.funcName = function(){}
	/*main code end*/
	
	/*exports global var start*/
	if ( typeof exports !== "undefined") {
		exports = module.exports = Algo;
	}
	/*exports global var end*/
})(this);
