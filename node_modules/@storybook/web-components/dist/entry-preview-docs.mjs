import './chunk-CEH6MNVV.mjs';
import { SourceType } from 'storybook/internal/docs-tools';
import { render } from 'lit';
import { useEffect, emitTransformCode } from 'storybook/preview-api';

var LIT_EXPRESSION_COMMENTS=/<!--\?lit\$[0-9]+\$-->|<!--\??-->/g;function skipSourceRender(context){let sourceParams=context?.parameters.docs?.source,isArgsStory=context?.parameters.__isArgsStory;return sourceParams?.type===SourceType.DYNAMIC?!1:!isArgsStory||sourceParams?.code||sourceParams?.type===SourceType.CODE}function sourceDecorator(storyFn,context){let story=storyFn(),renderedForSource=context?.parameters.docs?.source?.excludeDecorators?context.originalStoryFn(context.args,context):story,source;if(useEffect(()=>{source&&emitTransformCode(source,context);}),!skipSourceRender(context)){let container=window.document.createElement("div");renderedForSource instanceof DocumentFragment?render(renderedForSource.cloneNode(!0),container):render(renderedForSource,container),source=container.innerHTML.replace(LIT_EXPRESSION_COMMENTS,"");}return story}var decorators=[sourceDecorator],parameters={docs:{source:{type:SourceType.DYNAMIC,language:"html"},story:{inline:!0}}};

export { decorators, parameters };
