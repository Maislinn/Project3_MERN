import React, { useState } from 'react'
// 🔮 for future reference: https://reactnicedates.hernansartorio.com/#api-reference
import { enUS } from 'date-fns/locale'
import { format } from 'date-fns'
import { DatePicker, DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

import "react-datepicker/dist/react-datepicker.css";

function ScheduleVisit({ visit }) {

  // added code to conditionally render datepicker dependent on selected product
  // drop-in visits = select single date
  // recurring visits = select date range (max 10 days)
  // long-term = select date range (max 30 days)
  const [date, setDate] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();


  return (
    <>
      {/* if 30 min or 60 min drop-in visit, render single day datepicker */}
      {(visit === "Drop-In Visit 30 MIN" || visit === "Drop-In Visit 60 MIN")
        &&
        <div>
          <DatePicker
            date={date}
            onDateChange={setDate}
            format='MMM dd yyyy'
            locale={enUS}
          >
            {({ inputProps, focused }) => (
              <input
                className={'input' + (focused ? ' -focused' : '')}
                {...inputProps}
              />
            )}
          </DatePicker>
          {/* render selected date on page */}
          {date ? <p style={{ 'font-weight': 'bold' }}>Selected date: {format(date, 'dd MMM yyyy', { locale: enUS })} </p> : <p style={{ 'color': 'red' }}>Select date of visit above.</p>}
        </div>
      }

      {/* if 30 or 60 min recurring visits, render datepicker to select range */}
      {/* min 3 days, max 10 days */}
      {(visit === "Recurring Visits 30 MIN" || visit === "Recurring Visits 60 MIN")
        &&
        <div>
          <DateRangePicker
            startDate={startDate}
            endDate={endDate}
            onStartDateChange={setStartDate}
            onEndDateChange={setEndDate}
            minimumDate={new Date()}
            minimumLength={3}
            maximumLength={10}
            format='MMM dd yyyy'
            locale={enUS}
          >
            {({ startDateInputProps, endDateInputProps, focus }) => (
              <div className='date-range'>
                <input
                  className={'input' + (focus === START_DATE ? ' -focused' : '')}
                  {...startDateInputProps}
                  placeholder='Start date'
                />
                <span className='date-range_arrow' />
                <input
                  className={'input' + (focus === END_DATE ? ' -focused' : '')}
                  {...endDateInputProps}
                  placeholder='End date'
                />
              </div>
            )}
          </DateRangePicker>
          {/* render selected dates on page */}
          {startDate ?
            <p style={{ 'font-weight': 'bold' }}>
              Selected start date: {format(startDate, 'dd MMM yyyy', { locale: enUS })}
            </p>
            : <p style={{ 'color': 'red' }}>Select dates above.</p>
          }
          {endDate ?
            <p style={{ 'font-weight': 'bold' }}>
              Selected end date: {format(endDate, 'dd MMM yyyy', { locale: enUS })}
            </p> : <p></p>}
        </div>
      }

      {/* if long-term visit, render date range picker*/}
      {/* min 11 days, max 30 days */}
      {visit === "Long-Term Care"
        &&
        <div>
          <DateRangePicker
            startDate={startDate}
            endDate={endDate}
            onStartDateChange={setStartDate}
            onEndDateChange={setEndDate}
            minimumDate={new Date()}
            minimumLength={11}
            maximumLength={30}
            format='MMM dd yyyy'
            locale={enUS}
          >
            {({ startDateInputProps, endDateInputProps, focus }) => (
              <div className='date-range'>
                <input
                  className={'input' + (focus === START_DATE ? ' -focused' : '')}
                  {...startDateInputProps}
                  placeholder='Start date'
                />
                <span className='date-range_arrow' />
                <input
                  className={'input' + (focus === END_DATE ? ' -focused' : '')}
                  {...endDateInputProps}
                  placeholder='End date'
                />
              </div>
            )}
          </DateRangePicker>
          {/* render selected dates on page */}
          {startDate ?
            <p style={{ 'font-weight': 'bold' }}>
              Selected start date: {format(startDate, 'dd MMM yyyy', { locale: enUS })}
            </p>
            : <p style={{ 'color': 'red' }}>Select dates above.</p>
          }
          {endDate ?
            <p style={{ 'font-weight': 'bold' }}>
              Selected end date: {format(endDate, 'dd MMM yyyy', { locale: enUS })}
            </p> : <p></p>}
        </div>
      }
    </>
  );
}

export default ScheduleVisit;