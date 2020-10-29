
const BlogPost = require('../models/BlogPost.js')
module.exports = (req,res) =>{
    BlogPost.find({}, function(error, post){
            console.log(post);
            res.render('index',{
                blogpost: post
            })
    })
}