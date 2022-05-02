'use strict';

const boton_registrar = document.querySelector('#btn-registrar');
const input_nombre = document.querySelector('#txt-nombre');
const input_descripcion = document.querySelector('#txt-descripcion');
const slt_prioridad = document.querySelector('#slt-prioridad');
const slt_encargado = document.querySelector('#slt-encargado');
const input_fecha = document.querySelector('#txt-fecha');


const limpiar =()=>{ //limpiar
    input_nombre.value = '';
    input_descripcion.value = '';
    slt_prioridad.value = '';
    slt_encargado.value = '';
    input_fecha.value = '';
};


    //VALIDACION
    const validar = () =>{
        let error = false;
        let campos_requeridos = document.querySelectorAll(':required');
        let fecha_actual = new Date();
    
        campos_requeridos.forEach(campo =>{
    
            if(campo.value == '') {
                error = true;
                campo.classList.add('error-input');
            }else{
                campo.classList.remove('error-input');
            }
    
        });

        let fecha = new Date(input_fecha.value);
        if (fecha > fecha_actual) {
            input_fecha.classList.remove('error-input');
        }else{
            error = true;
            input_fecha.classList.add('error-input');
        };
        
    
    
        if(error){
            Swal.fire({
                title: 'No se ha podido crear su tarea',
                icon:  'warning',
                text:  'Por favor revise los campos resaltados'
            });
        } else {
            obtener_datos();

        }
    
    };





const obtener_datos = () => {

    let nombre = input_nombre.value;
    let descripcion = input_descripcion.value;
    let prioridad = slt_prioridad.value;
    let encargado = slt_encargado.value;
    let fecha = input_fecha.value;


    registrar_tarea(nombre, descripcion, prioridad, encargado, fecha);

};



boton_registrar.addEventListener('click', validar);