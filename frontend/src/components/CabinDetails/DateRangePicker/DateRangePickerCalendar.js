import React, { useState } from 'react';
import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';
import { DateRangePickerCalendar, START_DATE } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';
import CardContent from '@material-ui/core/CardContent';
import './DateRangePickerCalendar.css';

export default function DateRangePickerCalendarExample() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [focus, setFocus] = useState(START_DATE);
  const handleFocusChange = newFocus => {
    setFocus(newFocus || START_DATE);
  };
  return (
    <CardContent>
      <div>
        <DateRangePickerCalendar
          startDate={startDate}
          endDate={endDate}
          focus={focus}
          onStartDateChange={setStartDate}
          onEndDateChange={setEndDate}
          onFocusChange={handleFocusChange}
          locale={enGB}
        />
      </div>
    </CardContent>
  );
}
