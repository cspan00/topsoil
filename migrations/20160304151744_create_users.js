
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(t){
    t.increments();
    t.string('facebook_id');
    t.text('image_url')
    t.string('email');
    t.string('first_name');
    t.string('last_name');
    t.string('name')
    t.timestamps();
  })
};




exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
}
