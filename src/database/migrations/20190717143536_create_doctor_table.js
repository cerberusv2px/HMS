/**
 * @param  {object} knex
 * @return {Promise}
 */

const TABLE_NAME = 'doctors';

exports.up = function(knex) {
  return knex.schema.createTable(TABLE_NAME, table => {
    table.increments();
    table.string('name').notNull();
    table.integer('hospital_id').unsigned();
    table.foreign('hospital_id').references('hospitals.id');
    table
      .timestamp('created_at')
      .notNull()
      .defaultTo(knex.raw('now()'));
    table.timestamp('updated_at');
  });
};

/**
 * @param  {object} knex
 * @return {Promise}
 */
exports.down = function(knex) {
  return knex.schema.dropTable(TABLE_NAME);
};
