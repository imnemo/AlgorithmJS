if(process.argv){
	var algo = require('./../lib/prime'),
	expect = require('chai').expect;
}

describe('Prime', function(){
	var isPrime = algo.isPrime,
		np= algo.nextPrime;
	it('should 121 not be a prime', function(){
		expect(isPrime(121)).to.eql(false);
	});
	it('The next prime after 2 should be 3', function(){
		expect(np(2)).to.eql(3);
	});
	it('The next prime after 7 should be 11', function(){
		expect(np(7)).to.eql(11);
	});
});