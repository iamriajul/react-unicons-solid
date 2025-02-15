import React from 'react';
import { Props } from '../index';

const UisWrapText = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M3,7.2h18c0.6,0,1-0.4,1-1s-0.4-1-1-1H3c-0.6,0-1,0.4-1,1S2.4,7.2,3,7.2z M9,15.2H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h6c0.6,0,1-0.4,1-1S9.6,15.2,9,15.2z M18.5,10.2H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h15.5c0.8,0,1.5,0.7,1.5,1.5s-0.7,1.5-1.5,1.5h-2.8c0.3-0.4,0.4-0.9,0-1.3c-0.4-0.4-1-0.5-1.4-0.1l-2,1.7c0,0-0.1,0.1-0.1,0.1c-0.4,0.4-0.3,1.1,0.1,1.4l2,1.7c0.2,0.1,0.4,0.2,0.6,0.2c0.3,0,0.6-0.1,0.8-0.4c0.3-0.4,0.3-0.9,0-1.3h2.8c1.9,0,3.5-1.6,3.5-3.5S20.4,10.2,18.5,10.2z'
  }));
};

export default UisWrapText;