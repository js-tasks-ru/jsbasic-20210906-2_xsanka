function camelize(str) {
  let newStrArr = str.split('-');
  let newStr = '';

  newStrArr.forEach(function(item, i) {
    if (i === 0) {
      newStr = newStr + item;
    }
    if (item != '' && i > 0) {      
      newItem = item[0].toUpperCase() + item.slice(1,item.length);
      newStr = newStr + newItem;     
    }
  });

  return newStr;
}
