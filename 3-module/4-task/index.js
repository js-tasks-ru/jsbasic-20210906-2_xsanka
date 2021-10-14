function showSalary(users, age) { 

  let newUsers = users
  .filter(function(item) {
    return item.age <= age;
  })
  .map(function(item,i,arr) {
    return `${item.name}, ${item.balance}`;
  })
  .join('\n');
 
  return newUsers;
}