import React from 'react';
import { Props } from '../index';

const UisGraphBar = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M6,13H2c-0.6,0-1,0.4-1,1c0,0,0,0,0,0v8c0,0.6,0.4,1,1,1c0,0,0,0,0,0h4c0.6,0,1-0.4,1-1c0,0,0,0,0,0v-8C7,13.4,6.6,13,6,13C6,13,6,13,6,13z M22,9h-4c-0.6,0-1,0.4-1,1c0,0,0,0,0,0v12c0,0.6,0.4,1,1,1c0,0,0,0,0,0h4c0.6,0,1-0.4,1-1c0,0,0,0,0,0V10C23,9.4,22.6,9,22,9C22,9,22,9,22,9z M14,1h-4C9.4,1,9,1.4,9,2c0,0,0,0,0,0v20c0,0.6,0.4,1,1,1c0,0,0,0,0,0h4c0.6,0,1-0.4,1-1c0,0,0,0,0,0V2C15,1.4,14.6,1,14,1C14,1,14,1,14,1z'
  }));
};

export default UisGraphBar;