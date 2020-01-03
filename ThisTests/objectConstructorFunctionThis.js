// understanding this and bind

function Department(formalName, employeesArray) {
    this.formalName = formalName;
    this.employees = employeesArray;
    this.listNames = employeesArray.reduce(function(a, b) {
        if (b === employeesArray[employeesArray.length -1]) {
        return a + ' and ' + b; }
        else {return a + ', ' + b}
    })
    this.aboutDepartment = function() {
        return `${this.formalName} has ${this.employees.length} employees. Their names are ${this.listNames}.`
    }
}

var digitalMediaServices = new Department('Digital Media Services', ['Kevin', 'Donna', 'Sean', 'Ryan', 'Mike', 'Kaycee'])

var sales = new Department('Sales', ['Mark', 'Jim', 'Lee', 'Charlie', 'Chip', 'Dean', 'Sheri', 'Matt', 'Eric'])

console.log(digitalMediaServices.aboutDepartment());
console.log(sales.aboutDepartment());
