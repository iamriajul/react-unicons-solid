import React from 'react';
import { Props } from '../index';

const UisHorizontalAlignLeft = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M21,10h-5V7c0-0.6-0.4-1-1-1H4V3c0-0.6-0.4-1-1-1C2.5,2,2,2.4,2,3v18c0,0.6,0.4,1,1,1c0.6,0,1-0.4,1-1v-3h17c0.6,0,1-0.4,1-1v-6C22,10.4,21.6,10,21,10z M14,10H4V8h10V10z'
  }));
};

export default UisHorizontalAlignLeft;