/**
 * @author Ray Cheng
 * @email ray644302280@gmail.com
 * @create date 2019-04-23 19:54:42
 * @modify date 2019-04-23 19:54:42
 * @desc [app.js]
 */
const express = require('express')
const app=express()
const port=3001

app.get('/',(req,res)=>res.send('Hello Node.js!'))

app.listen(port,()=>console.log(`App listening on port ${port}!`))