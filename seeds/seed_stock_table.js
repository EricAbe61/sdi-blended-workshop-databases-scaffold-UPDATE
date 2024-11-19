/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('stock_table').del();

  // Inserts seed entries
  await knex('stock_table').insert([
    { id: 1, name: 'ABCD', price: 100.50, oversold: false, float_value: 1.23 },
    { id: 2, name: 'EFGH', price: 200.75, oversold: true, float_value: 2.34 },
    { id: 3, name: 'IJKL', price: 150.30, oversold: false, float_value: 1.78 },
    { id: 4, name: 'NVIDIA', price: 142.29, oversold: false, float_value: 23.56 },
  ]);
};
