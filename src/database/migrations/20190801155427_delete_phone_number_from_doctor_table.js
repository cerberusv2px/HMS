/**
 * @param  {object} knex
 * @return {Promise}
 */

const TABLE_NAME = 'doctors';

exports.up = function (knex) {
  return knex.schema.table(TABLE_NAME, table => {
    table.dropColumn('phone_number');
  });
};

/**
 * @param  {object} knex
 * @return {Promise}
 */
exports.down = function (knex) {
  return knex.schema.table(TABLE_NAME, table => {
    table.string('phone_number').defaultTo('');
  });
};

