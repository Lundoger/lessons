//Уроки 1-2 описаны в хтмл

//Урок №3

//Задача 1

let num = 0;

while (num <= 5) {
	console.log(num);
	num++
}
console.log('Конец первого цыкла');

let num2 = 0; 

do {
	console.log(num2);
	num2++
}while(num2 <=5)
console.log('Конец второго цыкла');

for (let i = 0; i<=5; i++) {
	console.log(i);
}
console.log('Конец третьего цыкла');

//Задача 2 описана в хтмл

//Задача 3
// for (let num = 0; num < 3; num++) {
// 	console.log(`Число: ${num}`);
// }
let someNum = 0;
while (someNum < 3) {
	console.log(`Число: ${someNum}`);
	someNum++
}

//Задача 4
breakPoint:for (let num = 0; num < 2; num++) {
	for (let size = 0; size < 3; size++) {
		if (size === 1) {
			break breakPoint;
		}
		console.log(size);
	}
}

//==============================================================================================================
//Урок №4

//Задача 1
let numOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;
console.log(numOne);

//Задача 2
let value = parseFloat("135.58px");
console.log(value);

//Задача 3
let someValue = 58 + "Фрилансер";
if (isNaN(someValue)) {
	console.log('Результат выражения NaN');
}

//Задача 4
let numMax = Math.max(10, 58, 39, -150, 0)
console.log(numMax);

//Задача 5
let rounding = Math.floor(58.858);
console.log(rounding);

//============================================================================================================
//Урок №5

//Задача 1 описана в хтмл

//Задача 2
let fls = "фрилансер";
console.log(fls[5]);

//Задача 3 описана в хтмл

//Задача 4
let txt = "фрилансер";
console.log(txt.toLocaleUpperCase());

//Задача 5
let text = "фрилансер";
console.log(text.slice(3, 6));

//Задача 6 описана в хтмл