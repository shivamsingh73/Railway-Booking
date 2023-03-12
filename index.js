const express = require('express')
const path = require("path")
const fs = require("fs")
const app = express()
const port = 3000;





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
  await mongoose.connect('mongodb://127.0.0.1:27017/a');

  const as = await b.find( { station_name: Arrival} );                          //,  train_number: '14084'
  const as1 = await b.find( { station_name: Destination} );

console.log(as);
console.log(as1);

}


  res.send('search.pug')
})




app.get('/search',(req,res)=>{
  res.render('search.pug')
})






app.use('/static',express.static('static'));


app.set('views',path.join(__dirname,'views'))







const mongoose = require('mongoose');
const b= require('./b');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/a');

//   const as = await b.find( { station_name: $Arrival  } );                          //,  train_number: '14084'
// console.log(as);
  
 
// }



app.listen(port, () => {
  console.log(`Example app listening on port  http://localhost:${port}`)
})