const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, //空白除去
    lowercase: true, //小文字
  },
  calories: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error("マイナスのカロリーは存在しません");
    },
  },
});

const Food = mongoose.model("Food", FoodSchema);

module.exports = Food;
