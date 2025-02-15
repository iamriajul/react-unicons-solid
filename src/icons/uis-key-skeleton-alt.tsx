import React from 'react';
import { Props } from '../index';

const UisKeySkeletonAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M20.3,5.1l1.4-1.4c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L9.8,12.8C9,12.3,8,12,7,12c-2.8,0-5,2.2-5,5s2.2,5,5,5c2.8,0,5-2.2,5-5c0-1-0.3-2-0.8-2.8l4.9-4.9l1.4,1.4c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4l-1.4-1.4l1.4-1.4l1.4,1.4c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4L20.3,5.1z M7,20c-1.7,0-3-1.3-3-3s1.3-3,3-3c1.7,0,3,1.3,3,3C10,18.7,8.7,20,7,20z'
  }));
};

export default UisKeySkeletonAlt;