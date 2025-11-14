
import express from "express";

import partsRouter from "./routes/part.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/parts", partsRouter);

app.get("/", (req, res) => {
    res.send("CAD Parts API is running. Use /api/parts for further results.");
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});