import React, { useState, useEffect } from 'react';
import CalendarField from './CalendarField';
import SelectField from './SelectField';
import FormButton from './FormButton';

const BookHotelForm = () => {
  const [roomType, setRoomType] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const roomTypeOptions = [
    { value: 'roomType', label: 'Rooms' },
    { value: 'single', label: 'Single Room' },
    { value: 'double', label: 'Double Room' },
    { value: 'suite', label: 'Suite' },
  ];

  useEffect(() => {
    const checkButtonDisabled = () => {
      setIsButtonDisabled(!(roomType && checkInDate && checkOutDate));
    };
    checkButtonDisabled();
  }, [roomType, checkInDate, checkOutDate]);

  const handleRoomTypeChange = (value) => {
    setRoomType(value);
  };

  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Room Type: ${roomType}\nCheck In Date: ${checkInDate.toLocaleDateString()}\nCheck Out Date: ${checkOutDate.toLocaleDateString()}`);
    setRoomType('');
    setCheckInDate(null);
    setCheckOutDate(null);
    setIsButtonDisabled(true);
  };

  return (
    <form className="book-hotel-form" onSubmit={handleSubmit}>
      <CalendarField placeholder="Check In" selected={checkInDate} onChange={handleCheckInDateChange} />
      <CalendarField placeholder="Check Out" selected={checkOutDate} onChange={handleCheckOutDateChange} />
      <SelectField
        options={roomTypeOptions}
        value={roomType}
        onChange={handleRoomTypeChange}
        className='select-room-type-field'
      />
      <FormButton type="submit" buttonText="Check Now" disabled={isButtonDisabled} classname='book-hotel-form-submit' />
    </form>
  );
};

export default BookHotelForm;
