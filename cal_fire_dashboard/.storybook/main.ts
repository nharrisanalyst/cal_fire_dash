import type { StorybookConfig } from '@storybook/react-vite';
import svgr from 'vite-plugin-svgr';
import path from 'path';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    '!../src/**/dist/**'
  ],
  staticDirs: [
    // serve all of public/ at the web root
    { from: path.resolve(__dirname, '../public'), to: '/' }
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
   async viteFinal(config) {
    config.plugins = [...config.plugins, svgr()];
    return config;
  },
};
export default config;