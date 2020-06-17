let tareas = [
    {
    titulo: "Practicar el switch",
    descripcion: "Entender para que usarlo",
    estado: "terminado",
    },
    {
        titulo: "Practicar el for",
        descripcion: "Entender como se usa",
        estado: "en proceso"
    },
    {
        titulo: "Objeto literal vs JSON",
        descripcion: "Que tienen de diferente",
        estado: "terminado"
        },
        {
            titulo: "Refactorear con un forEach()",
            descripcion: "Magic",
            estado: "pendiente"
            }
    ];

    
    for(let i = 0; i < tareas.length;i++){
       // console.log("  " + tareas[i].titulo + "  ==>  " + "("  + tareas[i].estado + ")" );
   }

    
     let stringTarea = JSON.stringify(tareas,null, " ");
    
    
    //console.log(stringTarea);

    

       const fs = require("fs");

       let tarea = fs.readFileSync("./tarea.json", "utf-8");

       tarea = JSON.parse(tarea);


       
       //console.log(tarea);
       
for(let i = 0; i < tareas.length;i++){
    if(tareas[i].estado == "pendiente" 
     || tareas[i].estado == "en proceso"){
       // console.log("  " + tareas[i].titulo + " ==> " + tareas[i].estado);
    }    
}

function listarTodas(){
    console.log("** Todas las tareas **");
    console.log("----------------------");
    for(let i = 0; i < tareas.length;i++){
        return tareas;
}
}


function noTerminadas(){
    console.log("** Tareas no terminadas **");
    console.log("--------------------------");
    for(let i = 0; i < tareas.length;i++){
        if(tareas[i].estado === "pendiente" 
         || tareas[i].estado === "en proceso"){
            console.log("  " + tareas[i].titulo + " ==> " + tareas[i].estado);
        }    
    }
}

     
function listarPorEstado(){
    console.log("                           ");
    console.log("//// Tareas por Estado ////");
    for(let i = 0; i < tareas.length;i++){
        console.log( "---- " + tareas[i].titulo + "  ==> " + "    " + tareas[i].estado)
}
}
//console.log(listarTodas());         // Todas las tareas juntas
//noTerminadas();                     //Tareas no terminadas
listarPorEstado();     // Tareas por estado