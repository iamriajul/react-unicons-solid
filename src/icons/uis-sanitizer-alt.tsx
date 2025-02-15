import React from 'react';
import { Props } from '../index';

const UisSanitizerAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M16,8V5c0-0.6-0.4-1-1-1h-1V3h1c0.6,0,1-0.4,1-1s-0.4-1-1-1h-4.8C8.5,1,6.9,2,6.1,3.6C5.9,4,6.1,4.6,6.6,4.9c0.5,0.2,1.1,0,1.3-0.4C8.3,3.6,9.2,3,10.2,3H12v1h-1c-0.6,0-1,0.4-1,1v3c-1.7,0-3,1.3-3,3v9c0,1.7,1.3,3,3,3h6c1.7,0,3-1.3,3-3v-9C19,9.3,17.7,8,16,8z M12,6h2v2h-2V6z M14,17h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S14.6,17,14,17z'
  }));
};

export default UisSanitizerAlt;