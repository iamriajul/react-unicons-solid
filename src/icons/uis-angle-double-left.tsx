import React from 'react';
import { Props } from '../index';

const UisAngleDoubleLeft = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M17,14.3L14.7,12L17,9.7c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-3,3c0,0,0,0,0,0c-0.4,0.4-0.4,1,0,1.4l3,3c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3C17.3,15.3,17.3,14.7,17,14.3z M9.2,12l2.3-2.3c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-3,3c0,0,0,0,0,0c-0.4,0.4-0.4,1,0,1.4l3,3c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L9.2,12z'
  }));
};

export default UisAngleDoubleLeft;