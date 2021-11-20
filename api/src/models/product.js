const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const product = new Schema({
  pizzaria_id: {
    type: Schema.Types.ObjectId,
    ref: "Pizzaria",
  },
  nome: String,
  capa: String,
  preco: Number,
  avaliacoes: Number,
});

module.exports = mongoose.model("Product", product);
