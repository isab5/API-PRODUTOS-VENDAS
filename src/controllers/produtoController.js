const produtoModel = require('../models/produtoModel');

const getAllProdutos = async (req, res) => {
    try {
        const { categoria } = req.query;
        const produtos = await produtoModel.getProdutos(categoria);
        res.json(produtos);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar produtos." });
    }
};

const getProdutoById = async (req, res) => {
    try {
        const produto = await produtoModel.getProdutoById(req.params.id);
        if (!produto) {
            return res.status(404).json({ message: "Produto não encontrado." });
        }
        res.json(produto);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar produto." });
    }
};

const createProduto = async (req, res) => {
    try {
        const { nome, categoria, preco } = req.body;
        const photo = req.file ? req.file.filename : null;
        const newProduto = await produtoModel.createProduto(nome, categoria, preco, photo);
        res.status(201).json(newProduto);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar Produto." });
    }
};

const updateProduto = async (req, res) => {
    try {
        const { nome, categoria, preco } = req.body;
        const updatedProduto = await produtoModel.updateProduto(req.params.id, nome, categoria, preco);
        if (!updatedProduto) {
            return res.status(404).json({ message: "Produto não encontrado." });
        }
        res.json(updatedProduto);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar Produto" });
    }
};

const deleteProduto = async (req, res) => {
    try {
        const message = await produtoModel.deleteProduto(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar produto." });
    }
};

module.exports = { getAllProdutos, getProdutoById, createProduto, updateProduto, deleteProduto };
