import React from 'react';
import { Props } from '../index';

const UisAnchor = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M19,13h-2c-0.6,0-1,0.4-1,1s0.4,1,1,1h0.9c-0.4,2.5-2.4,4.5-4.9,4.9V11h1c0.6,0,1-0.4,1-1s-0.4-1-1-1h-1V7.8c1.2-0.4,2-1.5,2-2.8c0-1.7-1.3-3-3-3S9,3.3,9,5c0,1.3,0.8,2.4,2,2.8V9h-1c-0.6,0-1,0.4-1,1s0.4,1,1,1h1v8.9c-2.5-0.4-4.5-2.4-4.9-4.9H7c0.6,0,1-0.4,1-1s-0.4-1-1-1H5c-0.6,0-1,0.4-1,1c0,4.4,3.6,8,8,8c4.4,0,8-3.6,8-8C20,13.4,19.6,13,19,13z M12,4c0.6,0,1,0.4,1,1c0,0.6-0.4,1-1,1s-1-0.4-1-1S11.4,4,12,4z'
  }));
};

export default UisAnchor;