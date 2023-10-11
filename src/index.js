const express = require('express')
const app = express()
const path = require("path")

require("./db/conn.js");
const Register = require("./models/registers.js")

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended : false}));

app.get("/" , (req ,res) => {
    res.sendFile(path.join(__dirname , "../public/register.html"));
})
app.get("/login.html" , (req ,res) => {
    res.sendFile(path.join(__dirname , "../public/login.html"));
})

app.post("/register" , async (req ,res) => {
    
    const registernew = new Register({
        firstname : req.body.fname,
        lastname : req.body.lname,
        gender : req.body.gender,
        password : req.body.password,
        Email : req.body.email,
        phone : req.body.phone
    })

    const registered = await registernew.save();
    // res.sendFile(path.join(__dirname, "../public/index.html"))
    res.send("welcome")
})

app.post("/login" , async (req ,res) => {

    try{
        password = req.body.password;
        email = req.body.email;

        const usermail = await Register.findOne({ Email : email});
        if(usermail.password === password){
            res.sendFile(path.join(__dirname , "../public/index.html"));
        }else{
            res.send("Wrong Password!!")
        }
   } catch(e){
    res.status(200).send("Email Not found!!")
    console.log(e);
   }
})

app.listen(3000 , () => {
    console.log("Listening on port http://localhost:3000")
})