const cow = require("cowsay");
const express = require('express');

const mongoose = require('mongoose');
const user = 'DB_user';
const password = 'RTbbsNmFUAV6zW71';
const dbname = 'DB';
const uri = `mongodb+srv://${user}:${password}@cluster0.vkm6q.mongodb.net/${dbname}?retryWrites=true&w=majority`;
mongoose.connect(uri, {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e));

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