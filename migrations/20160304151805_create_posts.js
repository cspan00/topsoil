
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(t){
    t.increments();
    t.string('user_id');
    t.string('facebook_id');
    t.string('author')
    t.string('title')
    t.string('address');
    t.string('lat');
    t.string('lng')
    t.boolean('want')
    t.text('picture_url')
    t.text('description')
    t.timestamps();
  })
};




exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('posts');
}
