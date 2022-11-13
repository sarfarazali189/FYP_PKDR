import { useState } from "react"
import { Form1 } from "./Form1";
import { Form2 } from "./Form2";
import { Form3 } from "./Form3";
import { ReviewFormValue } from "./ReviewFormValue";


export interface IFormState {
    step: number;
    name: string;
    fatherName: string;
   
    email: string;
    phonenumber: number | undefined;
    address: string;
    
    gender:string;
    cnic:string;
    DOB:string;
    country:string;
    city:string;

}

const defaultValue: IFormState = {
    step: 1,
    name: '',
    fatherName: '',

    email: '',
    phonenumber: undefined,
    address: '',
    gender:'',
    cnic:'',
    DOB:'',
    country:'',
    city:'',
}

export function MultiForme() {
    const [formState, setFormState] = useState<IFormState>(defaultValue);

    const handleFieldUpdate = (value: string, fieldName: string) => {
        setFormState({
            ...formState,
            [fieldName]: value
        });
    }

    const handleNextStep = () => {
        setFormState({
            ...formState,
            step: formState.step + 1
        });
    }

    const handlePreviousStep = () => {
        setFormState({
            ...formState,
            step: formState.step - 1
        });
    }

    const renderForms = () => {
        if (formState.step === 1) {
            return <Form1 nextStep={handleNextStep} handleChange={handleFieldUpdate} formState={formState} />
        }
        else if (formState.step === 2) {
            return <Form2 previousStep={handlePreviousStep} nextStep={handleNextStep} handleChange={handleFieldUpdate} formState={formState} />
        }
        else if (formState.step === 3) {
            return <Form3 previousStep={handlePreviousStep} nextStep={handleNextStep} handleChange={handleFieldUpdate} formState={formState} />
        }
        else if (formState.step === 4) {
            return <ReviewFormValue previousStep={handlePreviousStep} formState={formState} />
        }
        return <></>;
    }
    return (
        <div>{renderForms()}</div>
    )
}