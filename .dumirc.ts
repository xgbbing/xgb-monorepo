import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs',
  themeConfig: {
    name: 'xgb-monorepo',
    defaultPlatform: 'pc',
    // sidebar,
    nav: [
      {
        title: '开发指南',
        link: '/guide',
      }
    ],
    noIndexPage: false,
  },
  theme: {
    '@hd': '2px',
  },
  // mfsu: false,
  // history: {
  //   type: 'hash',
  // },
  // resolve: {
  //   docDirs: ['docs'],
  //   atomDirs: [{ type: 'component', dir: 'src' }],
  // },
  // srcTranspiler: "swc",
  // jsMinifier: "swc",
});
