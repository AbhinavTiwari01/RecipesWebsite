import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Routes from './Routing/routes.js'
import Connection  from './database/db.js';

const app= express();

app.use(bodyParser.json({extended: true}));

app.use(bodyParser.urlencoded({extended: true}));

app.use(cors())

app.use('/', Routes);

const username= 'user';
const password= 'mycrudapplication';

Connection(username, password);

app.listen(8080, ()=> {
    console.log("Server is started now");
})
