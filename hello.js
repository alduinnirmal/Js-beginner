var luckyNumbers = [3, 5, 7, 9];

//Halving the elements
var luckyNumbers_half = luckyNumbers.map(function(element) {
	return element/2;
});

//Incrementing by 10
var luckyNumbers_ten = luckyNumbers.map(function(element) {
	return element + 10;
});

console.log(luckyNumbers_half);
console.log(luckyNumbers_ten);
