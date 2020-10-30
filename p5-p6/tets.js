const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://localhost/test_my_database', { useNewUrlParser: true});
BlogPost.create({
    title: 'Day la sach day lap trinh nodejs co ban',
    body:'Neu ban dam me voi javascript va  muon kham pha  cach xay dung ung dung voi nodejs thi day la cuon sach danh cho ban'
}, (error, blogpost) => {
    console.log(error,blogpost)
})

