import React from 'react';
import { Props } from '../index';

const UisBriefcase = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M17,15.5V17c0,0.6-0.4,1-1,1s-1-0.4-1-1v-1.5H9V17c0,0.6-0.4,1-1,1s-1-0.4-1-1v-1.5H5c-0.7,0-1.4-0.2-2-0.5v4c0,1.7,1.3,3,3,3h12c1.7,0,3-1.3,3-3v-4c-0.6,0.3-1.3,0.5-2,0.5H17z M21,6h-4V5c0-1.7-1.3-3-3-3h-4C8.3,2,7,3.3,7,5v1H3C2.4,6,2,6.4,2,7v4c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V7C22,6.4,21.6,6,21,6z M15,6H9V5c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1V6z'
  }));
};

export default UisBriefcase;