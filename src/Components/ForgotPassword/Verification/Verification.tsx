import React, { useState } from 'react';
import { setTimeValidation } from '../../../helpers/formValidation';
import { IUseFormValues, useForm } from '../../../hooks/useForm/userForm';
import { isNotEmpty, isPhoneNumber } from '../../../hooks/useForm/utils/validate.helpers';
import { Button } from '../../atoms';
import { Input } from '../../atoms/Input';
import { Label } from '../../atoms/Label';

const Verification = ({forgotPasswordHandler}:any) => {
    const [timer, setTimer] = useState<number>(60);
	const [isSendCodeDisabled, setIsSendCodeDisabled] = useState(false);

    const onSuccess = (data: IUseFormValues<typeof initialState>) => {
		console.log(data)
        forgotPasswordHandler();  
	}
	const { values, errors, handleChange, handleSubmit } = useForm(initialState, onSuccess);
    console.log(values.phoneNumber)
    return (
        <form onSubmit={handleSubmit} noValidate>
        <div className="my-3">
            <Label>Phone Number</Label>
            <div
                className="d-flex justify-content-between "
                style={{
                    borderRadius: '10px',
                    border: '1px solid #cbcbcb',
                }}
            >
                <Input
                    style={{ border: 'none' }}
                    required
                    name="phoneNumber"
                    value={values.phoneNumber}
                    onChange={handleChange}
                />
                    <button
                        className="mr-3"
                        name="changeNumber"
                        style={{ border: 'none', outline: 'none', background: 'none', fontWeight: 500 }}
                    >
                        Change
                    </button>
            </div>
            <div className="text-danger">{errors.phoneNumber}</div>
        </div>
            <div
                style={{ border: '1px solid #cbcbcb', borderRadius: '10px' }}
                className="mt-3 d-flex justify-content-center align-items-center"
            >
                <Input
                    style={{ border: 'none' }}
                    placeholder="Verification Code"
                    name="verificationCode"
                    onChange={handleChange}
                />
                <button
                    className="pr-3"
                    style={{
                        whiteSpace: 'nowrap',
                        fontWeight: 500,
                        background: 'none',
                        border: 'none',
                    }}
                    onClick={() => {
                        setTimeValidation({
                            iSendCodeDisabled: [isSendCodeDisabled, setIsSendCodeDisabled],
                            timer: [timer, setTimer],
                        });
                    }}
                    disabled={ values.phoneNumber.length !== 11 || (isSendCodeDisabled)}
                >
                    Send Again
                </button>
                {  isSendCodeDisabled && timer > 0 && (
                    <p className="pr-3">{`00:${timer < 10 ? `0` : ''}${timer}`}</p>
                )}
            </div>
            <div className="text-danger">{errors.verificationCode}</div>
        <div className="mt-3">
            <Button
                style={{ borderRadius: '10px' }}
                variant="black"
                className="w-100"
                type="submit"
            >
                Proceed
            </Button>
        </div>
    </form>
    );
};

const initialState ={
    phoneNumber:{
        value: '',
		message: null,
		validate: [isPhoneNumber],
    },
    verificationCode:{
        value: '',
		message: null,
		validate: [isNotEmpty],
    }
}

export default Verification;