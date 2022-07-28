const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });
const app = require("./midleweare/app");
const mongoose = require("mongoose");

const DB = process.env.DB.replace("<password>", process.env.PASSWORD);
console.log(DB);
console.log(process.env.PORT);
const port = process.env.PORT || 8000;

mongoose.connect(DB).then(() => {
  console.log("DB connected");
});
app.listen(port, () => {
  console.log(`Listening port is ${port}`);
});
