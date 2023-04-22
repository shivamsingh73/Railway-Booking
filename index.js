const express = require('express')
const path = require("path")
const fs = require("fs")
const app = express()
const port = 3000;


const mongoose = require('mongoose');
const b= require('./b');


//pug template engine
app.set('view engine', 'pug')


app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded())



app.get('/',(req,res)=>{
  res.render('index.pug')
})

// app.get('/check_pnr',(req,res)=>{
//   res.render('check_pnr.pug')
// })

app.get('/login',(req,res)=>{
  res.render('login.pug')
})



app.get('/Contact',(req,res)=>{
  res.render('Contact.pug')
})


app.get('/Services',(req,res)=>{
  res.render('services.pug')
})


app.get('/Meal',(req,res)=>{
  res.render('meal.pug')
})



app.post('/login',(req,res)=>{
  username=req.body.uname
  password=req.body.password

//  let outputlogin=`username is  ${username}, having Password ${password}.` 
 //  fs.writeFileSync('loginoutput.txt',outputlogin)
 
   res.render('index.pug')
 })




 app.post('/',(req,res)=>{
 date=req.body.asd
 Arrival=req.body.name
 Destination=req.body.name1
let output=`journey starts on ${date},from ${Arrival}, to ${Destination}.` 

fs.writeFileSync('output.txt',output)

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/railway');

 const z= await b.find( { Source_Station_Name: Arrival ,   Destination_Station_Name:Destination } );

console.log(z);


}


  res.send('console.log(z);')
})




app.get('/search',(req,res)=>{
  res.render('search.pug')
})






app.use('/static',express.static('static'));


app.set('views',path.join(__dirname,'views'))



app.listen(port, () => {
  console.log(`Example app listening on port  http://localhost:${port}`)
})