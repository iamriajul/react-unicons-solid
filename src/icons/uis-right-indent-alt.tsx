import React from 'react';
import { Props } from '../index';

const UisRightIndentAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M21,17h-8c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1S21.6,17,21,17z M21,13h-8c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1S21.6,13,21,13z M13,7h8c0.6,0,1-0.4,1-1s-0.4-1-1-1h-8c-0.6,0-1,0.4-1,1S12.4,7,13,7z M21,9h-8c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1S21.6,9,21,9z M9,5C8.4,5,8,5.4,8,6v12c0,0.6,0.4,1,1,1h0c0.6,0,1-0.4,1-1V6C10,5.4,9.6,5,9,5z M3.6,9.6C3.2,9.2,2.6,9.3,2.2,9.7c-0.4,0.4-0.3,1.1,0.1,1.4L3.4,12l-1.1,0.9C2.1,13.1,2,13.4,2,13.7c0,0.6,0.4,1,1,1c0.2,0,0.5-0.1,0.6-0.2l2-1.7c0,0,0.1-0.1,0.1-0.1c0.4-0.4,0.3-1.1-0.1-1.4L3.6,9.6z'
  }));
};

export default UisRightIndentAlt;