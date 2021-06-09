import React, { useState } from 'react';
import * as dateFns from 'date-fns';
import { enGB } from 'date-fns/locale';
import { DateRangePickerCalendar, START_DATE } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';
import CardContent from '@material-ui/core/CardContent';
import './DateRangePickerCalendar.css';

export default function DateRangePickerCalendarExample(props) {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [focus, setFocus] = useState(START_DATE);
  const handleFocusChange = newFocus => {
    setFocus(newFocus || START_DATE);
  };

  const existingCheckins = props.bookings.map(b => dateFns.format(new Date(b.checkIn), 'MM-dd-yyyy'));

  const existingCheckouts = props.bookings.map(b => dateFns.format(new Date(b.checkOut), 'MM-dd-yyyy'));


  const checkDate = (date) => {
    let dateIsBooked;
    props.bookings.forEach(b => {
      if (dateFns.isAfter(new Date(date), new Date(b.checkIn)) && dateFns.isBefore(new Date(date), new Date(b.checkOut))) {
        dateIsBooked = true;
      }
    });

    return dateIsBooked;
  };

  const modifiers = {
    disabled: date => existingCheckins.includes(dateFns.format(new Date(date), 'MM-dd-yyyy')) || existingCheckouts.includes(dateFns.format(new Date(date), 'MM-dd-yyyy')) || checkDate(date)
  };

  return (
    <CardContent>
      <div>
        <DateRangePickerCalendar
          startDate={startDate}
          endDate={endDate}
          focus={focus}
          modifiers={modifiers}
          onStartDateChange={(e) => {
            props.start(e);
            setStartDate(e);
          }}
          onEndDateChange={(e) => {
            props.end(e);
            setEndDate(e);
          }}
          onFocusChange={handleFocusChange}
          locale={enGB}

        />
      </div>
    </CardContent>
  );
}
