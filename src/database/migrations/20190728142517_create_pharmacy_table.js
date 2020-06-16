/**
 * @param  {object} knex
 * @return {Promise}
 */

const TABLE_NAME = 'pharmacy';

exports.up = function (knex) {
  return knex.schema.createTable(TABLE_NAME, table => {
    table.increments();
    table.string('name').notNull();
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
exports.down = function (knex) {
  return knex.schema.dropTable(TABLE_NAME);
};
