import React, { FC } from 'react';
import { IUseFormValues, useForm } from '../../../hooks/useForm/userForm';
import { isNotEmpty, isPhoneNumber } from '../../../hooks/useForm/utils/validate.helpers';
import { authAPI } from '../../../libs/api';
import { Button } from '../../atoms';
import { Input } from '../../atoms/Input';
import { Label } from '../../atoms/Label';

interface PropsType {
    forgotPasswordHandler: ()=> void,
    phoneNumber: React.Dispatch<React.SetStateAction<string>>[],
}

const PhoneNumberOTP:FC<PropsType> = ({ forgotPasswordHandler,phoneNumber}) => {
    const [ setMobileNumber] = phoneNumber;
    const onSuccess = async (formData: IUseFormValues<typeof initialState>) => {
        const {success, data, message } = await authAPI.forgotPasswordOTP(formData.phoneNumber);
		if(success){
            setMobileNumber(formData.phoneNumber);
            console.log(data)
            forgotPasswordHandler();
        }
        else {
            console.log(message)
        }
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
		validate: [isNotEmpty,isPhoneNumber],
    }
}

export default PhoneNumberOTP;