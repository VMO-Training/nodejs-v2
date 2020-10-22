//khai bao express
//khai bao app trong express
//khai bao path
const express = require('express')
const app = new express()
const path = require('path')

//khai bao ejs
const ejs = require('ejs')
app.set('view engine', 'ejs')

//khai bao body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//Dang ky thu muc public 
app.use(express.static('public'))

//Khoi tao sever
app.listen(4000, () =>
{
    console.log('App listening on a port 4000')
})



//Tao router xu ly EJs
app.get('/',(req,res) =>{
    res.render('index')
})

app.get('/about',(req,res)=> {
    res.render('about')
})

app.get('/contact',(req,res)=>{
    res.render('contact')
})
app.get('/post',(req,res)=>{
    res.render('post')
})
//Dang ky router(tao post moi)
app.get('/post/new', (req,res) => {
    res.render('create')
})

app.post('/post/store',(req,res) =>{
        console.log(req.body)
    res.redirect('/')
})