
const express = require('express')

const app = express()

app.get('/' , (req , res) => {
    res.send('welcome from home ')
})

app.get("/room" , (req , res) => {
    res.send('welcome from rooms')
})

app.listen(8000 , () => {
    console.log('server is listen......')
})


