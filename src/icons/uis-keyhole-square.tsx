import React from 'react';
import { Props } from '../index';

const UisKeyholeSquare = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M19,2H5C3.3,2,2,3.3,2,5v14c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V5C22,3.3,20.7,2,19,2z M13.7,11c-0.2,0.3-0.4,0.6-0.7,0.7V15c0,0.6-0.4,1-1,1s-1-0.4-1-1v-3.3c-1-0.6-1.3-1.8-0.7-2.7S12,7.7,13,8.3C14,8.8,14.3,10,13.7,11z'
  }));
};

export default UisKeyholeSquare;