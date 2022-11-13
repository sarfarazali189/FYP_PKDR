import { Button, ListGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { IFormState } from "./MultiForme";
import React, { useState } from "react";
import { createUser, updateUser } from "../../src/graphql/mutations";

import { Auth } from  "@aws-amplify/auth";
import { API } from "@aws-amplify/api";

import Link from 'next/link'


interface IProps {
    formState: IFormState;
    previousStep: () => void;
}

export function ReviewFormValue(props: IProps) {
    const { formState, previousStep } = props;

    const onConfirm = () => {
        console.log('onConfirm', onConfirm);
        // backend api call
        // reset form
    };

    const submitHandler = async (event: { preventDefault: () => void; }) => {    
        event.preventDefault();
        const currentUser = await Auth.currentAuthenticatedUser();
        try {
            const result = await API.graphql({
                query: createUser,
            
                variables: {
                    input: {
                        id: currentUser.attributes.sub,
                        name: formState.name,
                         fatherName: formState.fatherName,
                          DOB: formState.DOB,
                        gender:formState.gender,
                          phonenumber: formState.phonenumber,
                            city:formState.city,
                           country: formState.country,
                           cnic:formState.cnic,
                          

                        
                    },
                },
            });
            console.log(result);
            console.log(currentUser);
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div>
            <ListGroup variant="flush">
                <ListGroup.Item>Name: {formState.name}</ListGroup.Item>
                <ListGroup.Item>Father Name: {formState.fatherName}</ListGroup.Item>
                <ListGroup.Item>GENDER {formState.gender}</ListGroup.Item>
                <ListGroup.Item>Phone Number: {formState.phonenumber}</ListGroup.Item>
                <ListGroup.Item>Email: {formState.email}</ListGroup.Item>
                <ListGroup.Item>CNIC: {formState.cnic}</ListGroup.Item>
                <ListGroup.Item>DATE OF BIRTH: {formState.DOB}</ListGroup.Item>
                <ListGroup.Item>City: {formState.city}</ListGroup.Item>
                <ListGroup.Item>Country: {formState.country}</ListGroup.Item>
            </ListGroup>
            <Form>
                <Button className="mr-4 my-3" onClick={previousStep} variant="primary" type="submit">
                    Previous
                </Button>
                <Button onClick={submitHandler} variant="primary" >
                    Confirm
                </Button>
            </Form>
        </div>
    )
}