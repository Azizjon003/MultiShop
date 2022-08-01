const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });
const app = require("./midleweare/app");
const mongoose = require("mongoose");
process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception Error: ", err.message);
  process.exit(1);
});
const DB = process.env.DB.replace("<password>", process.env.PASSWORD);
// console.log(DB);
const port = process.env.PORT || 8000;

mongoose.connect(DB).then(() => {
  console.log("DB connected");
});
app.listen(port, () => {
  console.log(`Listening port is ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log("Unhandled Rejection Error: ", err.message);
  process.exit(1);
});
