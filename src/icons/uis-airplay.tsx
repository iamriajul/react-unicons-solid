import React from 'react';
import { Props } from '../index';

const UisAirplay = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M12.8,13.4c-0.1-0.1-0.1-0.2-0.2-0.2c-0.5-0.3-1.1-0.2-1.5,0.2l-4,6C7.1,19.6,7,19.8,7,20c0,0.6,0.4,1,1,1h8c0.2,0,0.4-0.1,0.6-0.2c0.5-0.3,0.6-0.9,0.3-1.4L12.8,13.4z M19,3H5C3.3,3,2,4.3,2,6v9c0,1.7,1.3,3,3,3h0.8c0.6,0,1-0.4,1-1s-0.4-1-1-1H5c-0.6,0-1-0.4-1-1V6c0-0.6,0.4-1,1-1h14c0.6,0,1,0.4,1,1v9c0,0.6-0.4,1-1,1h-0.8c-0.6,0-1,0.4-1,1s0.4,1,1,1H19c1.7,0,3-1.3,3-3V6C22,4.3,20.7,3,19,3z'
  }));
};

export default UisAirplay;