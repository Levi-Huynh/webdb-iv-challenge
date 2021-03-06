// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/lambda.db3', // the folder will be created when we run the migrations
    },
    migrations: {
      directory: './data/migrations'
    },
  seeds: {
      directory: './data/seeds'
    },
    //gotcha: SQLite does not enforce FKx by default!!!
    //^ one remedy after connection:
    pool: {
      afterCreate: (connection, done) => {
        connection.run('PRAGMA foreign_keys=ON', done );
      }
    }
  },
};