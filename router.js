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
        if(err)console.log(err)
        res.redirect('/students')
    })
})



module.exports=router