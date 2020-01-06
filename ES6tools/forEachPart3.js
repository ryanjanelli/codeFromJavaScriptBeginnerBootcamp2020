// more comparing for loop to forEach method

var employees = [
    {name: 'Beth', title: 'manager', salary: 90000},
    {name: 'Bill', title: 'developer', salary: 72000},
    {name: 'Charlie', title: 'sales rep', salary: 100000}
];

for (i = 0; i < employees.length; i++) {
    console.log(`${i + 1}: ${employees[i].name} is a ${employees[i].title} who makes ${employees[i].salary} dollars a year.`);
};

employees.forEach(function(employee, index) {
    console.log(`${index + 1}: ${employee.name} is a ${employee.title} who makes ${employee.salary} dollars a year.`);
});