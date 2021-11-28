const path = require("path");
//path en un modulo que me permite trabajar con directorios sin importar que estemos en win o linux
const express = require("express");
const app = express(); //El servidor que crea me lo guarda en la constante app

// analiza el texto como JSON y expone el objeto resultante en req.body
app.use(express.json());

//estamos enviando un archivo html con el metodo sendFile.
//path.join: une directorios 
//__dirname nos da la direción del archivo que lo está ejecutando 
//cada vez que entre a la ruta inicial, lo manejaré con una función, voy a responder un archivo y ese archivo se encuentra en una dirección especifica. 
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "indexR.html"));
    //console.log(__dirname)
});

app.post("/add", (req, res) => {
    const { a, b } = req.body;
    res.send({result: parseInt(a) + parseInt(b)});
});

app.listen(5000, () => {
    console.log(`Server is running on port 5000.`);
});