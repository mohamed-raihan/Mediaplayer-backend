//import json server library
const jsonServer = require("json-server"); //require is used to import

//create server using create function
const mediaplayerServer = jsonServer.create(); // now the server name is mediaplayerServer

//create path for datab.json file
const router = jsonServer.router("datab.json"); // connecting index.js to datab.json

//create middleware to convert json into js
const middleware = jsonServer.defaults(); // middleware is a function which has the ability to contole request respons cycle

//use middleware and router in server using.use
mediaplayerServer.use(middleware);
mediaplayerServer.use(router);

//set up port for the server
const port = 4000 || process.env.PORT // to choose other port if 4000 is used by another applicattion while hosting

//run the server 
mediaplayerServer.listen(port,()=>{console.log('mediaplayerServer running successfully');})
