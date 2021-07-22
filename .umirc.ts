import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  // mfsu: {},
  // webpack5: {},
  // dynamicImport: {},
  // mfsu: { production: { output: '.mfsu-production' } }, 生产环境
});
