import React, { useState } from 'react';
// calendar datepicker package with styling
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function BookingForm() {
    // useState variable for calendar date
    const [value, onChange] = useState(new Date());

    return (
      <container>
        <Calendar onChange={onChange} value={value}/>
      </container>
    );
}






// form component with datepicker
// fetch available services from db and render to form with icon as button?
// 