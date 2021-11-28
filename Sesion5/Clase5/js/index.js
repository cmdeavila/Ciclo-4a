var jugadores = [];

//El primer paso es que voy a recuperar los datos de la caja de texto//
//Crear un JSON para asignarle el valor que estoy recuperando//
//El tercer paso es guardar en la estructura de datos el JSON//

//Primer Paso//
const guardar = () =>{ 
    let doc = document.getElementById("doc").value;
    let nom = document.getElementById("nom").value;
    let mail = document.getElementById("mail").value;
    let tel = document.getElementById("tel").value;
    console.log(doc,nom,mail,tel);
    let j = {};
    //Segundo Paso - Crear el JSON
    j.doc=doc;
    j.nom=nom;
    j.mail=mail;
    j.tel=tel;
    //Tercer paso
    jugadores.push(j);
}

const listar =() =>{
    let listado = document.getElementById("cuerpo");
    listado.innerHTML="";
    for (const m of jugadores) {
        listado.innerHTML+=`<tr>
        <td> ${m.doc} </td>
        <td> ${m.nom} </td>
        <td> ${m.mail} </td>
        <td> ${m.tel} </td>
        </tr>`
    }
}

