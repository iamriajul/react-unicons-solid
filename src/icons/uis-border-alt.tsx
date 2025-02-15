import React from 'react';
import { Props } from '../index';

const UisBorderAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M20.5,3.5c0-0.6-0.4-1-1-1h-16c-0.6,0-1,0.4-1,1v16c0,0.6,0.4,1,1,1h0c0.6,0,1-0.4,1-1v-15h15C20.1,4.5,20.5,4.1,20.5,3.5z M19.5,10.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.1,10.5,19.5,10.5z M19.5,6.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.1,6.5,19.5,6.5z M19.5,14.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.1,14.5,19.5,14.5z M7.5,18.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S8.1,18.5,7.5,18.5z M11.5,18.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.1,18.5,11.5,18.5z M15.5,18.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S16.1,18.5,15.5,18.5z M19.5,18.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.1,18.5,19.5,18.5z'
  }));
};

export default UisBorderAlt;