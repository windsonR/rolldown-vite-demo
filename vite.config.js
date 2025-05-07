import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(async ({ mode }) => {
  let config
  if (mode === 'development') {
        config = await import('./vite.dev.config').then(({ buildDevConfig }) => {
      return buildDevConfig(mode);
    });
  }
  return config
});
