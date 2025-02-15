import React from 'react';
import { Props } from '../index';

const UisAngleDoubleRight = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M8.5,8.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4L9.3,12L7,14.3c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3l3-3c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4L8.5,8.3z M17,11.3l-3-3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l2.3,2.3l-2.3,2.3c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3l3-3C17.3,12.3,17.3,11.7,17,11.3z'
  }));
};

export default UisAngleDoubleRight;