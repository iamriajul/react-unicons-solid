import React from 'react';
import { Props } from '../index';

const UisListUiAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M7.5,8h14c0.6,0,1-0.4,1-1s-0.4-1-1-1h-14c-0.6,0-1,0.4-1,1S6.9,8,7.5,8z M21.5,11h-10c-0.6,0-1,0.4-1,1s0.4,1,1,1h10c0.6,0,1-0.4,1-1S22.1,11,21.5,11z M21.5,16h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6c0.6,0,1-0.4,1-1S22.1,16,21.5,16z M3.5,6c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S4.1,6,3.5,6z M7.5,11c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S8.1,11,7.5,11z M11.5,16c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.1,16,11.5,16z'
  }));
};

export default UisListUiAlt;