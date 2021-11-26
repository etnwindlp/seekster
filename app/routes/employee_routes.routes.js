const employee = require('../controller/employee_ctl.controller.js');
const check = require('../middleware/seekster_mid.js');

//Set path
module.exports = function (app) {

    app.get('/employee', employee.employee_data);
    app.get('/count_employee', employee.count_employee);
    app.get('/count_employee_active', employee.count_employee_active);
    app.get('/count_employee_deactive', employee.count_employee_deactive);
    app.post('/insert_employee', [check.check_string_employee, check.check_null_employee], employee.insert_employee);
    app.post('/edit_employee', [check.check_string_employee, check.check_null_employee], employee.edit_employee);
    app.post('/delete_employee', [check.check_string_del_employee, check.check_null_del_employee], employee.delete_employee);

}
