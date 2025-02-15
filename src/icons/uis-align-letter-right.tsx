import React from 'react';
import { Props } from '../index';

const UisAlignLetterRight = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M21,20H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,20,21,20z M10,4h11c0.6,0,1-0.4,1-1s-0.4-1-1-1H10C9.4,2,9,2.4,9,3S9.4,4,10,4z M21,16H11c-0.6,0-1,0.4-1,1s0.4,1,1,1h10c0.6,0,1-0.4,1-1S21.6,16,21,16z M21,10H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,10,21,10z M21,6H3C2.4,6,2,6.4,2,7s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,6,21,6z'
  }));
};

export default UisAlignLetterRight;