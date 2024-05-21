import mongoose from "mongoose";
import app from "../index.js";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected to database");

    app.listen(process.env.PORT, () => {
      console.log("Server is running on port 3001");
    });
  } catch (error) {
    console.log("Connection failed!" + "Error: " + error.message);
  }
};

export default connect;
