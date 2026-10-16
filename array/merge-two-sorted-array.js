function mergeTwoSortedArray(arr1, arr2) {
  let i = 0;
  let j = 0;
  let arr3 = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      arr3.push(arr1[i]);
      (i++, j++);
    } else if (arr1[i] < arr2[j]) {
      arr3.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      arr3.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    arr3.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    arr3.push(arr2[j]);
    j++;
  }

  return arr3;
}

console.log(mergeTwoSortedArray([1, 2, 3, 4], [2, 3, 4, 5, 6]));
