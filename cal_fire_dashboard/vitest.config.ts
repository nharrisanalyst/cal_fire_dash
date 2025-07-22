import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
  },
  resolve:{
    alias: {
      '\\.svg$': './src/__mocks__/svgMock.tsx',
      '\\.svg\\?react$': './src/__mocks__/svgMock.tsx',
    },
  },
}));
