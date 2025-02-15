import React from 'react';
import { Props } from '../index';

const UisClockNine = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M13,12c0,0.6-0.4,1-1,1H9c-0.6,0-1-0.4-1-1s0.4-1,1-1h2V7c0-0.6,0.4-1,1-1s1,0.4,1,1V12z'
  }));
};

export default UisClockNine;