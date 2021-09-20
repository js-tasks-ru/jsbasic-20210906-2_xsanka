function getMinMax(str) {
  let arr = str.split(' ');
  let newArr = [];
  let result = {};
  arr.forEach(function(item, i, arr) {
      let newItem = Number(item);
      if (!isNaN(newItem)) {
        newArr.push(newItem);
      }    
  });
  result.min = Math.min.apply(null, newArr);
  result.max = Math.max.apply(null, newArr);
  return result;
}