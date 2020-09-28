import React from 'react';
import { extract } from '../lib/extract/extractProps';
import { NumberProp } from '../lib/extract/types';
import Shape from './Shape';
import { RNSVGEllipse } from './NativeComponents';

export default class Ellipse extends Shape<{
  cx?: NumberProp;
  cy?: NumberProp;
  rx?: NumberProp;
  ry?: NumberProp;
}> {
  static displayName = 'Ellipse';

  static defaultProps = {
    cx: 0,
    cy: 0,
    rx: 0,
    ry: 0,
  };

  render() {
    const { props } = this;
    const { cx, cy, rx, ry } = props;
    return (
      <RNSVGEllipse
        ref={this.refMethod}
        {...extract(this, props)}
        cx={cx}
        cy={cy}
        rx={rx}
        ry={ry}
      />
    );
  }
}
