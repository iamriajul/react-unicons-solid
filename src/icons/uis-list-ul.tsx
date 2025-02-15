import React from 'react';
import { Props } from '../index';

const UisListUl = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M7,8h14c0.6,0,1-0.4,1-1s-0.4-1-1-1H7C6.4,6,6,6.4,6,7S6.4,8,7,8z M21,11H7c-0.6,0-1,0.4-1,1s0.4,1,1,1h14c0.6,0,1-0.4,1-1S21.6,11,21,11z M21,16H7c-0.6,0-1,0.4-1,1s0.4,1,1,1h14c0.6,0,1-0.4,1-1S21.6,16,21,16z M3.7,6.3C3.6,6.2,3.5,6.1,3.4,6.1C3,5.9,2.6,6,2.3,6.3C2.2,6.4,2.1,6.5,2.1,6.6C2,6.9,2,7.1,2.1,7.4c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.2,0.2,0.3,0.2C2.7,8,2.9,8,3,8c0.3,0,0.5-0.1,0.7-0.3c0.1-0.1,0.2-0.2,0.2-0.3C4,7.1,4,6.9,3.9,6.6C3.9,6.5,3.8,6.4,3.7,6.3z M3.7,11.3C3.4,11,3,10.9,2.6,11.1c-0.1,0.1-0.2,0.1-0.3,0.2c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.2,0.2,0.3,0.2C2.7,13,2.9,13,3,13c0.1,0,0.3,0,0.4-0.1c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.2,0.2-0.3c0.1-0.2,0.1-0.5,0-0.8C3.9,11.5,3.8,11.4,3.7,11.3z M3.7,16.3c-0.1-0.1-0.2-0.2-0.3-0.2c-0.2-0.1-0.5-0.1-0.8,0c-0.1,0-0.2,0.1-0.3,0.2c-0.1,0.1-0.2,0.2-0.2,0.3C1.9,17,2,17.4,2.3,17.7c0.1,0.1,0.2,0.2,0.3,0.2C2.7,18,2.9,18,3,18c0.1,0,0.3,0,0.4-0.1c0.1-0.1,0.2-0.1,0.3-0.2C4,17.4,4.1,17,3.9,16.6C3.9,16.5,3.8,16.4,3.7,16.3z'
  }));
};

export default UisListUl;