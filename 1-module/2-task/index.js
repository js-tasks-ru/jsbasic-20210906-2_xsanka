/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {  
  if (name == null || name.length < 4 ) {
    console.log(2, name);
    return false;
  }
  for (let char of name) {
    if (char == ' ') {
      console.log(1);
      return false;
    }    
  }
  return true;
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
