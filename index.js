const express = require('express')
const app = express()
const PORT = 8000

app.get('/', (req,res) => {
    console.log('hello world')
})


app.get('/add/:numOne/:numTwo', (req,res) => {
    res.send(`You answer is ${req.params.numOne} + ${req.params.numTwo} = ${Number(req.params.numOne) + Number(req.params.numTwo)}`)
})
app.get('/subtract/:numOne/:numTwo', (req,res) => {
    res.send(`You answer is ${req.params.numOne} - ${req.params.numTwo} = ${Number(req.params.numOne) - Number(req.params.numTwo)}`)
})
app.get('/multiply/:numOne/:numTwo', (req,res) => {
    res.send(`You answer is ${req.params.numOne} * ${req.params.numTwo} = ${Number(req.params.numOne * req.params.numTwo)}`)
})
app.get('/divide/:numOne/:numTwo', (req,res) => {
    res.send(`You answer is ${req.params.numOne} / ${req.params.numTwo} = ${Number(req.params.numOne / req.params.numTwo)}`)
})

app.listen(PORT, () => {
    console.log(`Express is running on ${PORT}`)
})
