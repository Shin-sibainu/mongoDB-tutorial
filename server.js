const express = require("express");
const app = express();
const mongoose = require("mongoose");

const foodRouter = require("./routes/foodRoutes");

app.use(foodRouter);

app.listen(3000, () => {
  console.log("サーバー起動");
});

//データベース接続
mongoose
  .connect(
    "mongodb+srv://shincode:a@cluster0.0zogj.mongodb.net/mongodb?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("データベース接続中・・・");
  })
  .catch((error) => console.log(error));
