
import React from 'react';
import { SelectOption, IconProps } from '../../types';

interface SelectDropdownProps<T = string> {
  options: SelectOption<T>[];
  value: T | null;
  onChange: (value: T) => void;
  placeholder: string;
  label?: string;
  disabled?: boolean;
}

const ChevronDownIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
  </svg>
);

function SelectDropdown<T extends string | number,>(props: SelectDropdownProps<T>): React.ReactNode {
  const { options, value, onChange, placeholder, label, disabled = false } = props;

  const selectedOption = options.find(opt => opt.value === value);
  const IconComponent = selectedOption?.icon;

  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-slate-700 mb-1">{label}</label>}
      <div className="relative">
        <select
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value as T)}
          disabled={disabled}
          className={`
            w-full pl-3 pr-10 py-2.5 text-left bg-white border border-slate-300 rounded-md shadow-sm 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
            sm:text-sm appearance-none
            ${disabled ? 'bg-slate-100 cursor-not-allowed text-slate-500' : 'hover:border-slate-400'}
            ${IconComponent ? 'pl-10' : ''}
          `}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((option) => (
            <option key={option.value.toString()} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {IconComponent && value && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <IconComponent className="w-5 h-5 text-slate-500" />
          </div>
        )}
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <ChevronDownIcon className="w-5 h-5 text-slate-400" />
        </div>
      </div>
    </div>
  );
}

export default SelectDropdown;
