'use strict';


const registrar_tarea = async( nombre, descripcion, prioridad, encargado, fecha) =>{

    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-tarea',
        responseType: 'json',
        data: {
            nombre: nombre,
            descripcion: descripcion,
            prioridad: prioridad,
            encargado: encargado,
            fecha: fecha
        }
    }).then((response) => {
        Swal.fire({
            title: 'Su tarea se ha registrado correctamente',
            icon:  'success',
        }).then(()=>{
            limpiar();
        });
    }).catch((response) => {
        Swal.fire({
            title: 'Su tarea no se pudo registrar, ocurrio el siguiente error: ',
            icon:  'error',
            text: response.data.err
        });

    });

};


const listar_tareas = async() =>{
    let lista_tareas = [];

    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-tareas',
        responseType: 'json'
    }).then((response) => {
        lista_tareas  = response.data.lista_tareas;
        
    }).catch((response) => {
       

    });

    return lista_tareas;

};