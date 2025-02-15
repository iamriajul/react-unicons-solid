import React from 'react';
import { Props } from '../index';

const UisVectorSquare = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M20,16.2V7.8c1.2-0.4,2-1.5,2-2.8c0-1.7-1.3-3-3-3c-1.3,0-2.4,0.8-2.8,2H7.8C7.4,2.8,6.3,2,5,2C3.3,2,2,3.3,2,5c0,1.3,0.8,2.4,2,2.8v8.4c-1.2,0.4-2,1.5-2,2.8c0,1.7,1.3,3,3,3c1.3,0,2.4-0.8,2.8-2h8.4c0.4,1.2,1.5,2,2.8,2c1.7,0,3-1.3,3-3C22,17.7,21.2,16.6,20,16.2z M16.2,18H7.8c-0.3-0.8-1-1.5-1.8-1.8V7.8c0.8-0.3,1.5-1,1.8-1.8h8.4c0.3,0.8,1,1.5,1.8,1.8v8.4C17.2,16.5,16.5,17.2,16.2,18z M19,4c0.6,0,1,0.4,1,1c0,0.6-0.4,1-1,1s-1-0.4-1-1S18.4,4,19,4z M5,4c0.6,0,1,0.4,1,1c0,0.6-0.4,1-1,1S4,5.6,4,5S4.4,4,5,4z M5,20c-0.6,0-1-0.4-1-1s0.4-1,1-1c0.6,0,1,0.4,1,1C6,19.6,5.6,20,5,20z M19,20c-0.6,0-1-0.4-1-1s0.4-1,1-1c0.6,0,1,0.4,1,1C20,19.6,19.6,20,19,20z'
  }));
};

export default UisVectorSquare;