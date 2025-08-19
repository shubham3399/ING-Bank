import { SourceType } from 'storybook/internal/docs-tools';
import { DecoratorFunction } from 'storybook/internal/types';
import { W as WebComponentsRenderer } from './types-9976a2c9.js';
import 'lit';

declare const decorators: DecoratorFunction<WebComponentsRenderer>[];
declare const parameters: {
    docs: {
        source: {
            type: SourceType;
            language: string;
        };
        story: {
            inline: boolean;
        };
    };
};

export { decorators, parameters };
