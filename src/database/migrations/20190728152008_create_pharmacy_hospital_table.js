/**
 * @param  {object} knex
 * @return {Promise}
 */

const TABLE_NAME = 'phar_hosp';

exports.up = function (knex) {
  return knex.schema.createTable(TABLE_NAME, table => {
    table.increments();
    table.integer('hospital_id').unsigned();
    table.foreign('hospital_id').references('hospitals.id');
    table.integer('pharmacy_id').unsigned();
    table.foreign('pharmacy_id').references('pharmacy.id');
  });
};

/**
 * @param  {object} knex
 * @return {Promise}
 */
exports.down = function (knex) {
  return knex.schema.dropTable(TABLE_NAME);
};
