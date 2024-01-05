import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarField = ({ selected, onChange, placeholder }) => {
  const today = new Date();

  return (
    <div className='calendar-field-div-outer'>
      <DatePicker
        selected={selected}
        placeholderText={placeholder}
        onChange={onChange}
        dateFormat="dd/MM/yyyy"
        minDate={today}
        className='calendar-input-inner'
      />
    </div>
  );
};

export default CalendarField;
