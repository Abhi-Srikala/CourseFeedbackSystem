const { Router, json } = require('express');

const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const bcrypt = require('bcrypt')
const db = mysql.createConnection({
    user:process.env.database_user,
    host:process.env.database_host,
    password:process.env.database_password,
    database:process.env.database
})


router.post('/signup',async (req,res) =>{
    let userRole = req.body.role;
    let userPassword = req.body.pass;
    let userID = req.body.id;
    console.log("id " +userID + " req id " + req.query.id + " pass " + userPassword  + " req " + JSON.stringify(req.body,null,2)); 
    const saltPassword = await bcrypt.genSalt(10);
    const securedPassword = await bcrypt.hash(userPassword,saltPassword);    
    var sql_statement = "INSERT INTO details (id,password,role) values ('"+userID +"','"+securedPassword +"','"+userRole + "')";
    
    db.query(sql_statement,(err ,result) => {
        if (err) {
            console.log('error inserting values' + err);
            res.status(404);            
        }else{
            console.log("data entered to details table");
            res.status(200).send(userRole);
        }
    })
})

router.post('/login',async (req,res) =>{   
    let userID = req.body.id;
    let userPass = req.body.pass;  
    const role = userID[0];    
    console.log("role is " + role + " pass is " + userPass);  
    let sql_statement = "SELECT * FROM details WHERE id = ? ";      
    db.query(sql_statement,[userID],async (err ,result) => {     
            if (err) {
                console.log('error getting users');
                return res.send('-2')
            }else{                
                 if (result.length == 0) {
                    console.log("user dosent exist!!");
                    return res.send('-1');
                }else(await bcrypt.compare(userPass,result[0].password,(error,response) => {
                    if (error) {
                        console.log(error);                        
                    }else{                        
                        if (response) {
                            console.log('login successfull');                                                                                        
                            return res.send('1');
                        }else{
                            console.log('wrong password!!');
                            return res.send('2')
                        }
                    
                }}))             
                
                
            } 
       })

})

router.post('/details',async (req,res) => {
    const userID = req.body.id;
    const userName = req.body.name;
    const userContactNo = req.body.contact_no;
    const userRole = req.body.role;    
    const userEmail = req.body.email;  
    console.log("user name " + userName);   
    if (userRole === "student") {
        sql_statement = "INSERT INTO student (s_id,s_name,s_email,s_contact_no) values (?,?,?,?)";
    } else if(userRole === "professor"){
        sql_statement = "INSERT INTO professor (p_id,p_name,p_email,p_contact_no) values (?,?,?,?)";
    }else{
        console.log("users role error or admin ");
    }
    
    
    db.query(sql_statement,[userID,userName,userEmail,userContactNo],(err ,result) => {
        if (err) {
            console.log('error inserting values' + err);
            return res.status(404);
        }else{
            console.log("values added");
            return res.status(200).json(result);
        }
    })
})

router.post('/feedback',async (req,res) =>{
    let rating = req.body.rating;
    let review= req.body.review;       
     
    var sql_statement = "INSERT INTO details (id,password,role) values ('"+userID +"','"+securedPassword +"','"+userRole + "')";
    
    db.query(sql_statement,(err ,result) => {
        if (err) {
            console.log('error inserting values' + err);
            res.status(404);            
        }else{
            console.log("data entered to details table");
            res.status(200).send(userRole);
        }
    })
})

router.get('/users',(req,res) =>{
    var sql_statement = "select * from  details ";
    //var values = [req.query.id,req.query.pass,req.query.role];
    db.query(sql_statement,(err ,result) => {
        if (err) {
            console.log('error inserting values' + err);
        }else{
            console.log("rows" + JSON.stringify(result,null,2));
            res.send(result)
        }
    })
})

module.exports = router;