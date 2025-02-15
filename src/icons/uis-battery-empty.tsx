import React from 'react';
import { Props } from '../index';

const UisBatteryEmpty = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M21,10c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h0c0.6,0,1-0.4,1-1v-2C22,10.4,21.6,10,21,10z M17,7H4C2.9,7,2,7.9,2,9v6c0,1.1,0.9,2,2,2h13c1.1,0,2-0.9,2-2V9C19,7.9,18.1,7,17,7z'
  }));
};

export default UisBatteryEmpty;