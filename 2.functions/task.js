function getArrayParams(...arr) {
	let min = [0];
	let max = [0];
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		if (arr[i] > max) {
			max = arr[i];
		} else if (arr[i] < min) {
			min = arr[i];
		}
	}
	let avg = +(sum / arr.length).toFixed(2);
	return {
		min: min,
		max: max,
		avg: avg
	}
}
getArrayParams(10, 2, 5);

function summElementsWorker(...arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}


function differenceMaxMinWorker(...arr) {
	let min = [0];
	let max = [0];
	if (arr.length === 0) {
		return 0;
	}
	for (let i = 0; i < arr.length; i++) 
    if (arr[i] < min) {
		min = arr[i];
	} else if (arr[i] > max) {
		max = arr[i];
	}
differenceMaxMin = max - min;
return differenceMaxMin;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = arr[0];
	let sumOddElement = arr[0];
	for (let i = 0; i < arr.length; i++) {
		let value = arr[i];
		if (value % 2) {
			sumOddElement += value;
		} else {
			sumEvenElement += value;
		}
	}
	difference = sumEvenElement - sumOddElement
	return difference;
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = [0];
	let countEvenElement = [0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement += 1;
		}
	}
	return sumEvenElement / countEvenElement;
}

const arr = [
	[10, 10, 11, 20, 10],
	[67, 10, 2, 39, 88],
	[72, 75, 51, 87, 43],
	[30, 41, 55, 96, 62]
];
makeWork(arr, summElementsWorker)

function makeWork(arrOfArr, func) {
	let maximum = func(...arrOfArr[0]);
	for (let i = 1; i < arrOfArr.length; i++) {
		const funcResult = func(...arrOfArr[0]);
		if (funcResult > maximum) {
			maximum = funcResult;
		}
	}
	return maximum;
}