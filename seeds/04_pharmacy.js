/**
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */

const TABLE_NAME = 'pharmacy';

exports.seed = function(knex, Promise) {
  // Deletes all existing entries
  return knex(TABLE_NAME)
    .del()
    .then(() => {
      // Inserts seed entries
      return Promise.all([
        knex(TABLE_NAME).insert([
          {
            name: 'Pharma 1'
          },
          {
            name: 'Pharma 2'
          },
          {
            name: 'Pharma 3'
          },
          {
            name: 'Pharma 4'
          }
        ])
      ]);
    });
};
