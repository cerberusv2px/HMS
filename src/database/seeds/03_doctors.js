/**
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */

const TABLE_NAME = 'doctors';
exports.seed = function(knex, Promise) {
  // Deletes all existing entries
  return knex(TABLE_NAME)
    .del()
    .then(() => {
      // Inserts seed entries
      return Promise.all([
        knex(TABLE_NAME).insert([
          {
            name: 'Doc 1',
            hospital_id: 3
          },
          {
            name: 'Doc 2',
            hospital_id: 3
          },
          {
            name: 'Doc 3',
            hospital_id: 2
          },
          {
            name: 'Doc 4',
            hospital_id: 2
          },
          {
            name: 'Doc 5',
            hospital_id: 4
          }
        ])
      ]);
    });
};
