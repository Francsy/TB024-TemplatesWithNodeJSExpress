console.log("Hola estoy funcionando")
const union = document.querySelector("main")
const prueba = document.createElement("section")
union.appendChild(prueba)
if (document.title === 'Formulario de contacto') {
    prueba.innerHTML = `<form action="#">
    <label for="email">Email:</label>
    <input type="email">
    <label for="name">Nombre:</label>
    <input type="text">
    <input type="button" value="Enviar">
    </form>`
} else {
    prueba.innerHTML = "Esto está pintado con js"
}