function getMinMax(str) {
  let result = {};
  let arr = str
  .split(' ')
  .filter(item => !isNaN(item));
  
  result.min = Math.min.apply(null, arr);
  result.max = Math.max.apply(null, arr);
  return result;
}