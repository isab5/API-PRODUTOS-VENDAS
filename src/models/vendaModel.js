const pool = require("../config/database");

const getVendas = async () => {
    const result = await pool.query(`SELECT vendas.*, produtos.nome AS nome_produto
            FROM vendas
            LEFT JOIN produtos ON vendas.produto_id = produtos.id`); 
    return result.rows;
};

const getVendaById = async (id) => {
    const result = await pool.query(
        `SELECT vendas.*, produtos.nome AS nome_produto 
        FROM vendas 
        LEFT JOIN produtos ON vendas.produto_id = produtos.id 
        WHERE vendas.id = $1`, [id]
    );
    return result.rows[0];
};

const createVenda = async (produto_id, quantidade, data_venda) => {
    const result = await pool.query(
        "INSERT INTO vendas (produto_id, quantidade, data_venda) VALUES ($1, $2, $3) RETURNING *",
        [produto_id, quantidade, data_venda]
    );
    return result.rows[0];
};

const updateVenda = async (id, produto_id, quantidade, data_venda) => {
    const result = await pool.query(
        "UPDATE vendas SET produto_id = $1, quantidade = $2, data_venda = $3 WHERE id = $4 RETURNING *",
        [produto_id, quantidade, data_venda, id]
    );
    return result.rows[0];
};

const deleteVenda = async (id) => {
    const result = await pool.query("DELETE FROM vendas WHERE id = $1 RETURNING *", [id]);
    if (result.rowCount === 0) {
        return { error: "Venda não encontrada." };
    }
    return { message: "Venda deletada com sucesso." };
};

module.exports = { getVendas, getVendaById, createVenda, updateVenda, deleteVenda };