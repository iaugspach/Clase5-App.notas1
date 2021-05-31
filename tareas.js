const fs = require ('fs');
//defino obj literal
let archivoTareas = {
    archivo:'tareas.json',
    leerArchivo: function (params){
        return (fs.readFileSync(this.archivo,'utf-8'));
    },
    leerJSON: function() {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));

        //read file sync transforma a traves del parse el json a javascript
    },
}

module.exports = archivoTareas