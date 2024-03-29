
module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'qgyntbufah'),
      user: env('DATABASE_USERNAME', 'qgyntbufah'),
      password: env('DATABASE_PASSWORD', 'FgePAu8Tu7'),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
    debug: false,
  },
});


//ca: env('DATABASE_CA')
