//Check string employee
exports.check_string_employee = (req, res, next) => {

    name = req.body.name;
    username = req.body.username;
    email = req.body.email;
    street = req.body.street;
    suite = req.body.suite;
    city = req.body.city;
    zipcode = req.body.zipcode;
    phone = req.body.phone;
    website = req.body.website;

    if (checkstring(name) && checkstring(username) && checkstring(email) && checkstring(street) && checkstring(suite) && checkstring(city) && checkstring(zipcode) && checkstring(phone) && checkstring(website) == false) {
        return res.send('data not string!');
    } else {
        next();
    }

}

//Check null employee
exports.check_null_employee = (req, res, next) => {

    name = req.body.name;
    username = req.body.username;
    email = req.body.email;
    street = req.body.street;
    suite = req.body.suite;
    city = req.body.city;
    zipcode = req.body.zipcode;
    phone = req.body.phone;
    website = req.body.website;


    if (check_null(name) || check_null(username) || check_null(email) || check_null(street) || check_null(suite) || check_null(city) || check_null(zipcode) || check_null(phone) || check_null(website) == true) {
        return res.send('Please insert data!');
    } else {
        next();
    }

}

//Check string delete employee
exports.check_string_del_employee = (req, res, next) => {

    username = req.body.username;

    if (checkstring(username) == false) {
        return res.send('data not string!');
    } else {
        next();
    }

}

//Check null delete employee
exports.check_null_del_employee = (req, res, next) => {

    username = req.body.username;

    if (check_null(username) == true) {
        return res.send('Please insert data!');
    } else {
        next();
    }

}


//Check be string
function checkstring(cstring) {
    return typeof cstring === 'string'; //return true or false if true = string
}

//Check if null
function check_null(cnull) {
    if (cnull == null || cnull == '') {
        return true;
    } else {
        return false;
    }
}
