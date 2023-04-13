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
    // const [startDate, setStartDate] = useState(null);
    // const [endDate, setEndDate] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    // useState for selected Dates
    const [selected, setSelected] = useState({
        start: startDate,
        end: endDate,
    });

    // function to set states on change
    const onChange = (dates) => {
        console.log(dates);
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        // formatDate(start, end);
    // console.log(selected);
    };



    /* formate date to print to page */
    /* https://github.com/Hacker0x01/react-datepicker/issues/1737#issuecomment-501671356 */
    const formatDate = (start="", end="") => {
        if (start) {
            setSelected({
                ...selected,
                start: format(new Date({start})),
            })
        }
        setSelected({
            ...selected,
            end: format(new Date({end})),
        })
        };



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


    // button for modal is currently in APP
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

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* add name of selected service as title */}
                    <h4>Service Name</h4>
                    <p>
                        Please provide the requested information below to continue booking.
                    </p>
                    {/* date range - render if extended care selected */}
                    <div>
                        <DatePicker
                            onChange={onChange}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                            inline
                        />
                        <h3>Selected dates:</h3>
                    </div>


                    {/* single day - render if drop-in selected */}
                    {/* <DatePicker
                        // selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        startDate={startDate}
                        endDate={endDate}
                        // selectsRange={false}
                        inline
                    />
                    <p>{formatDate(startDate)}</p> */}


                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
