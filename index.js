const employee = {
    name: "Sam",
    address: "11 Broadway"
}

function updateEmployeeWithKeyAndValue(employee, name, address) {
    const newObj = { ...employee };
    newObj[name] = address;
    return newObj;

}
console.log(employee.newObj)

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, address) {
    employee[name] = address;
    return employee;
}

function deleteFromEmployeeByKey(employee, name) {
    delete { ...employee };
    return {};
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name;
    return employee;
}