// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

let inputAge = prompt('Введіть ваш вік');

if (inputAge >= 0 && inputAge <= 11) {
  alert('Ви дитина');
} else if (inputAge >= 12 && inputAge <= 17) {
  alert('Ви підліток');
} else if (inputAge >= 18 && inputAge <= 59) {
  alert('Ви дорослий');
} else if (inputAge >= 60) {
  alert('Ви пенсіонер');
}

// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

let inputNumber = prompt('Введіть число від 0 до 9');

if (inputNumber >= 0 && inputNumber <= 9) {
  alert(`Ваше число ${inputNumber} спецсимвол ${')!@#$%^&*('.charAt(inputNumber)}`);
}

// Підрахуй суму всіх чисел в заданому користувачем діапазоні.

let startNumber = prompt('Введіть початкове число');
let endNumber = prompt('Введіть кінцеве число');

if (isNaN(startNumber) || isNaN(endNumber)) {
  alert('Ви ввели не число');
  startNumber = prompt('Введіть початкове число');
  endNumber = prompt('Введіть кінцеве число');
} else {
  let min = Math.min(startNumber, endNumber);
  let max = Math.max(startNumber, endNumber);

  startNumber = min;
  endNumber = max;
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }

  alert(`Сума чисел від ${startNumber} до ${endNumber} дорівнює ${sum}`);
}

// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

let inputNum = prompt('Введіть п’ятирозрядне число');

if (inputNumber.length !== 5) {
  alert('Ви ввели не п’ятирозрядне число');
  inputNum = prompt('Введіть п’ятирозрядне число');
} else {
  let reversedNum = inputNum.split('').reverse().join('');
  if (inputNum === reversedNum) {
    alert('Ваше число паліндром');
  } else {
    alert('Ваше число не є паліндромом');
  }
}

// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

let purchaseSum = prompt('Введіть суму покупки');

if (purchaseSum < 200) {
  alert(`Сума до оплати зі знижкою: ${purchaseSum}`);
} else if (purchaseSum >= 200 && purchaseSum < 300) {
  alert(`Сума до оплати зі знижкою: ${purchaseSum * 0.97}`);
} else if (purchaseSum >= 300 && purchaseSum < 500) {
  alert(`Сума до оплати зі знижкою: ${purchaseSum * 0.95}`);
} else if (purchaseSum >= 500) {
  alert(`Сума до оплати зі знижкою: ${purchaseSum * 0.93}`);
}

// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

let daysOfWeek = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П' + 'ятниця', 'Субота', 'Неділя'];

let i = 0;
while (i < daysOfWeek.length) {
  alert(`День тижня: ${daysOfWeek[i]}. Хочеш побачити наступний день?`);
  i++;
  if (i === daysOfWeek.length) {
    break;
  }
}
