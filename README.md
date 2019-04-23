### Introduction

Implement CRUD functions for "<u>**Student**</u>" (name,gender,age,hobbies).

### Tools to use (NPM packages):

- **Express** (a minimal and flexible Node.js web application framework)
- **nodemon** (simple monitor script for use during development of a node.js app.)
- **art-template** (a javascript templating engine)
- **mongoose** (a [MongoDB](https://www.mongodb.org/) object modeling tool designed to work in an asynchronous environment.)



### Steps

1. ##### Start a server and listens on port <u>**3001**</u> for connections

```js
const express = require('express')
const app=express()
const port=3001

app.get('/',(req,res)=>res.send('Hello Node.js!'))

app.listen(port,()=>console.log(`App listening on port ${port}!`))

```

2. ##### Importing resources downloaded from internet (html,css,js,img)

- <u>public</u>

  - css
  - img
  - js

- <u>views</u>

  - index.html
  - edit.html
  - new.html

  

3. ##### Create 'Router' — using express.Router 

   ```js
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
   ```

   when url = '<http://localhost:3001/students>', server-side render 'index.html'

   

   *Note: I use <u>**express-art-template**</u> as a template engine to render pages*

   ```js
   //javascript template engine ---'art-template'
   app.engine('html',require('express-art-template'))
   ```

   

   **output:**

   ![1](demo_images/1.png)

   

   

   