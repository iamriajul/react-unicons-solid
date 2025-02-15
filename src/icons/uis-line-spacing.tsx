import React from 'react';
import { Props } from '../index';

const UisLineSpacing = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M10,8h11c0.6,0,1-0.4,1-1s-0.4-1-1-1H10C9.4,6,9,6.4,9,7S9.4,8,10,8z M5.7,15.3V8.7C5.9,8.9,6.1,9,6.3,9C6.6,9,6.8,8.9,7,8.8c0.4-0.4,0.5-1,0.1-1.4l-1.7-2C5.2,5.1,5,5,4.7,5S4.1,5.1,3.9,5.4l-1.7,2c-0.3,0.4-0.3,1,0.2,1.4c0.4,0.3,0.9,0.3,1.3,0v6.6c-0.4-0.3-0.9-0.4-1.3,0c-0.4,0.4-0.5,1-0.1,1.4l1.7,2C4.1,18.9,4.4,19,4.7,19s0.6-0.1,0.8-0.4l1.7-2c0.4-0.4,0.3-1.1-0.1-1.4C6.6,14.9,6,14.9,5.7,15.3z M21,11H10c-0.6,0-1,0.4-1,1s0.4,1,1,1h11c0.6,0,1-0.4,1-1S21.6,11,21,11z M21,16H10c-0.6,0-1,0.4-1,1s0.4,1,1,1h11c0.6,0,1-0.4,1-1S21.6,16,21,16z'
  }));
};

export default UisLineSpacing;