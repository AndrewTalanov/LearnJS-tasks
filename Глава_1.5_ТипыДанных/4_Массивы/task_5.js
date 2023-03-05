// Задача 5

// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// Функция getMaxSubSum(arr) должна возвращать эту сумму.

// удивительно, но оно работает
function getMaxSubSum(arr) {

    let sum = 0;
    let oldSum = 0;

    for (let i = 0; i < arr.length; i++) {
        

        if (arr[i] > 0) {
            sum += arr[i];
        }

        else if (arr[i] < 0) {

            if (oldSum < sum) {
                oldSum = sum;
            }

            if ( (sum + arr[i] >= sum - arr[i-1])) {
                sum += arr[i];
            } else {
                sum = 0;
            }
        }
    }

    return sum > oldSum ? sum : oldSum;
}

console.log( "6 : " + getMaxSubSum([-1, 1, 1, 1, 1, -1, 1, 1, 1])); 
console.log( "5 : " + getMaxSubSum([-1, 2, 3, -9]));
console.log( "6 : " + getMaxSubSum([2, -1, 2, 3, -9]));
console.log( "11 : " + getMaxSubSum([-1, 2, 3, -9, 11]));
console.log( "100 : " + getMaxSubSum([100, -9, 2, -3, 5]));
console.log( "6 : " + getMaxSubSum([1, 2, 3]));
