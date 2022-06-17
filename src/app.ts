import express from "express";
import { appRoutes } from "./infra/http/routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(appRoutes);

app.listen(3333, () => {
  console.log("🚀 Server started on port 3333!");
});
