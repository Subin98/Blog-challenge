var mongoose = require("mongoose");
var schema = mongoose.Schema;

var BlogSchema = new schema({

    Author:String,
    PublishedDate:Date,
    BlogName:String,
    BlogContent:String,
    Comments:[{
        name:String,
        comment:String
    }],
    BlogImage:String,
    AuthorImage:String,
    Followers:Number


});

var blogdata = mongoose.model('blogs',BlogSchema);
module.exports=blogdata;