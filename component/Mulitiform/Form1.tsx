import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { IFormState } from "./MultiForme";

interface IProps {
    nextStep: () => void;
    formState: IFormState;
    handleChange: (value: string, fieldName: string) => void;
}

export function Form1(props: IProps) {
    const { nextStep, formState, handleChange } = props;
    return (
        <div className="w-full max-w-xs">
            <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                <Form.Group controlId="formGroupEmail">
                    <Form.Label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >Name</Form.Label>
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
                    <Button onClick={nextStep} type="submit">Continue</Button>
                </Form.Group>
            </Form>
        </div>
    )
}