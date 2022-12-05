module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/models/find-slug/:Slug', 
      handler: 'api::model.model.findSlug',
      config: {
        auth: false,
      },
    },
  ]
};