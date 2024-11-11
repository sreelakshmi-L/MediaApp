// 1 import json server
const jsonServer = require('json-server')

//2 create server application using json server
const mediaAppServer = jsonServer.create()

//3 create middleware used by json server
const middleware =jsonServer.defaults()

//4 create router : setup router for db.json  file
const router = jsonServer.router('db.json')

//5 applying middleware to server
mediaAppServer.use(middleware)

//6 applying router to server
mediaAppServer.use(router)

//7 define port 
const PORT =3000

//8 starting the server
mediaAppServer.listen(PORT,()=>{
    console.log("media app server started on the PORT"+PORT);
    
})