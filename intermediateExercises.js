function PrimeTime(num) {
	for (var i = 2; i < Math.floor(num/2); i++){
		if (num % i === 0)
			return false;
	}
	return true;
}
// console.log(PrimeTime(110));


function RunLength(str) { 

}
console.log(RunLength("aabbcde"))