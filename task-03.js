const findBestEmployee = function (employees) {
  let arrayEmployees = Object.entries(employees);
  let bestName = arrayEmployees[0][0];
  let bestScore = arrayEmployees[0][1];
  for (let i = 1; i < arrayEmployees.length; i++) {
    let innerArrayEmployees = arrayEmployees[i];
    let name = innerArrayEmployees[0];
    let score = innerArrayEmployees[1];

    if (bestScore < score) {
      bestScore = score;
      bestName = name;
    }
    return bestName;
  }
};
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
