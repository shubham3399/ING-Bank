import * as storybook_internal_csf from 'storybook/internal/csf';
import { ArgTypesEnhancer } from 'storybook/internal/types';
import { W as WebComponentsRenderer } from './types-9976a2c9.js';
import 'lit';

declare const parameters: {
    docs: {
        extractArgTypes: (tagName: string) => {
            [x: string]: storybook_internal_csf.InputType;
        } | null | undefined;
        extractComponentDescription: (tagName: string) => string | null | undefined;
    };
};
declare const argTypesEnhancers: ArgTypesEnhancer<WebComponentsRenderer>[];

export { argTypesEnhancers, parameters };
