import express from 'express';
import * as http from 'http';
import * as path from 'path';
import { apiSetup as setupApi } from "../api/apiSetup";

let clientPath = path.join(__dirname, '..');
console.log("API serving " + clientPath);

var app = express();
app.set('port', process.env.PORT || 3006)
app.use(express.json()) // for parsing application/json
app.use(express.static(clientPath));
setupApi(app);
var server = http.createServer(app);

server.listen(app.get('port'), function () {
    console.log('Web server listening on http://localhost:' + app.get('port') + "/");
})

