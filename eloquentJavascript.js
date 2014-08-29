function min(arg1, arg2){
	return arg1 < arg2 ? arg1 : arg2;
}
console.log(min(10,20));


//recursive isEven
function isEven(number) {
	if (number === 0)
		return true;
	else if (number === 1)
		return false;
	else if (number < 0)
		return isEven(number + 2)
	return isEven(number - 2);
}
console.log(isEven(-6))


function countBs(string) {
	return countChar(string, "B");
}

function countChar(string, char){
	var count = 0;
	var stringArray = string.split("")
	for (var i = 0; i < stringArray.length; i++){
		if (stringArray[i] === char)
			count++;
	}
	return count
}
console.log(countChar("Mississippi", "s"));


