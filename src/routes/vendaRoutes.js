const express = require("express");
const router = express.Router();

const vendaController = require("../controllers/vendaController");

router.get("/venda", vendaController.getAllVendas);
router.get("/venda/:id", vendaController.getVenda);
router.post("/venda", vendaController.createVenda);
router.put("/venda/:id", vendaController.updateVenda);
router.delete("/venda/:id", vendaController.deleteVenda);

module.exports = router;