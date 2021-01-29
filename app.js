const express=require('express');
const app=express();
const session=require("express-session")
const bodyParser=require("body-parser")
const FileStore=require('session-file-store')(session)
const path=require('path')


//use .env file for  our process
require('dotenv').config();


app.set('view engine', 'ejs');

app.use(express.json())




app.use(session({ 
  
    // It holds the secret key for session 
    store:new FileStore(), 
  
    // Forces the session to be saved 
    // back to the session store 
    resave: false, 
    secret: '123456xxx',
    // Forces a session that is "uninitialized" 
    // to be saved to the store 
    saveUninitialized: false,
    cookie: {maxAge:30*3600*24}
}))

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'/')));
app.use(require('./routes'))

app.listen(5000, function(){
    console.log("app is working on port 5000")
})