import React from 'react';
import { IUseFormValues, useForm } from '../../../hooks/useForm/userForm';
import { isPhoneNumber } from '../../../hooks/useForm/utils/validate.helpers';
import { Button } from '../../atoms';
import { Input } from '../../atoms/Input';
import { Label } from '../../atoms/Label';

const PhoneNumber = ({ forgotPasswordHandler}:any) => {
    const onSuccess = (data: IUseFormValues<typeof initialState>) => {
		console.log(data)
        forgotPasswordHandler();
        
	}
	const { values, errors, handleChange, handleSubmit } = useForm(initialState, onSuccess);
    return (
       <form onSubmit={handleSubmit} noValidate>
           <div>
               <Label>Phone Number</Label>
               <Input
                    name="phoneNumber"
                    value={values.phoneNumber}
                    onChange={handleChange}
               />
               <div className="text-danger">{errors.phoneNumber}</div>
           </div>
           <div>
           <Button
                style={{ borderRadius: '10px' }}
                variant="black"
                className="w-100 mt-3"
                type="submit"
            >
                Send Code
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
    }
}

export default PhoneNumber;