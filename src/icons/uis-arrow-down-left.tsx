import React from 'react';
import { Props } from '../index';

const UisArrowDownLeft = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M17,16H9.4l8.3-8.3c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L8,14.6V7c0-0.6-0.4-1-1-1S6,6.4,6,7v10c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.5,0.5C6.7,18,6.9,18,7,18h10c0.6,0,1-0.4,1-1S17.6,16,17,16z'
  }));
};

export default UisArrowDownLeft;