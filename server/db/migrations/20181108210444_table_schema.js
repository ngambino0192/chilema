
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('Food', (table) => {
      table.increments('id').primary();
      table.string('category').notNullable();
      table.string('item').notNullable();
      table.string('description').notNullable();
      table.string('price').notNullable();
      table.string('image').notNullable();
      table.string('fd_lat').notNullable();
      table.string('fd_long').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('Users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    }),
    knex.schema.createTable('Users', (table) => {
      table.increments('id').primary();
      table.string('name')
      table.string('last')
      table.string('email')
      table.string('password')
      table.string('phone')
      table.boolean('diet')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.integer('location_id')
        // .notNullable()
        .references('id')
        .inTable('Local')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    }),
    knex.schema.createTable('Local', (table) => {
      table.increments('id').primary()
      table.string('address').notNullable()
      table.string('city').notNullable()
      table.string('state').notNullable()
      table.string('zip').notNullable()
      table.string('local_lat').notNullable()
      table.string('local_long').notNullable()
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('Food'),
    knex.schema.dropTable('Users'),
    knex.schema.dropTable('Local')
  ])
};
