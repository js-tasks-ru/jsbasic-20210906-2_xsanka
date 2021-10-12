function camelize(str) {
  return str.split('-').map(function(item, i){
    if (i === 0) {      
      if (item === '') {
        return '';
      } else {
        return item;
      }
    } else {      
      let str = item[0].toUpperCase() + item.slice(1,item.length);      
      return str;
    }      
  }).join('');
}

// function camelize(str) {
//   let newStrArr = str.split('-');
//   let newStr = '';

//   newStrArr.map(function(item, i){
//     if (i === 0) {
//       newStr = newStr + item;
//     }
//     if (i > 0) {
//       newItem = item[0].toUpperCase() + item.slice(1,item.length);
//       newStr = newStr + newItem;
//     }
//   });

//   return newStr;
// }
