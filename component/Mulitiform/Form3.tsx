import { isEmpty, isEqual } from "lodash";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { IFormState } from "./MultiForme";

interface IProps {
    nextStep: () => void;
    formState: IFormState;
    handleChange: (value: string, fieldName: string) => void;
    previousStep: () => void;
}

export function Form3(props: IProps) {
    const { nextStep, formState, handleChange, previousStep } = props;

 
    return (
        <div>
            
            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>DATE OF BIRTH</Form.Label>
                    <Form.Control
                        value={formState.DOB}
                        onChange={(event) => handleChange(event.target.value, 'DOB')}
                        type="text"
                    />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        value={formState.city}
                        onChange={(event) => handleChange(event.target.value, 'city')}
                        type="text"
                    />
                </Form.Group>
                
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        value={formState.country}
                        onChange={(event) => handleChange(event.target.value, 'country')}
                        type="text"
                    />
                
                    <Button onClick={previousStep} type="submit">Previous</Button>
                </Form.Group>
                <Form.Group>
                    <Button onClick={nextStep} type="submit">Continue</Button>
                </Form.Group>
            </Form>
        </div>
    )
}