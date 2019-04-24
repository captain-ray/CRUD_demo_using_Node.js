let mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/student')
let Schema=mongoose.Schema;

let studentSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:Number,
        default:0,
        enum:[0,1]
    },
    age:{
        type:Number
    },
    hobbies:{
        type:String
    }
})

module.exports=mongoose.model('Student',studentSchema)