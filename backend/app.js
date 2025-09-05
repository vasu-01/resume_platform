import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import userRouter from "./route/user.route.js";
app.use("/api/v1/user", userRouter);

app.get("/", (req, res) => {
  res.send("Backend is running ");
});

export { app };
