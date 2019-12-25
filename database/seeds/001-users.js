
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { username: 'mikey', password: 'mikey123' },
        { username: 'canelo', password: 'canelo123' },
        { username: 'tyson', password: 'tyson123' }
      ]);
    });
};
