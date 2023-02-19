const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();

// Define your routes and middleware here

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"nandu",
    database:"registration"
});
connection.connect(function(err){
    if(err) throw err;
    console.log("connected");
});
app.post('/NEXT', (req, res) =>{
    const newPerson = {
        First_name: 'John',
        Last_name: 'Doe',
        Date_Ofbirth: '1990-01-01',
        Email_Id: 'johndoe@gmail.com',
        FatherFirst_name: 'Praa',
        FatherLast_name: 'Doe',
        MotherFirst_name: 'Aiii',
        MotherLast_name: 'Doe',
        gender_name: 'Male',
        Nationality: 'indian',
        Street_address: 'CA',
        City_address: 'Anytown',
        Country: 'india',
        Phone_no: '7377756071'

    };

    connection.query('INSERT INTO `personaldetails` SET ?', newPerson, (err, res) => {
        if (err) throw err;
        console.log(`New person added to the database with ID: ${res.insertId}`);
    });
})

app.post('/NEXT', (req, res) => {
    const newPerson2 = {
        HSC_institutename:'mghs', 
        HSC_Board: 'bse',
        HSC_score: '75', 
        SSC_institutename: 'Royal',
        SSC_Board: 'chse',
        SSC_score: '65', 
        Current_coursename: 'mba', 
        Current_instituename: 'aab', 
        Overall_percentage: '76',
        Backlog: 'no'

    };

    connection.query('INSERT INTO `educationdetails` SET ?', newPerson, (err, res) => {
        if (err) throw err;
        console.log(`New person added to the database with ID: ${res.insertId}`);
    });
})


