// Write your solution in this file!

const employee = {
    name: 'Sam',
    streetAddress: '21 Broadway'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = Object.assign({}, employee, { [key]: value })
    return newObj;
}

// console.log(employee)

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newObj = {
        ...employee
    }
    delete newObj[key]
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}

