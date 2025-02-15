import React from 'react';
import { Props } from '../index';

const UisBorderHorizontal = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M20,11H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h16c0.6,0,1-0.4,1-1S20.6,11,20,11z M12,15c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.6,15,12,15z M12,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.6,19,12,19z M12,9c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S11.4,9,12,9z M12,5c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S11.4,5,12,5z M4,15c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S4.6,15,4,15z M4,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S4.6,19,4,19z M4,9c0.6,0,1-0.4,1-1S4.6,7,4,7S3,7.4,3,8S3.4,9,4,9z M4,5c0.6,0,1-0.4,1-1S4.6,3,4,3S3,3.4,3,4S3.4,5,4,5z M8,5c0.6,0,1-0.4,1-1S8.6,3,8,3S7,3.4,7,4S7.4,5,8,5z M16,5c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S15.4,5,16,5z M8,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S8.6,19,8,19z M16,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S16.6,19,16,19z M20,15c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.6,15,20,15z M20,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.6,19,20,19z M20,7c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.6,7,20,7z M20,5c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S19.4,5,20,5z'
  }));
};

export default UisBorderHorizontal;