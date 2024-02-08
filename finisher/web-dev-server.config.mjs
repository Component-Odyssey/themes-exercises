
export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  nodeResolve: {
    exportConditions: ['browser', 'development'],
  },
});
