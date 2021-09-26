function showSalary(users, age) {
  let newUsersStr = '';  

  let newUsers = users.filter(function(item) {
    return item.age <= age;
  });

  newUsers.forEach(function(item, index) {
    newUsersStr = newUsersStr + item.name + ', ' + item.balance + ( (index === newUsers.length - 1)  ? '' : '\n');  
  }) 
  
  return newUsersStr;
}