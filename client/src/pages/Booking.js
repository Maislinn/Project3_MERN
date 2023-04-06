import React from "react";
import BookingForm from "../components/BookingForm";
import Button from 'react-bootstrap/Button';

function Booking() {
        const [modalShow, setModalShow] = React.useState(false);
      
        return (
          <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Launch vertically centered modal
            </Button>
      
            <BookingForm
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </>
        );
      }

export default Booking;