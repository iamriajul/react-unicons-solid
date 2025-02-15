import React from 'react';
import { Props } from '../index';

const UisHeadSideMask = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M13.2,2c-2-0.1-4,0.7-5.5,2.1C6.3,5.5,5.5,7.4,5.5,9.5l-1.8,3c-0.1,0.2-0.2,0.3-0.2,0.5v0c0,0.1,0,0.2,0.1,0.3L5,17.2c0,0,0,0.1,0,0.1c0.5,1,1.5,1.7,2.7,1.7h0.8v2c0,0.6,0.4,1,1,1s1-0.4,1-1v-2h2l0,0c0.1,0,0.2,0,0.3-0.1l3.7-1.3c0,0,0,0.1,0,0.1l1,3.5c0.1,0.4,0.5,0.7,1,0.7c0.1,0,0.2,0,0.3,0c0.5-0.2,0.8-0.7,0.7-1.2l-0.9-3.2l1.9-7.3c0-0.1,0-0.2,0-0.3V9.8C20.5,5.7,17.3,2.2,13.2,2z M17,15.4l-3.5,1.2v-2.9l4.3-1.4L17,15.4z M18.4,10c-0.1,0-0.2,0-0.3,0L12.3,12h-6l1.1-1.7c0.1-0.2,0.2-0.4,0.1-0.6c0,0,0-0.2,0-0.2C7.5,6.5,10,4,13,4c0.1,0,0.1,0,0.2,0c3,0.2,5.4,2.7,5.3,5.8L18.4,10z'
  }));
};

export default UisHeadSideMask;