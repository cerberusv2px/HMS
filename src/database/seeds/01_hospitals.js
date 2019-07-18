/**
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */
exports.seed = function(knex, Promise) {
  // Deletes all existing entries
  return knex('hospitals')
    .del()
    .then(() => {
      // Inserts seed entries
      return Promise.all([
        knex('hospitals').insert([
          {
            name: 'Hospital A&B',
            address: 'Kathmandu',
            phone_number: '014245534'
          },
          {
            name: 'Hospital AirBnB',
            address: 'Patan',
            phone_number: '014245564'
          },
          {
            name: 'v2px Hospital',
            address: 'Kathmandu',
            phone_number: '014241534'
          },
          {
            name: 'Hospital C&BS',
            address: 'Kathmandu',
            phone_number: '014245530'
          },
          {
            name: 'Hospital ARTFK',
            address: 'Kathmandu',
            phone_number: '014245534'
          },
          {
            name: 'Hospital CNT',
            address: 'Kathmandu',
            phone_number: '014223456'
          }
        ])
      ]);
    });
};
