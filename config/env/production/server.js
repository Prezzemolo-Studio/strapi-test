module.exports = ({ env }) => ({
    host: env('HOST', '159.223.231.147'),
    port: env.int('PORT', 1337),
    app: {
      keys: env.array('APP_KEYS', [env('APP_KEY')]),
    },
    webhooks: {
      populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
  });

  //commento
