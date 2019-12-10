"use strict";
let input;
const numbers = [];
let total = 0;
while (input !== null) {
  input = prompt("Введите число");
  if (Number.isNaN(Number(input))) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  } else {
    numbers.push(Number(input));
  }
}
numbers.pop(-1);
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
alert(`Общая сумма чисел равна ${total}`);
