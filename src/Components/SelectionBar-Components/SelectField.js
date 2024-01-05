import React from 'react';

const SelectField = ({ options, value, onChange, className }) => {
  return (
    <div className='select-field-outer'>
      <select value={value} onChange={(e) => onChange(e.target.value)} className={className}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
