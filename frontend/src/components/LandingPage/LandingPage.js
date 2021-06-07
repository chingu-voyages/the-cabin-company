import React, { useState } from 'react';
import MainPhoto from './MainPhoto';
import SingleLineGrid from './SingleLineGrid';
import MultiLineGrid from './MultiLineGrid';
import DateRangePicker from '../DateRangePicker/DatePickerCalendar';



export default function LandingPage() {
  return (
    <div>
      <MainPhoto />
      <MultiLineGrid />
      <SingleLineGrid />
      <DateRangePicker />
     
     
      
    </div>
  );
}
