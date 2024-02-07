module.exports = ({ env }) => ({
    host: env('HOST', 'phplaravel-1202186-4279885.cloudwaysapps.com'),
    port: env.int('PORT', 1337),
    app: {
      keys: env.array('APP_KEYS', [env('APP_KEY')]),
    },
    webhooks: {
      populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
  });

  //commento