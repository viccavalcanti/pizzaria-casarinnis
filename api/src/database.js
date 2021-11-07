//base de dados criado para conectar ao index

const mongoose = require('mongoose');
const URI = 'mongodb://localhost/pizzaria-casarinnis-master'

mongoose.set('debug', true);

mongoose.connect(URI).then(() => {
    console.log('DB is UP!');
  }).catch((err) => {
    console.log(err);
  });