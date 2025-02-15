import React from 'react';
import { Props } from '../index';

const UisRepeat = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M5.5,17.5H4v-11h7.8L11,7.3c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3l2.5-2.5c0.4-0.4,0.4-1,0-1.4l-2.5-2.5c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l0.8,0.8H3c-0.6,0-1,0.4-1,1v13c0,0.6,0.4,1,1,1h2.5c0.6,0,1-0.4,1-1S6.1,17.5,5.5,17.5z M21,4.5h-2.5c-0.6,0-1,0.4-1,1s0.4,1,1,1H20v11h-8.4l0.8-0.8c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-2.5,2.5c0,0,0,0,0,0c-0.4,0.4-0.4,1,0,1.4l2.5,2.5c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4l-0.8-0.8H21c0.6,0,1-0.4,1-1v-13C22,4.9,21.6,4.5,21,4.5z'
  }));
};

export default UisRepeat;