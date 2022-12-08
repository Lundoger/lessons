"use strict"

//Задача 4

// if (2 > 1) {
// 	function showMessage() {
// 		console.log('Сообщение');
// 	}
// }
// showMessage();

let showMessage
if (true) {
	showMessage = function () {
		console.log('Сообщение');
	}
}
showMessage();

//=============================ARRAY===============================================================

//Задача 2
let users = ["Ваня", "Иштван",];
users.push("Оля");
users.forEach(function(item, index) {
	if (item === "Иштван") {
		users[index] = "Петя";
	}
});
console.log(users);

let del = users.shift();
console.log(del);

users.unshift("Маша", "Паша");
console.log(users);

//Задача 3
console.log('===============================================================');


let arr = ["Ваня", "Иштван", "Оля",];

let remove = arr.splice(1, 1);
console.log(remove);

//Задача 4
console.log('===============================================================');

let str = "Ваня,Иштван,Оля"
let someArr = str.split(',');
console.log(someArr);

//Задача 5
console.log('===============================================================');

let arrTwo = [9, 2, 8];

let reduceValue = arrTwo.reduce( function (previousValue, item, index) {
	console.log(previousValue);
	return previousValue;
});// тк тут не указано начальное значение previousValue то начальное значение previousValue будет = первому элементу масива в нашем случае - 9

//=========================DOM===================================================================

//Задача 1
console.log('===============================================================');

const dataSayHi = document.querySelector('[data-say-hi]');
console.log(dataSayHi);
//Честно, я не понял это предложение "и прочитать значение атрибута"
//точнее я не совсем понял что должен сделть, можете сказать пару слов об этом(

//Задача 2
console.log('===============================================================');

function searchingItemWithText(itemText) {
	let listItem;
	const listElements = document.querySelectorAll('li'); 
	listElements.forEach((element) => {
		if (element.textContent === itemText) {
			listItem = element;
		};
	});
	if (listItem) {
		return listItem;
	}else if(listItem == undefined) {
		console.log(`элемент с текстом ${itemText} не найден`);	
	};
}

const item = searchingItemWithText("Йончи");
console.log(item);

//Задача 3
console.log('===============================================================');

const htmlCollection = document.getElementsByClassName("like");
console.log(htmlCollection);

//Задача 4 описана в хтмл

//=========================SCROLL===================================================================

//Задача 1
console.log('===============================================================');

const mainElement = document.documentElement;
const mainElementClientWidth = mainElement.clientWidth;
const windowInnerWidth = window.innerWidth;
const scrollBarWidth = windowInnerWidth - mainElementClientWidth;
console.log(scrollBarWidth);

//Задача 2
console.log('===============================================================');

function setScrollTo() {
	window.scrollTo({
		top: 1000,
		left: 0,
		behavior: "smooth",
	})
}
setTimeout(setScrollTo, 1000);

//Задача 3
console.log('===============================================================');

const element = document.querySelector('.second-lesson');
const positionElementTop = element.getBoundingClientRect().top;
const positionElementLeft = element.getBoundingClientRect().left;
const documentPositionElementTop = parseInt(positionElementTop  + window.pageYOffset);//простите, но меня сильно бесили 4 цыфри после запятой
const documentPositionElementLeft = positionElementLeft  + window.pageXOffset; //сделал это только для практики, знаю что positionElementLeft === documentPositionElementLeft === 0

const documentElementPosition = [documentPositionElementTop, documentPositionElementLeft];
console.log(documentElementPosition);

//-----------

const item$ = document.querySelector('.item__image--third');
const itemPositionTop = item$.getBoundingClientRect().top;
const itemPositionLeft = item$.getBoundingClientRect().left;
const itemDocumentPositionTop = parseInt(itemPositionTop  + window.pageYOffset);//тут вообще 6 после запятых, я знаю что так делать не нужно, единоразовый каприз, больше не повторится
const itemDocumentPositionLeft = itemPositionLeft  + window.pageXOffset;

const itemDocumentPosition = [itemDocumentPositionTop, itemDocumentPositionLeft];
console.log(itemDocumentPosition);


//-----------

const title = document.querySelector('.item__title--first');
const titlePositionTop = title.getBoundingClientRect().top;
const titlePositionLeft = title.getBoundingClientRect().left;
const titleDocumentPositionTop = titlePositionTop  + window.pageYOffset;
const titleDocumentPositionLeft = titlePositionLeft  + window.pageXOffset;

const titleDocumentPosition = [titleDocumentPositionTop, titleDocumentPositionLeft];
console.log(titleDocumentPosition);