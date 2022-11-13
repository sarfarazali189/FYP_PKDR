import React, { useState } from "react";
import { createUser, updateUser } from "../src/graphql/mutations";

import { Auth } from  "@aws-amplify/auth";
import { API } from "@aws-amplify/api";
import { Form } from "react-bootstrap";
import Link from 'next/link'

const EditUser = () => {
    const [name, setFirstName] = useState('');
    const [fatherName, setfathername] = useState('');
    const [email, setmail] = useState('');
  
    const [gender, setGender] = useState('');
    const [phonenumber, setphone] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [DOB, setDOB] = useState('');
    const [cnic, setCnic] = useState('');
    const [address, setaddress] = useState('');
    async function checkuser() {
        const user=await Auth.currentAuthenticatedUser()
        console.log('user',user)
        
      }


    const submitHandler = async (event) => {    
        event.preventDefault();
        const currentUser = await Auth.currentAuthenticatedUser();
        try {
            const result = await API.graphql({
                query: createUser,
            
                variables: {
                    input: {
                        id: currentUser.attributes.sub,
                        name: name,
                         fatherName: fatherName,
                          DOB: DOB,
                        gender:gender,
                          phonenumber: phonenumber,
                            city:city,
                           country: country,
                           cnic:cnic,
                          

                        
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
        <div className="d-flex flex-column justify-content-center w-100 h-100">
            
            <h1 className="align-self-center">Register</h1>

            <Form className="w-50 align-self-center">
                <Form.Group className="mt-2" controlId="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        placeholder="Enter Your First Name"
                        onChange={(event) => {
                            setFirstName(event.target.value);
                        }}
                    />
                </Form.Group>
                <Form.Group className="mt-2" controlId="fatherName">
                    <Form.Label>father Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={fatherName}
                    
                        onChange={(event) => {
                            setfathername(event.target.value);
                        }}
                    />
                </Form.Group>
                
                <Form.Group className="mt-2" controlId="gender">
                    <Form.Label>gender</Form.Label>
                    <Form.Control
                        type="text"
                        value={gender}
                
                        onChange={(event) => {
                            setGender(event.target.value);
                        }}
                    />
                </Form.Group>
                
                <Form.Group className="mt-2" controlId="phonenumber">
                    <Form.Label>phone</Form.Label>
                    <Form.Control
                        type="text"
                        value={phonenumber}
                
                        onChange={(event) => {
                            setphone(event.target.value);
                        }}
                    />
                </Form.Group>
                
                
                
                <Form.Group className="mt-2" controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type="text"
                        value={city}
                        
                        onChange={(event) => {
                            setCity(event.target.value);
                        }}
                    />
                </Form.Group>
                
                <Form.Group className="mt-2" controlId="country">
                    <Form.Label>Country Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={country}
                        
                        onChange={(event) => {
                            setCountry(event.target.value);
                        }}
                    />
                </Form.Group>
                </Form>

                <Form className="w-50 align-self-center">
                <Form.Group className="mt-2" controlId="cnic">
                    <Form.Label>cnic</Form.Label>
                    <Form.Control
                        type="text"
                        value={cnic}
                        placeholder="Enter Your CNIC"
                        onChange={(event) => {
                            setCnic(event.target.value);
                        }}
                    />
                </Form.Group>
                 
                <Form className="w-50 align-self-center">
                <Form.Group className="mt-2" controlId="DOB">
                    <Form.Label>DATE OF BIRTH</Form.Label>
                    <Form.Control
                        type="text"
                        value={DOB}
                        placeholder="Enter Your DATE OF BIRTH"
                        onChange={(event) => {
                            setDOB(event.target.value);
                        }}
                    />
                </Form.Group>
                </Form>

                   
            
                <button
                    type="submit"
                    onClick={submitHandler}
                    className="btn btn-primary"
                >
                    Submit
                </button>


                <button  onClick={checkuser}>
          check user
          </button>
            </Form>
    </div>
    );
};
export default EditUser;