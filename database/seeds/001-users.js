
// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex('users').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('users').insert([
//         { username: 'mikey', password: 'mikey123' },
//         { username: 'canelo', password: 'canelo123' },
//         { username: 'tyson', password: 'tyson123' }
//       ]);
//     });
// };

exports.seed = function(knex) {
  return knex("users").insert([
    { username: "mikey", password: "mikey123"},
    { username: "canelo", password: "canelo123"},
    { username: "tyson", password: "tyson123"}
  ]);
};

