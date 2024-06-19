import express from "express";
import routes from "./route.js";
import { config } from "dotenv";
import cors from "cors";
config({
  path: "./.env",
});
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", routes);
app.listen(5000, () => {
  console.log("Apps fine");
});
