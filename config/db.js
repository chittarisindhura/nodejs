const mongoose = require("mongoose");
const uri =
  "mongodb+srv://sindhura:sindhu@cluster0.3o3n2lf.mongodb.net/react-todo?retryWrites=true&w=majority";
const connectDatabase = async () => {
  try {
    await mongoose.connect(
      uri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => {
        console.log("Database connected successfully");
      }
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = connectDatabase;
