function showSalary(users, age) {
  let newUsers = '';

  users.forEach (function(item, index) { 
    if (item.age <= age) {      
      newUsers = newUsers + item.name + ', ' + item.balance + ( (index == (users.length - 1) ) ? '' : '\n');
    }    
  }) 

  return newUsers;
}