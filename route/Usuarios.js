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

module.exports = router;