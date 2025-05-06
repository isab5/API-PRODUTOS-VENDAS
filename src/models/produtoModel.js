const pool = require("../config/database");

const getProdutos = async () => {
    const result = await pool.query("SELECT * FROM produtos");
    return result.rows;
};

const getProdutoById = async (id) => {
    const result = await pool.query("SELECT * FROM produtos WHERE id = $1", [id]);
    return result.rows[0];
};

const createProduto = async (nome, categoria, preco, photo) => {
    const result = await pool.query(
        "INSERT INTO produtos (nome, categoria, preco, photo) VALUES ($1, $2, $3, $4) RETURNING *",
        [nome, categoria, preco, photo]
    );
    return result.rows[0];
};

const updateProduto = async (id, nome, categoria, preco) => {
    const result = await pool.query(
        "UPDATE produtos SET nome = $1, categoria = $2, preco = $3 WHERE id = $4 RETURNING *",
        [nome, categoria, preco, id]
    );
    return result.rows[0];
};

const deleteProduto = async (id) => {
    const result = await pool.query("DELETE FROM produtos WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
        return { error: "Produto não encontrado." };
    }

    return { message: "Produto deletado com sucesso." };
};

module.exports = { getProdutos, getProdutoById, createProduto, updateProduto, deleteProduto };