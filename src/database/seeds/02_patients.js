/**
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */

const TABLE_NAME = 'patients';

exports.seed = function (knex, Promise) {
  // Deletes all existing entries
  return knex(TABLE_NAME)
    .del()
    .then(() => {
      // Inserts seed entries
      return Promise.all([
        knex(TABLE_NAME).insert([
          {
            name: 'Michael Scott',
            address: 'Kathmandu',
            dob: '1974/5/11',
            hospital_id: 3
          },
          {
            name: 'Dwight Schrute',
            address: 'Pokhara',
            dob: '1973/5/11',
            hospital_id: 4
          },
          {
            name: 'Jim Halpert',
            address: 'Lalitpur',
            dob: '1972/5/11',
            hospital_id: 2
          },
          {
            name: 'Pam Beesly',
            address: 'Pokhara',
            dob: '1971/5/11',
            hospital_id: 3
          },
          {
            name: 'Ryan Howard',
            address: 'Lalitpur',
            dob: '1954/5/11',
            hospital_id: 2
          },
          {
            name: 'Jan Levinson',
            address: 'Kathmandu',
            dob: '1995/5/11',
            hospital_id: 1
          },
          {
            name: 'Stanley Hudson',
            address: 'Pokhara',
            dob: '1934/5/11',
            hospital_id: 3
          },
          {
            name: 'Kevin Malone',
            address: 'Kathmandu',
            dob: '1979/5/11',
            hospital_id: 5
          },
          {
            name: 'Angela Martin',
            address: 'Pokhara',
            dob: '1974/5/11',
            hospital_id: 4
          },
          {
            name: 'Creed Bratton',
            address: 'Lalitpur',
            dob: '1971/5/11',
            hospital_id: 6
          }
        ])
      ]);
    });
};
