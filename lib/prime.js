/**
 * 质数又称素数。指在一个大于1的自然数中，除了1和此整数自身外，没法被其他自然数整除的数。
 * 换句话说，只有两个正因数（1和自己）的自然数即为素数。比1大但不是素数的数称为合数。1和0既非素数也非合数。合数是由若干个质数相乘而得到的。所以，质数是合数的基础，没有质数就没有合数。
 */
(function(global){
	/*define global var start*/
	var Algo = global.Algorithm || {};
	/*define global var end*/
	
	/*main code start*/
	Algo.isPrime = function(n){
		if(isNaN(n) || n < 2 || Math.floor(n) < n){
			return false;
		}
		var isPrime = false,
			i = 2;
		while(n % i > 0){
			if(i * i > n){
				isPrime = true;
				break;
			}
			i++;
		}
		return isPrime;
	}
	Algo.prePrime = function(n){
		
	}
	Algo.nextPrime = function nextPrime(n) {
	  var smaller;
	  n = Math.floor(n);

	  if (n >= 2) {
		n++;
		n = n % 2 > 0 ? n : n + 1;
		while(Algo.isPrime(n) === false){
			n += 2;
		}
		return n;
	  } else {
		return 2;
	  }
	}
	/*main code end*/
	
	/*exports global var start*/
	if ( typeof exports !== "undefined") {
		exports = module.exports = Algo;
	}
	/*exports global var end*/
})(this);
