import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { IFormState } from "./MultiForme";
import React, { useState } from 'react';



interface IProps {
    nextStep: () => void;
    formState: IFormState;
    handleChange: (value: string, fieldName: string) => void;
}

export function Form1(props: IProps) {
    const { nextStep, formState, handleChange } = props;
    return (
<>
        <div > 
            <h1 className="mb-4 m-3 text-4xl text-center text-black block text-gray-700 text-sm font-bold mb-2"> Registeration Form </h1>
        </div>
        <div className="w-full max-w-xs ">
            <Form className="bg-grey shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                <Form.Group controlId="formGroupEmail">
                    <Form.Label className="block text-gray-700 text-sm font-bold mb-2" >Full Name</Form.Label>
                    <Form.Control
                        value={formState.name}
                        onChange={(event) => handleChange(event.target.value, 'name')}
                        type="text"
                    />
                </Form.Group>
                </div>
                <div className="mb-4">
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Father Name</Form.Label>
                    <Form.Control
                        value={formState.fatherName}
                        onChange={(event) => handleChange(event.target.value, 'fatherName')}
                        type="text"
                    />
                </Form.Group>
                </div>
                <div className="mb-4">
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                        value={formState.gender}
                        onChange={(event) => handleChange(event.target.value, 'gender')}
                        type="text"
                    />
                </Form.Group>
                </div>
                <Form.Group>
                    <Button onClick={nextStep} type="submit"   className="text-white bg-brightRed hover:bg-brightRedLight btn btn-outline-secondary btn-lg px-4">Continue</Button>
                </Form.Group>
            </Form>
        </div>
        </>
    )
}