import express from "express";
import config from "../config/config.js";
import routes from "../routes/index.js";
import authMiddleware from "../middlewares/auth.js";

const app = express();

app.use(express.json());
app.use(authMiddleware);
app.use("/api", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
