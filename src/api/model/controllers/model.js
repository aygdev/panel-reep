"use strict";

/**
 * model controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::model.model", ({ strapi }) => ({
  async findSlug(ctx) {
    const { Slug } = ctx.params;

    const query = {
      filters: { Slug },
      ...ctx.query,
    };

    const model = await strapi.entityService.findMany("api::model.model", query);
    const sanitizedEntity = await this.sanitizeOutput(model);

    return this.transformResponse(sanitizedEntity[0]);
  },
}));
