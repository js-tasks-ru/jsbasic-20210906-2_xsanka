function makeFriendsList(friends) {

  //создаю переменную под массив друзей
  let friendsArr = [];

  //добавляю друзей как элементы массива - строки
  friends.map(function(friend) {
    let friendOne = friend.firstName + ' ' + friend.lastName;
    friendsArr.push(friendOne);
  });


  //создаю элемент <ul>
  let ul = document.createElement('ul');
  let ulInnerContent = '';

  //создаю элементы <li> с содержимым из массива как строки
  friendsArr.forEach(function(item, i, arr) {
    let li = `<li>${item}</li>`;
    ulInnerContent = ulInnerContent + li;
  });

  //добавляю в ul li
  ul.innerHTML = ulInnerContent;

  return ul;
}

document.body.appendChild(makeFriendsList(friends));