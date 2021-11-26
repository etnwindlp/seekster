const con = require('../config/condb_test.config.js');
const fs = require('fs');


exports.employee_data = async (req, res) => {

    var employee_data = [];

    let sql = "SELECT * FROM testdb.employee WHERE status = 'A';";

    con.query(sql, function (err, res_data, fields) {


        if (err) throw err => {
            res.status(500).send("Error -> " + err);
        };

        var emp_map = res_data.map(item => [item.id, item.name, item.username, item.email,item.street, item.suite, item.city, item.zipcode, item.phone, item.website]);

        emp_map.forEach((row) => {

            let employee = {
                id: row[0],
                name: row[1],
                username: row[2],
                email: row[3],
                address: {street: row[4], suite: row[5], city: row[6], zipcode: row[7]},
                phone: row[8],
                website: row[9],
            };
            
            employee_data.push(employee);


        });

        res.send({
            employee_data
        });

    });
};

exports.count_employee = async (req, res) => {

    let sql = "SELECT count(*) AS C_EMP FROM testdb.employee";

    con.query(sql, function (err, res_data, fields) {


        if (err) throw err => {
            res.status(500).send("Error -> " + err);
        };

        res.send({
            res_data
        });

    });
};

exports.count_employee_active = async (req, res) => {

    let sql = "SELECT count(*) AS C_EMP FROM testdb.employee WHERE status = 'A';";

    con.query(sql, function (err, res_data, fields) {


        if (err) throw err => {
            res.status(500).send("Error -> " + err);
        };

        res.send({
            res_data
        });

    });
};


exports.count_employee_deactive = async (req, res) => {

    let sql = "SELECT count(*) AS C_EMP FROM testdb.employee WHERE status = 'D';";

    con.query(sql, function (err, res_data, fields) {


        if (err) throw err => {
            res.status(500).send("Error -> " + err);
        };

        res.send({
            res_data
        });

    });
};

exports.insert_employee = async (req, res) => {

    name = req.body.name;
    username = req.body.username;
    email = req.body.email;
    street = req.body.street;
    suite = req.body.suite;
    city = req.body.city;
    zipcode = req.body.zipcode;
    phone = req.body.phone;
    website = req.body.website;

    let sql = "INSERT INTO testdb.employee (name,username,email,street,suite,city,zipcode,phone,website,status,create_dt) ";
    sql += "VALUES ('" + name + "' ,'" + username + "','" + email + "' ,'" + street + "','" + suite + "','" + city + "' ,'" + zipcode + "','" + phone + "' ,'" + website + "', 'A', NOW())";

    con.query(sql, function (err, ins_emp, fields) {

        if (err) throw err => {
            res.status(500).send("Error -> " + err);
        };

        // const ins_emp_data = JSON.parse(JSON.stringify(ins_emp));
        const ins_emp_data = "OK";
        // console.log(req.body);
        res.send(ins_emp_data);

    });

};

exports.edit_employee = async (req, res) => {

    name = req.body.name;
    username = req.body.username;
    email = req.body.email;
    street = req.body.street;
    suite = req.body.suite;
    city = req.body.city;
    zipcode = req.body.zipcode;
    phone = req.body.phone;
    website = req.body.website;

    let sql = "UPDATE testdb.employee SET name = '" + name + "',email = '" + email + "',street = '" + street + "',suite = '" + suite + "',city = '" + city + "',zipcode = '" + zipcode + "',phone = '" + phone + "',website = '" + website + "' ";
    sql += "WHERE username = '" + username + "' ";

    con.query(sql, function (err, ins_emp, fields) {

        if (err) throw err => {
            res.status(500).send("Error -> " + err);
        };

        // const edit_emp_data = JSON.parse(JSON.stringify(ins_emp));
        const edit_emp_data = "OK";
        // console.log(req.body);
        res.send(edit_emp_data);

    });

};

exports.delete_employee = async (req, res) => {

    username = req.body.username;

    let sql = "UPDATE testdb.employee SET status = 'D' ";
    sql += "WHERE username = '" + username + "' ";

    con.query(sql, function (err, ins_emp, fields) {

        if (err) throw err => {
            res.status(500).send("Error -> " + err);
        };

        // const del_emp_data = JSON.parse(JSON.stringify(ins_emp));
        const del_emp_data = "OK";
        // console.log(req.body);
        res.send(del_emp_data);

    });

};
