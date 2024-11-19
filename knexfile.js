/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
      client: 'pg', // Use PostgreSQL for development
      connection: {
        host: '127.0.0.1', // Connects to your local machine
        user: 'postgres',  // Default PostgreSQL user
        password: 'mysecretpassword', // Password you set in the docker run command
        database: 'workshop_db', // The new database you created
        port: 5434 // Ensure this matches your PostgreSQL container port
      },
      migrations: {
        directory: './migrations' // Directory for migration files
      },
      seeds: {
        directory: './seeds' // Directory for seed files
      }
    },
  
    staging: {
      client: 'postgresql',
      connection: {
        database: 'my_db',
        user: 'username',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    },
  
    production: {
      client: 'postgresql',
      connection: {
        database: 'my_db',
        user: 'username',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  };
  