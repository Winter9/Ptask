'use strict';

let tabla = document.querySelector('#tbl-tareas tbody');
const input_filtro = document.querySelector('#txt-filtro');

const mostrar_tabla = async() => {
    let lista_tareas = await listar_tareas();
    let filtro = input_filtro.value.toLowerCase();
    tabla.innerHTML = '';

    lista_tareas.forEach(nombre => {

        if(nombre.encargado.toLowerCase().includes(filtro)){
            let fila = tabla.insertRow();


            fila.insertCell().innerHTML = nombre.nombre;
            fila.insertCell().innerHTML = nombre.descripcion;
            let celda_prioridad = fila.insertCell();
            celda_prioridad.innerHTML = nombre.prioridad;
            fila.insertCell().innerHTML = nombre.encargado;
            fila.insertCell().innerHTML = moment(nombre.fecha).format("d MMM YYYY");


            switch (nombre.prioridad) {
                case 'Alta':
                    celda_prioridad.classList.add('prio-alta');
                    break;
                case 'Media':
                    celda_prioridad.classList.add('prio-media');
                    break;
                default:
                    celda_prioridad.classList.add('prio-baja');
                    break;
    
            }
        }

    });
    mostrar_tabla();

};

mostrar_tabla();

input_filtro.addEventListener('keyup' , mostrar_tabla);