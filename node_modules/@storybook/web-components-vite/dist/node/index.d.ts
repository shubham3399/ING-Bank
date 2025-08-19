import { StorybookConfig } from '../index.js';
import '@storybook/web-components';
import 'storybook/internal/types';
import '@storybook/builder-vite';

declare function defineMain(config: StorybookConfig): StorybookConfig;

export { defineMain };
