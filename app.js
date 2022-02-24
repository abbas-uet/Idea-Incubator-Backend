const express=require('express');
const bodyparser = require('body-parser')
const multer = require('multer')
const path = require('path')

//Imports for Connecting to Databases
require('dotenv').config();
const port=process.env.PORT||5000;
const db=require('./src/models');

const app = express();
app.use(express.static("./public"))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
}))



//All Routes Here
const routes=require('./src/Routers');

const main=async () =>
{
    try {
        await db.sequelize.sync().then(()=>{
            app.use('/',routes);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


main();



app.listen(port,process.env.DB_HOST,(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Connected at Port http://localhost:5000/");
    }
})






