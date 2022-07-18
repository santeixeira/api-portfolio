import express from "express";
import connectionDb from "./config/database.js";
import routes from "./routes/index.js";

connectionDb();

// 6zex9sPMGO2Wx576

const app = express();

app.use(express.json());

routes(app);

export default app;
