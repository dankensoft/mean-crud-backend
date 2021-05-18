const { Router } = require('express');
const router = Router();

const employeesController = require('../controllers/employees.controller.js');

// Rutas
// Obteniendo todos los Empleados
router.get('/', employeesController.getEmployees);

// Creando un Empleado
router.post('/', employeesController.createEmployee);

// Obteniendo un sólo Empleado
router.get('/:id', employeesController.getEmployee);

// Actualizando un Empleado
router.put('/:id', employeesController.editEmployee);

// Eliminando un Empleado
router.delete('/:id', employeesController.deleteEmployee);

module.exports = router;