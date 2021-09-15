function ucFirst(str) {
  if (str.length > 0) {
    let newStroke = str[0].toUpperCase() + str.slice(1,str.length);
    return newStroke;  
  } else {
    return '';
  }
}