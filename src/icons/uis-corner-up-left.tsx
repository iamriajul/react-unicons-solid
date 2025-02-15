import React from 'react';
import { Props } from '../index';

const UisCornerUpLeft = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M14.7,6.6h-7l2.9-2.9c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L4.6,6.9l0,0c-0.4,0.4-0.4,1,0,1.4L9.2,13c0.2,0.2,0.4,0.3,0.7,0.3v0c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.7,8.6h7c1.7,0,3,1.3,3,3V21c0,0.6,0.4,1,1,1s1-0.4,1-1v-9.4C19.7,8.9,17.4,6.6,14.7,6.6z'
  }));
};

export default UisCornerUpLeft;