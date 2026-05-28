import { defineConfig } from '@ice/pkg';

// https://pkg.ice.work/reference/config/
export default defineConfig({
  transform: {
    formats: ['esm', 'cjs', 'es2017'],
    excludes: ['**/demos/**', '**/docs/**'],
  },
  bundle: {
    formats: ['umd'],
    name: 'business-components',
  },
  plugins: ['./plugin.mjs'],
});
