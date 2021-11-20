const mongoose = require("mongoose");
const URI = "mongodb+srv://pizzaria:pizzaria@cluster0.wrnhd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  .then(() => console.log("Database is up."))
  .catch((err) => console.log(err));
