import React from 'react';
import { Props } from '../index';

const UisDocumentLayoutCenter = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M19,8h2c0.6,0,1-0.4,1-1s-0.4-1-1-1h-2c-0.6,0-1,0.4-1,1S18.4,8,19,8z M21,10h-2c-0.6,0-1,0.4-1,1s0.4,1,1,1h2c0.6,0,1-0.4,1-1S21.6,10,21,10z M3,8h2c0.6,0,1-0.4,1-1S5.6,6,5,6H3C2.4,6,2,6.4,2,7S2.4,8,3,8z M3,12h2c0.6,0,1-0.4,1-1s-0.4-1-1-1H3c-0.6,0-1,0.4-1,1S2.4,12,3,12z M9,12h6c0.6,0,1-0.4,1-1V5c0-0.6-0.4-1-1-1H9C8.4,4,8,4.4,8,5v6C8,11.6,8.4,12,9,12z M21,14H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,14,21,14z M13,18H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h10c0.6,0,1-0.4,1-1S13.6,18,13,18z'
  }));
};

export default UisDocumentLayoutCenter;