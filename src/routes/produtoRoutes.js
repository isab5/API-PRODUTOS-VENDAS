const express = require("express");
const router = express.Router();

const produtoController = require("../controllers/produtoController");
const upload = require("../config/upload");
const apiKeyMiddleware = require("../config/apiKey"); 

router.use(apiKeyMiddleware);
router.get("/produto", produtoController.getAllProdutos);router.get("/produto/:id", produtoController.getProdutoById);
router.post("/produto", upload.single("photo"),produtoController.createProduto);
router.put("/produto/:id", produtoController.updateProduto);
router.delete("/produto/:id", produtoController.deleteProduto);

module.exports = router;