// ### Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.
// ```
//  const employees = [
//             { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//             { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//             { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//             { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
//         ];
// ```




function totalSalary(employees) {

  if (!Array.isArray(employees)) {
    return 'Please provide a object type array and experience,increment, starting value should be number'
  }

   
  else {
    
  let totalSalary = 0;

  for (let i = 0; i < employees.length; i++) {

if (typeof employees[i].experience !== 'number' || typeof employees[i].increment !== 'number' || typeof employees[i].starting !== 'number'){
  return 'Experience,increment, starting value should be number';
    
  }
 else if ( employees[i].experience <0 || employees[i].increment < 0 ||  employees[i].starting < 0){
  return 'Experience,increment, starting value should be a valid positive number';
    
  }

    
     totalSalary = totalSalary + (employees[i].experience * employees[i].increment + employees[i].starting);

    }
    return totalSalary;
}

  
}



const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
        
const result = totalSalary(employees);
console.log(result);