/**
 * @author Ray Cheng
 * @email ray644302280@gmail.com
 * @create date 2019-04-23 21:43:51
 * @modify date 2019-04-23 21:43:51
 * @desc [router]
 */


const express=require('express')
let router=express.Router()


router.get('/students',(req,res)=>{
    res.render('index.html',{
        labels:[
            'Jack',
            'Lucas',
            'Isabela'
        ]
    })
})


module.exports=router