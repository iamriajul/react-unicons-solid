import React from 'react';
import { Props } from '../index';

const UisArrowCircleRight = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10c5.5,0,10-4.5,10-10C22,6.5,17.5,2,12,2z M15.7,12.7C15.7,12.7,15.7,12.7,15.7,12.7l-3,3c-0.4,0.4-1,0.4-1.4,0c0,0,0,0,0,0c-0.4-0.4-0.4-1,0-1.4c0,0,0,0,0,0l1.3-1.3H9c-0.6,0-1-0.4-1-1s0.4-1,1-1h3.6l-1.3-1.3c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l3,3C16.1,11.7,16.1,12.3,15.7,12.7z'
  }));
};

export default UisArrowCircleRight;