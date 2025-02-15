import React from 'react';
import { Props } from '../index';

const UisAnalytics = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M10,2C9.4,2,9,2.4,9,3c0,0,0,0,0,0v18c0,0.6,0.4,1,1,1s1-0.4,1-1V3C11,2.4,10.6,2,10,2C10,2,10,2,10,2z M5,12c-0.6,0-1,0.4-1,1c0,0,0,0,0,0v8c0,0.6,0.4,1,1,1s1-0.4,1-1v-8C6,12.4,5.6,12,5,12C5,12,5,12,5,12z M15,8c-0.6,0-1,0.4-1,1c0,0,0,0,0,0v12c0,0.6,0.4,1,1,1s1-0.4,1-1V9C16,8.4,15.6,8,15,8C15,8,15,8,15,8z M20,16c-0.6,0-1,0.4-1,1c0,0,0,0,0,0v4c0,0.6,0.4,1,1,1s1-0.4,1-1v-4C21,16.4,20.6,16,20,16C20,16,20,16,20,16z'
  }));
};

export default UisAnalytics;