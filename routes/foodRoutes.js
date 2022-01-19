const express = require("express");
const foodModel = require("../models/food");
const app = express();

app.use(express.json());

/* データの取得 */
app.get("/foods", async (req, res) => {
  //データベース内のすべてのデータを返す。
  const foods = await foodModel.find({});

  try {
    res.send(foods);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* データの作成 */
app.post("/food", async (req, res) => {
  const food = new foodModel(req.body);
  //console.log(req.body);

  try {
    await food.save();
    res.send(food);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* データの部分修正 */
app.patch("/food/:id", async (req, res) => {
  try {
    await foodModel.findByIdAndUpdate(req.params.id, req.body);
    await foodModel.save();
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/food/:id", async (req, res) => {
  try {
    const food = await foodModel.findByIdAndDelete(req.params.id);
    res.send(food);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
