import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import dayjs from 'dayjs';


export default function Calendar() {

  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  // new Date(dayjs(value.startDate).add(3, 'day'))

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  }


  // console.log(dayjs(value.startDate).add(3, 'day'));

  // add code to render single date or range depending on product selected
  // render one calendar for start date and second for end date
  // set min/max dates for end date based on start date selected.
  return (
    <div className="w-60"
    >
      <Datepicker
        asSingle={true}
        useRange={false}
        toggleClassName="absolute bg-pink-300 rounded-r-lg text-white right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
 
        primaryColor={"pink"}
        placeholder={"Select date"}
        value={value}
        displayFormat={"MM/DD/YYYY"}
        onChange={handleValueChange}
        readOnly={true}
        className="w-30"
      />
    </div>

  );
};
