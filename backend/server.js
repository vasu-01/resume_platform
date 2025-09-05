import dotenv from "dotenv";
dotenv.config();

import dbConnection from "./dbConfig/dbConfig.js";

import { app } from "./app.js";

dbConnection()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Mongodb failed to connect", error);
  });
