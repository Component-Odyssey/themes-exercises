export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  watch: true,
  nodeResolve: {
    exportConditions: ['browser', 'development'],
  },
});
