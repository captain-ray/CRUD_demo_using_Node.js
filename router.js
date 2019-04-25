/**
 * @author Ray Cheng
 * @email ray644302280@gmail.com
 * @create date 2019-04-23 21:43:51
 * @modify date 2019-04-23 21:43:51
 * @desc [router]
 */


const express=require('express')
const Student=require('./student')


let router=express.Router()

// index.html--- show info of all students
router.get('/students',(req,res)=>{

    Student.find((err,students)=>{
        res.render('index.html',{
            labels:[
                'Jack',
                'Lucas',
                'Isabela'
            ],
            students:students
        })

    })
})


//get to new.html
router.get('/students/new',(req,res)=>res.render('new.html'))

//post request of adding new student
router.post('/students/new',(req,res)=>{
    new Student(req.body).save((err)=>{
        //using body-parser, req.body is an object containing values
        if(err)console.log(err)
        res.redirect('/students')
    })
})


//get student info by ID, and render it in edit.html
router.get('/students/edit',(req,res)=>{
    Student.findById(req.query.id,(err,editStudent)=>{
        if(err) console.log(err)
        res.render('edit.html',{
            editStudent:editStudent
        })
    })
})

//post request and update info of student
router.post('/students/edit',(req,res)=>{
    Student.findByIdAndUpdate(req.body.id,req.body,(err,ret)=>{
        if(err) console.log(err)
        res.redirect('/students/')
    })
})



module.exports=router