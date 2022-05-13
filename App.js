const cow = require("cowsay");
const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use('/', require('./route/Web'));
app.use('/usuarios', require('./route/Usuarios'));

app.use((req, res, next) => {
    res.status(404).render('404', { respuesta: next })
});

app.listen(port, () => {
    console.log(cow.say({ text: 'Live . . . ' + port }))
});