import React from 'react';
import { Props } from '../index';

const UisStopwatch = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M10,4.5h4c0.6,0,1-0.4,1-1s-0.4-1-1-1h-4c-0.6,0-1,0.4-1,1S9.4,4.5,10,4.5z M18.3,8.6l0.9-0.9c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-0.9,0.9C14,4.9,10,4.9,7.1,7.2L6.2,6.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l0.9,0.9C3,12.1,3.6,17.1,7.1,19.8c3.5,2.7,8.5,2.1,11.2-1.4C20.6,15.5,20.6,11.5,18.3,8.6z M13.7,14.5c-0.4,0.6-1,1-1.7,1c-1.1,0-2-0.9-2-2c0-0.7,0.4-1.4,1-1.7V9.5c0-0.6,0.4-1,1-1s1,0.4,1,1v2.3C14,12.3,14.3,13.5,13.7,14.5z'
  }));
};

export default UisStopwatch;