import React from 'react';
import { Props } from '../index';

const UisArrowCircleDown = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M15.7,12.7l-3,3c-0.1,0.1-0.2,0.2-0.3,0.2c-0.2,0.1-0.5,0.1-0.8,0c-0.1,0-0.2-0.1-0.3-0.2l-3-3c0,0,0,0,0,0c-0.4-0.4-0.4-1,0-1.4c0,0,0,0,0,0c0.4-0.4,1-0.4,1.4,0l1.3,1.3V9c0-0.6,0.4-1,1-1s1,0.4,1,1v3.6l1.3-1.3c0.4-0.4,1-0.4,1.4,0C16.1,11.7,16.1,12.3,15.7,12.7z'
  }));
};

export default UisArrowCircleDown;