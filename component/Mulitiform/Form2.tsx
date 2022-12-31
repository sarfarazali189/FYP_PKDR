import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { IFormState } from "./MultiForme";

interface IProps {
    nextStep: () => void;
    formState: IFormState;
    handleChange: (value: string, fieldName: string) => void;
    previousStep: () => void;
}

export function Form2(props: IProps) {
    const { nextStep, formState, handleChange, previousStep } = props;
    return (
        <>

        <div></div>
        <div>
            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label className="block text-gray-700 text-sm font-bold mb-2">Email</Form.Label>
                    <Form.Control
                        value={formState.email}
                        onChange={(event) => handleChange(event.target.value, 'email')}
                        type="email"
                    />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label className="block text-gray-700 text-sm font-bold mb-2">Phone number</Form.Label>
                    <Form.Control
                        value={formState.phonenumber}
                        onChange={(event) => handleChange(event.target.value, 'phonenumber')}
                        type="number"
                    />
                </Form.Group>
                
                <Form.Group controlId="formGroupPassword">
                    <Form.Label className="block text-gray-700 text-sm font-bold mb-2">CNIC number</Form.Label>
                    <Form.Control
                        value={formState.cnic}
                        onChange={(event) => handleChange(event.target.value, 'cnic')}
                        type="number"
                    />
                </Form.Group>


                <Form.Group controlId="formGroupPassword">
                    <Form.Label className="block text-gray-700 text-sm font-bold mb-2">Address</Form.Label>
                    <Form.Control
                        value={formState.address}
                        onChange={(event) => handleChange(event.target.value, 'address')}
                        type="text"
                    />
                </Form.Group>
 
                <div  className="inline-flex  mb-4 m-3 ">
                    <Button onClick={previousStep}  className="text-white bg-brightRed hover:bg-brightRedLight btn btn-outline-secondary btn-lg px-4"  type="submit">Previous</Button>
            
                
                    <Button onClick={nextStep}  className="text-white bg-brightRed hover:bg-brightRedLight btn btn-outline-secondary btn-lg px-4" type="submit">Continue</Button>
                    </div>
            </Form>
        </div>
        </>
    )
}