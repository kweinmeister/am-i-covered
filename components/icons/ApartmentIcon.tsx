import React from 'react';
import { IconProps } from '../../types';

const ApartmentIcon = ({ className = "w-6 h-6" }: IconProps): React.ReactNode => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM10.5 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm3.75-1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM7.5 7.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM13.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75-1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
  </svg>
);
export default ApartmentIcon;