const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const Usuario = require('../models/Usuario');

router.get('/', async (req, res) => {

    try {
        const arrayUsuarios = await Usuario.find();
        res.render("usuarios", {
            arrayUsuarios
        })
    } catch (error) {
        console.log(error);
    }
});

router.get('/crear', (req, res) => {
    res.render('crear');
});

router.post('/', async (req, res) => {
    const body = req.body;
    try {
        const usuario = new Usuario(body);
        await usuario.save();
        res.redirect('/usuarios');
    } catch (error) {
        console.log(error);
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const usuario = await Usuario.findOne({ _id: id });
        res.render('detalle', {
            usuario: usuario,
            error: false
        })
    } catch (error) {
        console.log(error);
        res.render('detalle', {
            error: true,
            message: 'No se encuentra el usuario'
        })
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const usuario = await Usuario.findByIdAndDelete({ _id: id });
        if (usuario) {
            res.json({
                error: false,
                message: 'Usuario eliminado'
            });
        } else {
            res.json({
                error: true,
                message: 'Usuario no se puede eliminar'
            });
        }
    } catch (error) {
        console.log(error);
    }
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
        const usuario = await Usuario.findByIdAndUpdate(
            id, body, { useFindAndModify: false }
        );
        res.json({
            error: false,
            message: 'Usuario actualizado'
        });
    } catch (error) {
        console.log(error);
    }
});
module.exports = router;