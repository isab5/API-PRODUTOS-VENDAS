const vendaModel = require('../models/vendaModel');

const getAllVendas = async (req, res) => {
    try {
        const vendas = await vendaModel.getVendas();
        res.json(vendas);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar vendas." });
    }
};

const getVenda = async (req, res) => {
    try {
        const venda = await vendaModel.getVendaById(req.params.id);
        if (!venda) {
            return res.status(404).json({ message: "Venda não encontrada." });
        }
        res.json(venda);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar venda." });
    }
};
