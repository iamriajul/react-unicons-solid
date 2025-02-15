import React from 'react';
import { Props } from '../index';

const UisSubject = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M3,8h18c0.6,0,1-0.4,1-1s-0.4-1-1-1H3C2.4,6,2,6.4,2,7S2.4,8,3,8z M13,16H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h10c0.6,0,1-0.4,1-1S13.6,16,13,16z M21,11H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,11,21,11z'
  }));
};

export default UisSubject;