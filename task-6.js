let input = 0;
let total = 0;
input = prompt("Введите число");
total += input;
if (input.isNaN) {
  console.log(alert("Было введено не число, попробуйте еще раз"));
} else {
  console.log(alert(`Общая сумма чисел равна ${total}`));
}
// console.log(alert(`Общая сумма чисел равна ${total}`));
