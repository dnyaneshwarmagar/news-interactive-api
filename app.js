const express = require('express')
const app=express()
const port = process.env.PORT||3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',require('./routes/news'))

app.listen(port,()=> console.log("started"))