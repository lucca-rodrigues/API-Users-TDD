import { Router } from "express";

const usersRouter = Router();
usersRouter.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

export { usersRouter };
