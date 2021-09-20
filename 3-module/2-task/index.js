function filterRange(arr, a, b) {
  let newArr = arr.filter(item => item >= 1 && item <= b);
  return newArr;
}
