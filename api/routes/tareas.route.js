'use strict';
const express = require('express');
const Tarea = require('../models/tareas.model');
const router = express.Router();

router.post('/registrar-tarea', (req, res) => {
    let nueva_tarea = new Tarea({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        prioridad: req.body.prioridad,
        encargado: req.body.encargado,
        fecha: req.body.fecha
    });

    nueva_tarea.save((err, tarea_bd) => {
        if (err) {
            res.json({
                msj: 'No se pudo registrar la tarea',
                err
            });
        } else {
            res.json({
                msj: 'La tarea se registró correctamente',
                tarea_bd
            });
        }
    });
});

router.get('/listar-tareas', (req, res) => {
    Tarea.find((err, lista_tareas) => {
        if (err) {
            res.json({
                msj: 'No se pudo listar las tareas',
                err
            });
        } else {
            res.json({
                lista_tareas
            });
        }
    });
});


module.exports = router;