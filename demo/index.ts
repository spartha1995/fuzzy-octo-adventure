import * as express from 'express';
import * as SqlConnection  from './sql-connection/sqlconnection';
import * as migrateDB from './Repository/data.repository';
import * as EmployeeController from './Controllers/employee-controller';
import {EmployeeAC} from './Model/employee-model';

var app = express();
app.use(express.json());
var port = 8085;
migrateDB.MigratedDatabase();


app.get('/', function (request, response) {
    response.send("<b>Hello World !!</b>");
});

app.get('/dashboard', function (request, response) {
    response.send("<b>dashboard Page!!</b>")
});


app.get('/api/Fetchemployee', function (request, response) {
    EmployeeController.GetAllEmployee(response);
});

app.get('/api/employee/:id', function (request, response) {
    let id = +request.params.id;
    EmployeeController.GetEmployeeById(response, id);
});

app.post('/api/employee', function (request, response) {
    let body = request.body;
    let department: EmployeeAC = JSON.parse(JSON.stringify(body));
    EmployeeController.AddEmployee(response, department);
});
app.put('/api/employee', function (request, response) {
    let body = request.body;
    let department: EmployeeAC = JSON.parse(JSON.stringify(body));
    EmployeeController.UpdateEmployee(response, department);
});

app.listen(port);