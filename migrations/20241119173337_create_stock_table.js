/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('stock_table', (table) => {
      table.increments('id').primary(); 
      table.string('name').notNullable(); 
      table.decimal('price', 10, 2).notNullable(); 
      table.boolean('oversold').notNullable().defaultTo(false); 
      table.float('float_value').notNullable(); 
      table.timestamps(true, true); 
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('stock_table'); 
  };
  
