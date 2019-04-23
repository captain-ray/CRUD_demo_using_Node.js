###Introduction

Implement CRUD functions for "<u>**Student**</u>" (name,gender,age,hobbies).

###Tools to use (NPM packages):

- **Express** (a minimal and flexible Node.js web application framework)
- **Nodemon** (simple monitor script for use during development of a node.js app.)
- 



###Steps

1. Start a server and listens on port <u>**3001**</u> for connections

```js
const express = require('express')
const app=express()
const port=3001

app.get('/',(req,res)=>res.send('Hello Node.js!'))

app.listen(port,()=>console.log(`App listening on port ${port}!`))
```

2. Importing resources downloaded from internet (html,css,js,img)

- public
  - css
  - img
  - js
- views
  - index.html
  - edit.html
  - new.html

3. 



