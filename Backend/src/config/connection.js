import mongoose from "mongoose";
import app from "../index.js";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected to database");

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.log("Connection failed!" + "Error: " + error.message);
  }
};

export default connect;
