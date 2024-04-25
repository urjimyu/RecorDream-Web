declare module '*.svg?react' {
  import React = require('react');

  export const ReactComponent: React.FunctionComponent<
    React.ComponentProps<'svg'> & { title?: string }
  >;
  export default ReactComponent;
}
