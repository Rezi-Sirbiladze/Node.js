const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

router.get('/', async(req, res) => {

    try{
        const arrayUsuarios = await Usuario.find();
        res.render("usuarios", {
            arrayUsuarios
        })
    }catch(error){
        console.log(error);
    }
});

router.get('/crear', (req, res) => {
    res.render('crear');
})

router.post('/', async(req, res) => {
    const body = req.body;
    try{
        const usuario = new Usuario(body);
        await usuario.save();
        res.redirect('/usuarios');
    }catch(error){
        console.log(error);
    }
})

module.exports = router;