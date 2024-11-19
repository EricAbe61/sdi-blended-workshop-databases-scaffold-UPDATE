/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  await knex('search_table').del();

  await knex('search_table').insert([
    { name: 'ABCD', oversold: false, price: 100.50, float_value: 1.23 },
    { name: 'EFGH', oversold: true, price: 200.75, float_value: 3.45 },
    { name: 'IJKL', oversold: false, price: 150.30, float_value: 2.78 },
  ]);
};

