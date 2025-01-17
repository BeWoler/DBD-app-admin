/**
 * subscriber controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::subscriber.subscriber",
  ({ strapi }) => ({
    async subscribe(ctx) {
      try {
        const { email } = ctx.request.body;

        if (!email) {
          return ctx.badRequest("Email is required");
        }

        const existingSubscriber = await strapi.db
          .query("api::subscriber.subscriber")
          .findOne({
            where: { email },
          });

        if (existingSubscriber) {
          return ctx.conflict("Subscriber with this email already exists");
        }

        const newSubscriber = await strapi.db
          .query("api::subscriber.subscriber")
          .create({
            data: { email, publishedAt: null },
          });

        return ctx.send({
          message: "Subscriber added successfully",
          subscriber: newSubscriber,
        });
      } catch (error) {
        console.error("Error adding subscriber:", error);
        return ctx.internalServerError("Unable to add subscriber");
      }
    },
  })
);
