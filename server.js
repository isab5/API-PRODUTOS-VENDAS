require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const produtoRoutes = require("./src/routes/produtoRoutes");
const vendaRoutes = require("./src/routes/vendaRoutes");
const reportRoutes = require("./src/routes/reportRoutes")

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", produtoRoutes);
app.use("/api", reportRoutes);
app.use("/api", vendaRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🛍️  Servidor rodando em http://localhost:${PORT}`);
});
