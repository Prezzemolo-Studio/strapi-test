

  module.exports = ({ env }) => ({
    connection: {
      client: 'mysql',
      connection: {
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'prezzemolo'),
        user: env('DATABASE_USERNAME', 'prezzemolo'),
        password: env('DATABASE_PASSWORD', '7GIi1/U3[7(H-t'),
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        },
      },
      debug: false,
    },
  });


  //ca: env('DATABASE_CA')
