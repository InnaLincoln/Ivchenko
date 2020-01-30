// Дан массив, содержащий положительные и отрицательные числа. Заменить все элементы массива на противоположные по знаку.

let arr = [1, -5, 0, 3, -4];

let revertedBySignArray = arr.map(item => item * (-1));
console.log(revertedBySignArray);


// Заменить четные элементы нулями

let revertedArr = array => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 1 === 0) {
            array[i] = 0;
        }
    }
    console.log(array);
};
revertedArr(arr);


// Все элементы массива поделить на значение наибольшего элемента этого массива.

let maxValueOfArray = Math.max.apply(null, arr);
let reducedArray = arr.map(item => item / maxValueOfArray);
console.log(reducedArray);


//Поменять местами минимальный и максимальный элементы массива
//Мне не нравится это решение

let maxValue = Math.max.apply(null, arr);
let minValue = Math.min.apply(null, arr);
let indexOfMax = arr.indexOf(maxValue);
let indexOfMin = arr.indexOf(minValue);
arr[indexOfMax] = minValue;
arr[indexOfMin] = maxValue;


//Вывести элементы массива, которые больше среднего арифметического

let sum = arr.reduce((acc, currentValue) => acc + currentValue);
arr.map(item => {
    if (item > sum / 2) {
        console.log(item);
    }
});



//Дан массив целых чисел. Проверить, есть ли в нем одинаковые элементы.

let arrNew = [1, -5, 0, 3, -4, 1, -4];

for (let i = 0; i < arrNew.length; i++) {
    for (let j = i + 1; j < arrNew.length; j++) {
        if (arrNew[i] === arrNew[j]) {
            console.log('Duplicated number is' + arrNew[i]);
        }
    }
}



