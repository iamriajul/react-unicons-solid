import React from 'react';
import { Props } from '../index';

const UisAlignRightJustify = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M3,5h18c0.6,0,1-0.4,1-1s-0.4-1-1-1H3C2.4,3,2,3.4,2,4S2.4,5,3,5z M21,19H11c-0.6,0-1,0.4-1,1s0.4,1,1,1h10c0.6,0,1-0.4,1-1S21.6,19,21,19z M21,11H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,11,21,11z M21,15H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,15,21,15z M21,7H3C2.4,7,2,7.4,2,8s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,7,21,7z'
  }));
};

export default UisAlignRightJustify;