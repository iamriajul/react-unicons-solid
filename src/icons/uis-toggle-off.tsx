import React from 'react';
import { Props } from '../index';

const UisToggleOff = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M16.5,6.5h-9C4.5,6.5,2,9,2,12s2.5,5.5,5.5,5.5h9c3,0,5.5-2.5,5.5-5.5S19.5,6.5,16.5,6.5z M7.5,14.5C6.1,14.5,5,13.4,5,12s1.1-2.5,2.5-2.5S10,10.6,10,12S8.9,14.5,7.5,14.5z'
  }));
};

export default UisToggleOff;