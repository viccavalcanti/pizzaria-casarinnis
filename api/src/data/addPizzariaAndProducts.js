const Pizzaria = require('../models/pizzaria')
const Product = require('../models/product');
const pizzarias = require('./pizzaria.json')

//database
require('../database');

const addPizzariaAndProducts = async () => {

    try {

        for (let pizzaria of pizzarias) {
            const newPizzaria = await new Pizzaria(pizzaria).save();
            await Product.insertMany(
                pizzaria.produtos.map(p => ({ ...p,pizzarai_id: newPizzaria._id }))
                );
        }

    consele.log('Final do Script')
    } catch (err) {
        console.log(err.message);
    }

}



addPizzariaAndProducts();