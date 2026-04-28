import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    exclude:["**/e2e/**", "**/node_modules/**", "**/dist/**"],
    environmentOptions: {
      jsdom: {
        url: 'http://localhost'
      }
    }
  },
  resolve:{
    alias: {
      '\\.svg$': './src/__mocks__/svgMock.tsx',
      '\\.svg\\?react$': './src/__mocks__/svgMock.tsx',
    },
  },
}));
