const express = require('express')

const app = express()

app.use(express.static('public'))

// Motor de plantillas
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/producto', (req, res) => {
    res.render('producto')
})

app.listen(3700, () => {
    console.log('Servidor ejecutándose')
})