import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// would be nice to have an icon show up in the input field but maybe just next to it for now?
// import { FaCalendarDay, FaCalendarWeek} from "react-icons/fa";

export default function Example() {
    // use state variables for date picker
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    return (
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        isClearable={true}
      />
    );
};
