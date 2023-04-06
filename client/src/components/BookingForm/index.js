import React, { useState } from "react";

// 🦄 rbk to-do: query service by _id based on service selected to get name of service for modal title 
// import {useQuery} from '@apollo/client';
// import { QUERY_SERVICE } from '../utils/queries'

// import datepicker calendar component + css that goes with
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import format from date-fns 
import format from "date-fns/format";

// import components from react-bootstrap
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "./styles.css";


// would be nice to have an icon show up in the input field but maybe just next to it for now?
// import { FaCalendarDay, FaCalendarWeek} from "react-icons/fa";

export default function BookingForm(props) {
    // useState for modal
    // const [show, setShow] = useState(false);
    // const handleShow = () => setShow(true);
    // const handleClose = () => setShow(false);

    // useState for date picker
    // const [dateRange, setDateRange] = useState([null, null]);
    // const [startDate, endDate] = dateRange;
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    {/* formate date to print to page */ }
    {/* https://github.com/Hacker0x01/react-datepicker/issues/1737#issuecomment-501671356 */ }
    const formatDate = (date) => {
            return format(new Date(startDate), "PP");
    };

    const [dateRange, setRange] = useState(new Range())


    // 🦄 rbk to-do: function to retrieve service data
    // const { data } = useQuery(QUERY_USER);
    // let user;

    // if (data) {
    //     user = data.user;
    // };

    // function for form submit 22.22 ./
    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //       const mutationResponse = await login({
    //         variables: { email: formState.email, password: formState.password },
    //       });
    //       const token = mutationResponse.data.login.token;
    //       Auth.login(token);
    //     } catch (e) {
    //       console.log(e);
    //     }
    //   };

    //   const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormState({
    //       ...formState,
    //       [name]: value,
    //     });
    //   };



    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {/* add name of selected service as title */}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                    {/* date range - render if extended care selected */}
                    <div>
                    <h3>Selected dates:</h3>
                    <p>{`${formatDate(startDate)}-${formatDate(endDate)}`}</p>
                    </div>
                    <DatePicker
                        // selected={startDate}
                        onChange={onChange}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                        inline
                    />


                    {/* single day - render if drop-in selected */}
                    {/* <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        inline
                    />
                    <p>{`${startDate}-${endDate}`}</p> */}


                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
