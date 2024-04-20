import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import AppConfig from "../../AppConfig";
import ReCAPTCHA from "react-google-recaptcha";

export default function EnquiryModal({ showModal, handleClose }) {
    const [enquiryData, setEnquiryData] = useState({
        id: 0,
        name: '',
        email: '',
        mobile: '',
        is_active: true,
        created_on: "2023-08-07T08:54:59.042Z",
        created_by: 0,
        updated_on: "2023-08-07T08:54:59.042Z",
        updated_by: 0
    });
    const recaptchaRef = React.createRef(); // Create a ref for the reCAPTCHA component

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEnquiryData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (enquiryData.name === "") {
            alert("please enter name")
            return;
        }
        if (enquiryData.mobile === "") {
            alert("please fill number")
            return;
        }
        const recaptchaValue = await recaptchaRef.current.getValue();
        if (!recaptchaValue) {
            alert("Please complete the CAPTCHA verification.");
            return;
        }
        try {
            const response = await axios.post(`${AppConfig.api}enquiry/save`, enquiryData);
            debugger
            if (response.data.resp) {
                setEnquiryData({
                    name: "",
                    email: "",
                    mobile: ""
                });
                handleClose();
            }
            alert(response.data.respMsg)
        } catch (error) {
            alert('Error submitting enquiry');
        }
    };
    return (
        <>
            <Modal show={showModal} onHide={handleClose} className="enquiryModal">
                <Modal.Header closeButton>
                    Enquiry Now
                </Modal.Header>
                <Modal.Body>
                    <Form className='EnquireFrom' onSubmit={handleSubmit}>
                        <Form.Group className='EnquireFromGroup' controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={enquiryData.name}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className='EnquireFromGroup' controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={enquiryData.email}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className='EnquireFromGroup' controlId="mobile">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                name="mobile"
                                value={enquiryData.mobile}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        {/* captcha */}
                        <div className="EnquireSubmit" style={{ zIndex: 9999 }}>
                        <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={AppConfig.reCaptchakey}
                            />
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}
