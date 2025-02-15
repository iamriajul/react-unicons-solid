import React from 'react';
import { Props } from '../index';

const UisExclamationOctagon = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M21.7,7.6l-5.3-5.3C16.2,2.1,16,2,15.7,2H8.3C8,2,7.8,2.1,7.6,2.3L2.3,7.6C2.1,7.8,2,8,2,8.3v7.5c0,0.3,0.1,0.5,0.3,0.7l5.3,5.3C7.8,21.9,8,22,8.3,22h7.5c0.3,0,0.5-0.1,0.7-0.3l5.3-5.3c0.2-0.2,0.3-0.4,0.3-0.7V8.3C22,8,21.9,7.8,21.7,7.6z M12,17c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,17,12,17z M13,12c0,0.6-0.4,1-1,1s-1-0.4-1-1V8c0-0.6,0.4-1,1-1s1,0.4,1,1V12z'
  }));
};

export default UisExclamationOctagon;