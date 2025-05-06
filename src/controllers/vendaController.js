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

const createVenda = async (req, res) => {
    try {
        const { produto_id, quantidade, data_venda } = req.body;
        const newVenda = await vendaModel.createVenda(produto_id, quantidade, data_venda);
        res.status(201).json(newVenda);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar venda." });
    }
};

const updateVenda = async (req, res) => {
    try {
        const { produto_id, quantidade, data_venda } = req.body;
        const updatedVenda = await vendaModel.updateVenda(req.params.id, produto_id, quantidade, data_venda);
        if (!updatedVenda) {
            return res.status(404).json({ message: "Venda não encontrada." });
        }
        res.json(updatedVenda);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar venda." });
    }
};

const deleteVenda = async (req, res) => {
    try {
        const message = await vendaModel.deleteVenda(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar venda." });
    }
};


module.exports = { getAllVendas, getVenda, createVenda, updateVenda, deleteVenda };