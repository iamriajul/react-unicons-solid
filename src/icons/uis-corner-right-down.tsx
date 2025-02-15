import React from 'react';
import { Props } from '../index';

const UisCornerRightDown = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M21.7,13.4c-0.4-0.4-1-0.4-1.4,0l-2.9,2.9v-8c0-2.2-1.8-4-4-4H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h10.4c1.1,0,2,0.9,2,2v8l-2.9-2.9c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l4.6,4.6c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l4.6-4.6C22.1,14.4,22.1,13.7,21.7,13.4z'
  }));
};

export default UisCornerRightDown;