//khai bao  model
const BlogPost = require('./models/BlogPost.js')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true })


//khai bao express
//khai bao app trong express
//khai bao path
const express = require('express')
const app = new express()
const path = require('path')

//khaibao fileupload
const fileUpload = require('express-fileupload')
app.use(fileUpload())

//khai bao ejs
const ejs = require('ejs')
app.set('view engine', 'ejs')

//khai bao body-parser
const bodyParser = require('body-parser');
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
// app.get('/',(req,res) =>{
//     res.render('index')
// })
//Sua lai 
app.get('/',(req,res) =>{
    BlogPost.find({}, function(error, post){
            console.log(post);
            res.render('index',{
                blogpost: post
            })
    })
})



app.get('/about',(req,res)=> {
    res.render('about')
})

app.get('/contact',(req,res)=>{
    res.render('contact')
})


//Dang ky router(tao post moi)
app.get('/post/new', (req,res) => {
    res.render('create')
})              


//     app.get('/post',(req,res)=>{
//     res.render('post')
// })
//Sua file
    app.get('/post/:id',(req, res) => {
        BlogPost.findById(req.params.id, function(error,detailpost){
            res.render('post',{
                detailpost
            })
        })
    })

//upload image
app.post('/post/store', (req, res) => {
    let image = req.files.image;
    image.mv(path.resolve(__dirname, 'public/upload', image.name), function (error) {
    // model creates a new doc with browser data
    BlogPost.create({...req.body,image: '/upload/' + image.name},function(error) {
    res.redirect('/')
             })
         })
   })
