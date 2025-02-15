import React from 'react';
import { Props } from '../index';

const UisHeadSide = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M13.2,2c-2-0.1-4,0.7-5.5,2.1C6.3,5.5,5.5,7.5,5.5,9.5v0l-1.9,4c-0.2,0.5,0,1.1,0.5,1.3C4.2,15,4.4,15,4.5,15h1v2c0,1.1,0.9,2,2,2h1v2c0,0.6,0.4,1,1,1h0c0.6,0,8.6,0,9,0c0.1,0,0.2,0,0.3,0c0.5-0.2,0.8-0.7,0.7-1.2l-0.9-3.2l1.9-7.3c0-0.1,0-0.2,0-0.3V9.8C20.5,5.7,17.3,2.2,13.2,2z'
  }));
};

export default UisHeadSide;