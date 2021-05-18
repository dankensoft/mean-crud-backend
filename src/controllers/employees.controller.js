const employeeController = {}

const Employee = require('../models/Employee.model');

employeeController.getEmployees = async(req, res) => {
    // res.send('Get Employees');
    const employees = await Employee.find()
    res.json(employees)
}
employeeController.createEmployee = async(req, res) => {
    // res.send('Create Employee');
    const newEmployee = new Employee(req.body)
    await newEmployee.save()
    res.send({ message: 'Employee Created...' })
}
employeeController.getEmployee = async(req, res) => {
    // res.send('Get Employee');
    const employee = await Employee.findById(req.params.id)
    res.send(employee)
}
employeeController.editEmployee = async(req, res) => {
    // res.send('Edit Employee');
    await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.json({ status: 'Employee Updated...' })
}
employeeController.deleteEmployee = async(req, res) => {
    // res.send('Delete Employee');
    await Employee.findByIdAndDelete(req.params.id)
    res.json({ status: 'Employee Deleted...' })
}

module.exports = employeeController;