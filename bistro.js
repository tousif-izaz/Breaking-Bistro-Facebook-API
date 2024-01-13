const express = require('express');
const expressHandlebars = require('express-handlebars')

const app = express()
app.engine('handlebars', 
expressHandlebars.engine( {
    defaultLayout : 'main',
}))
app.set('view engine', 'handlebars')

const port = process.env.port || 3000



const fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
  ]





app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    let randFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
    res.render('about', {fortune : randFortune})
})









// custom 404 page
app.use((req, res) => {
    res.status(404)
    res.render('404')
})

//custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(500)
    res.render('500')
})


app.listen(port, () => {
    console.log('express started on localhost: ' + port)
})