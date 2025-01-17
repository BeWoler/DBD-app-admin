export default {
  routes: [
    {
      method: "POST",
      path: "/subscribers/subscribe",
      handler: "api::subscriber.subscriber.subscribe",
      config: {
        policies: [],
        middlewares: [],
        auth: false,
      },
    },
  ],
};
