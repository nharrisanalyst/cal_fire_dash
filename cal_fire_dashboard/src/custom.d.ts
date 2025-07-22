/// <reference types="@testing-library/jest-dom" />


declare module '*.scss' {
        const content: Record<string, string>;
        export default content;
    }

declare module '*.svg?react' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}