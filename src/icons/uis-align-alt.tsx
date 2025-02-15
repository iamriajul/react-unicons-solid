import React from 'react';
import { Props } from '../index';

const UisAlignAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M10,15H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h7c0.6,0,1-0.4,1-1S10.6,15,10,15z M10,11H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h7c0.6,0,1-0.4,1-1S10.6,11,10,11z M10,7H3C2.4,7,2,7.4,2,8s0.4,1,1,1h7c0.6,0,1-0.4,1-1S10.6,7,10,7z M14,5h7c0.6,0,1-0.4,1-1s-0.4-1-1-1h-7c-0.6,0-1,0.4-1,1S13.4,5,14,5z M10,19H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h7c0.6,0,1-0.4,1-1S10.6,19,10,19z M21,15h-7c-0.6,0-1,0.4-1,1s0.4,1,1,1h7c0.6,0,1-0.4,1-1S21.6,15,21,15z M21,7h-7c-0.6,0-1,0.4-1,1s0.4,1,1,1h7c0.6,0,1-0.4,1-1S21.6,7,21,7z M10,3H7C6.4,3,6,3.4,6,4s0.4,1,1,1h3c0.6,0,1-0.4,1-1S10.6,3,10,3z M21,11h-7c-0.6,0-1,0.4-1,1s0.4,1,1,1h7c0.6,0,1-0.4,1-1S21.6,11,21,11z M17,19h-3c-0.6,0-1,0.4-1,1s0.4,1,1,1h3c0.6,0,1-0.4,1-1S17.6,19,17,19z'
  }));
};

export default UisAlignAlt;