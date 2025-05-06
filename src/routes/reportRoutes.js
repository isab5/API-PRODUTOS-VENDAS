const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController");

router.get("/produtos/report/pdf", reportController.exportProdutosPDF);
router.get("/vendas/report/pdf", reportController.exportVendasPDF);

module.exports = router;