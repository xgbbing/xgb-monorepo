import { defineConfig } from '@ice/pkg';

// https://pkg.ice.work/reference/config/
export default defineConfig({
  jsxRuntime: 'classic',
  transform: {
    formats: ['esm', 'cjs', 'es2017'],
    excludes: ['**/demos/**', '**/docs/**'],
  },
});
