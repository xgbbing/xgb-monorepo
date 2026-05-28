import { defineConfig } from 'dumi';
import path from "path"

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'rc-monorepo',
    defaultPlatform: 'pc',
    noIndexPage: false,
  },
  theme: {
    '@hd': '2px',
  },
  alias: {
    '@xgb/business-components': path.resolve(__dirname, 'packages/business-components/src'),
    '@xgb/common-components': path.resolve(__dirname, 'packages/common-components/src'),
  },
  resolve: {
    docDirs: ['docs'],
    atomDirs: [
      { type: 'component', dir: 'packages/business-components/docs' },
      { type: 'component', dir: 'packages/common-components/docs' }
    ],
  },
});
