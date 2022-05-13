const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("usuarios", {
        arrayUsuarios: [
            {
                id: '1',
                name: 'Rezi',
                email: 'rezi@gmail.com',
            },
            {
                id: '2',
                name: 'Izer',
                email: 'Izer@gmail.com',
            }
        ]
    })
});

module.exports = router;