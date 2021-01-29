# database-project-4th-sem

## Guide

## Node.js setup

First clone this project directory.

```https://github.com/indunil-19/database-project-4th-sem```

After that go to the project directory and run npm install. It is better if you do it every time you pull any changes for the repo

```cd directory/project 
   npm install 
 ```
   
   
create database jupitor on your localhost

change connection.js with your mysql password and port and user name
```
const con =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:'3306',
    database:'Jupitor'
})

 ```
 Then use nodemon or node to serve the pages.Nodemon is recommended
 
 ```
 nodemon start # If nodemon is installed
 node index.js # otherwise
```

Now visit http://localhost:8080/ and confirm that site is running.


 
 
