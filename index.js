import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";

const app = express();

// We are using JSON data in our whole application
app.use(bodyParser.json());

app.use("/", userRoutes);

app.listen(8080, () => {});
