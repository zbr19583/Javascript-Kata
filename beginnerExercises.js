function FirstReverse(str) { 
  return str.split("").reverse().join("");
}
// console.log(FirstReverse("argument"));




function FirstFactorial(num) { 
  var factorials = num;
  for (var i = num - 1; i > 0; i--)
    factorials *= i 
  return factorials; 
         
}
// console.log(FirstFactorial(4));             




function PowersofTwo(num) { 
	var powersOfTwo = [];
	for (var i = 2; i <= num; i*=2)
		powersOfTwo.push(i);
	if (powersOfTwo.indexOf(num) > -1)
		return true
	else
		return false
}
// console.log(PowersofTwo(123));




function ThirdGreatest1(strArr) { 
	var arrayOfStrings = []
	for (var i = 0; i < 3; i++){
		var greatest = ""
		for (var j = 0; j < strArr.length; j++){
			if (strArr[j].length > greatest.length)
				greatest = strArr[j]
		}
		arrayOfStrings.push(greatest);
		var index = strArr.indexOf(greatest);
		if (index > -1) { strArr.splice(index, 1) }
	}
	return arrayOfStrings[2]
}




function ThirdGreatest2(strArr){
	strArr.sort(function(a,b){
		return b.length - a.length;
	});
	return strArr[2]
}
// console.log(ThirdGreatest2(["coder","byte","code"]));




//doesnt work
function NumberAddition(str) {
	var arrayOfNumbers = []
	var numberString = ""
	for (var i = 0; i < str.length; i++){
		if ((isNaN(parseInt(str[i], 10))) && (numberString.length > 0)){
			arrayOfNumbers.push(parseInt(numberString, 10));
			numberString = "";
		}
		else if (isNaN(parseInt(str[i], 10)))
			continue; 
		else
			numberString += str[i];
	}
	sum = 0
	for (var i = 0; i < arrayOfNumbers.length; i++)
		sum += arrayOfNumbers.pop()
	return sum + parseInt(numberString, 10)
}
// console.log(NumberAddition("1 2 3 4 10 kfd"))




function SimpleAdding(num) {
	var sum = 0
	for (var i = 1; i <= num; i++)
		sum += i
	return sum
}
// console.log(SimpleAdding(140))




// Have the function LetterCapitalize(str) take the str parameter being passed
// and capitalize the first letter of each word. Words will be separated by only
// one space.
function LetterCapitalize(str) { 
  var arrayOfWords = str.split(" ");
  for (var i = 0; i < arrayOfWords.length; i++){
    arrayOfWords[i] = arrayOfWords[i].split("");
    arrayOfWords[i][0] = arrayOfWords[i][0].toUpperCase();
    arrayOfWords[i] = arrayOfWords[i].join("");
  }  
  return arrayOfWords.join(" ");       
}
// console.log(LetterCapitalize("hello world"))




// Have the function SimpleSymbols(str) take the str parameter being passed
// and determine if it is an acceptable sequence by either returning the string
// true or false. The str parameter will be composed of + and = symbols with
// several letters between them (ie. ++d+===+c++==a) and for the string to be
// true each letter must be surrounded by a + symbol. So the string to the left
// would be false. The string will not be empty and will have at least one letter.
function SimpleSymbols(str) {
	var arrayOfChar = str.split("")
	var valid = true
	for (var i = 0; i < arrayOfChar.length; i++){
		if (/^[a-zA-Z]/.test(arrayOfChar[i])){
			if (arrayOfChar[i + 1] != "+" || arrayOfChar[i - 1] != "+")
				valid = false;
		}
	}
	return valid;
}
// console.log(SimpleSymbols("f++d+"));




// Using the JavaScript language, have the function CheckNums(num1,num2) take both
// parameters being passed and return the string true if num2 is greater than num1,
// otherwise return the string false. If the parameter values are equal to each other
// then return the string -1.
function CheckNums(num1,num2) { 
	if (num2 > num1)
		return true;
	else if (num2 === num1)
		return "-1";
	else
		return false;
}
console.log(CheckNums(3, 122))
//should have really used ternary here




function TimeConvert(num) { 
	var hours = Math.floor(num/60);
	var minutes = num%60
	return hours + ":" + minutes
}
console.log(TimeConvert(123))




function AlphabetSoup(str) { 
	return str.split("").sort().join("");
}
console.log(AlphabetSoup("coderbyte"))




function ABCheck(str) { 
	var str = str.split("");
	for (var i = 0; i < str.length; i++){
		if (/[ab]/.test(str[i]))
	}
}



