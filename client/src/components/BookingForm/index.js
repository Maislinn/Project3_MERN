import React from 'react';
import Flatpickr from 'react-flatpickr';

const CustomInput = ({ value, defaultValue, inputRef, ...props }) => {
  return <input {...props} defaultValue={defaultValue} ref={inputRef} />;
};

export default function App() {
  return (
    <Flatpickr
      render={
        ({defaultValue, value, ...props}, ref) => {
          return <CustomInput defaultValue={defaultValue} inputRef={ref} />
        }
      }
    />
  )
}

// export default BookingForm;





// form component with datepicker
// fetch available services from db and render to form with icon as button?
// 