const express = require('express')
const { dirname } = require('path')
const path = require('path');

const app = express()
const port = 3000

//Template engine
app.set('view engine', 'pug');
app.set('views', './views');

app.use('/public', express.static('public'));
// app.use(express.static('public')) la carpeta public se publica y los navegadores pueden leer los archivos directamente sin prefijo


app.get('/', (req, res) => {
  res.render('content', { title: "Home", text: "Bienvenido nuestra página web" })
})

app.get('/about', (req, res) => {
  res.render('content', { title: "About", text: "Somos estudiantes de the Bridge"})
})

app.get('/location', (req, res) => {
  res.render('content', { title: "Localización", text: "Nos encontramos en Ibiza y Madrid" })
})

app.get('/mission', (req, res) => {
  res.render('content', { title: "¿Qué hacemos?", text: "Estudiar para ser devolpment FullStack" })
})


app.get('/contact', (req, res) => {
  res.render('content', {title: "Formulario de contacto", text: "Aquí va un formulario de contacto" })
})

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})
