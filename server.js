const express = require("express");
const app = express();
const mongoose = require("mongoose");

const foodRouter = require("./routes/foodRoutes");

app.set("view engine", "ejs");
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

//データを取得して表示したい。
// app.get("/", (req, res) => {
//   res.render("home");
// });

//投稿
// app.post("/post", (req, res) => {
//   mongoDB.then((db) => {
//     db.collection("posts").insertOne(req.body);
//   });
//   res.send("data post");
// });
