import React from 'react';
import { Props } from '../index';

const UisClock = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M15.5,14c-0.3,0.5-0.9,0.6-1.4,0.4l-2.6-1.5C11.2,12.7,11,12.4,11,12V7c0-0.6,0.4-1,1-1s1,0.4,1,1v4.4l2.1,1.2C15.6,12.9,15.7,13.5,15.5,14z'
  }));
};

export default UisClock;