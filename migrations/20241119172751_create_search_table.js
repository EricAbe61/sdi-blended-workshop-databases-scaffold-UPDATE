/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('search_table', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.boolean('oversold').notNullable().defaultTo(false);
      table.decimal('price', 10, 2).notNullable();
      table.float('float_value').notNullable();
      table.timestamps(true, true);
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('search_table'); 
  };
  
