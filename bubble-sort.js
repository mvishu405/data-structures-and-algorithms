// Medium.com

// 1.In an unsorted array of 5 elements, start with the first two elements and sort them in ascending order. (Compare the element to check which one is greater).
// 2.Compare the second and third element to check which one is greater, and sort them in ascending order.
// 3.Compare the third and fourth element to check which one is greater, and sort them in ascending order.
// 4.Compare the fourth and fifth element to check which one is greater, and sort them in ascending order.
// 5.Repeat steps 1–5 until no more swaps are required.

// 1.Some Characteristics of Bubble Sort:
// 2.Large values are always sorted first.
// 3.It only takes one iteration to detect that a collection is already sorted.
// 4.The best time complexity for Bubble Sort is O(n). The average and worst time complexity is O(n²).
// 5.The space complexity for Bubble Sort is O(1), because only single additional memory space is required.

// Algorithm
// 1.[1, -0, 5, 8, 2, -30]
// 2.compare i index value to i+1 index value [important part] => forexample 0 index value to 0+1 index value
// 3.if 0 index value is greated with any other index value then swap
// 4.if less do not swap

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

function bubbleSortDesc(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

// Ascending sort
const unsortedArr = [1, -0, 5, 2, -30];
bubbleSort(unsortedArr);
console.log(unsortedArr);

// Descending sort
const unsortedArr1 = [1, -0, 5, 2, -30];
bubbleSortDesc(unsortedArr1);
console.log(unsortedArr1);

// Medium.com example
// https://medium.com/karuna-sehgal/an-introduction-to-bubble-sort-d85273acfcd8
const array = [2, 5, 4, 3, 1];

function bubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

console.log(bubbleSort(array.slice())); // => [ 1, 2, 3, 4, 5 ]
