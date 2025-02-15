import React from 'react';
import { Props } from '../index';

const UisSignalAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M5,18L5,18c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1s1-0.4,1-1v-2C6,18.4,5.6,18,5,18z M10,14L10,14c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6C11,14.4,10.6,14,10,14z M20,2L20,2c-0.6,0-1,0.4-1,1v18c0,0.6,0.4,1,1,1s1-0.4,1-1V3C21,2.4,20.6,2,20,2z M15,9L15,9c-0.6,0-1,0.4-1,1v11c0,0.6,0.4,1,1,1s1-0.4,1-1V10C16,9.4,15.6,9,15,9z'
  }));
};

export default UisSignalAlt;