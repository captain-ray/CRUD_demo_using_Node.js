/**
 * @author Ray Cheng
 * @email ray644302280@gmail.com
 * @create date 2019-04-23 19:54:42
 * @modify date 2019-04-23 19:54:42
 * @desc [app.js]
 */
const express = require('express')
const app=express()
const router=require('./router')
const bodyParser=require('body-parser')


const port=3001

//javascript template engine ---'art-template'
app.engine('html',require('express-art-template'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))
// parse application/json
app.use(bodyParser.json())



app.listen(port,()=>console.log(`App listening on port ${port}!`))

//the only built-in middleware function in Express. it servers static files
app.use('/public',express.static('./public'))
app.use('/node_modules',express.static('./node_modules'))

app.use(router)