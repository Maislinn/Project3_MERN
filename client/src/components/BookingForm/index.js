import React, { useState } from "react";

// 🦄 rbk to-do: query service by _id based on service selected to get name of service for modal title 
// import {useQuery} from '@apollo/client';
// import { QUERY_SERVICE } from '../utils/queries'

// import datepicker calendar component + css that goes with
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import components from react-bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


// would be nice to have an icon show up in the input field but maybe just next to it for now?
// import { FaCalendarDay, FaCalendarWeek} from "react-icons/fa";

export default function BookingForm(props) {
    // useState for modal
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    // useState for date picker
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    // 🦄 rbk to-do: function to retrieve service data
    // const { data } = useQuery(QUERY_USER);
    // let user;

    // if (data) {
    //     user = data.user;
    // };

    // function for form submit 22.22 ./
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
          const mutationResponse = await login({
            variables: { email: formState.email, password: formState.password },
          });
          const token = mutationResponse.data.login.token;
          Auth.login(token);
        } catch (e) {
          console.log(e);
        }
      };
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value,
        });
      };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Book Now
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {/* {service.name} */}
                        {/* add name of selected service as title once models and queries are set */}
                    </Modal.Title>
                </Modal.Header>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <DatePicker
                            selectsRange={true}
                            startDate={startDate}
                            endDate={endDate}
                            onChange={(update) => {
                                setDateRange(update);
                            }}
                            // isClearable={true}
                            onClickOutside={handleClose}
                        />

                    </Form.Group>
                </Form>
                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
