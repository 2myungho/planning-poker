import createProxyMiddleware from "http-proxy-middleware";

module.exports = function (app) {
  app.use(
    createProxyMiddleware(["/jira"], {
      target: "https://brique.atlassian.net",
      changeOrigin: true,
      pathRewrite: { "^/jira/": "/" },
    })
  );
};
