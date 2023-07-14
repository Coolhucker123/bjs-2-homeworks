"use strict";

function solveEquation(a, b, c) {
let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  let x = (-b + Math.sqrt(d)) / (2 * a);
  let y = (-b - Math.sqrt(d)) / (2 * a);
  if (d < 0) {
  return arr;
  } else if (d === 0) {
  x = -b / (2 * a);
  arr.push(x);
  } else {
    arr.push(x, y);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 1200;
  let credit = amount - contribution;
  let monthPay = credit * (percent + (percent / ((Math.pow((1 + percent), countMonths)) - 1)));
  let total = monthPay * countMonths;
  return parseFloat(total.toFixed(2));
}
console.log(calculateTotalMortgage(15, 0, 10000, 36));