const Pizzaria = require("../models/pizzaria");
const Product = require("../models/product");
const pizzarias = require("./pizzarias.json");
const createRecipients = require("../services/pagarme").createRecipient;

//database
require("../database");

const addPizzariasAndProducts = async () => {
  try {
    for (let pizzaria of pizzarias) {
      const recipient = await createRecipients(pizzaria.nome);

      if (!recipient.error) {
        const newPizzaria = await new Pizzaria({
          ...pizzaria,
          recipient_id: recipient.data.id,
        }).save();
        await Product.insertMany(
          pizzaria.produtos.map((p) => ({ ...p, pizzaria_id: newPizzaria._id }))
        );
      } else {
        console.log(recipient.message);
      }
    }
    console.log("Final do Script");
  } catch (err) {
    console.log(err.message);
  }
};

addPizzariasAndProducts();
