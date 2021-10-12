import React, { FC } from 'react';
import { IUseFormValues, useForm } from '../../../hooks/useForm/userForm';
import { isNotEmpty, passValidation } from '../../../hooks/useForm/utils/validate.helpers';
import { authAPI } from '../../../libs/api';
import { Button } from '../../atoms';
import { Input } from '../../atoms/Input';
import { Label } from '../../atoms/Label';

interface PropsType {
    forgotPasswordHandler : () => void,
    phoneNumber: string
}

const ChangePassword: FC<PropsType> = ({forgotPasswordHandler,phoneNumber}) => {
    const onSuccess = async (formData: IUseFormValues<typeof initialState>) => {
        const {success, data, message } = await authAPI.resetPassword(phoneNumber,formData.password,formData.confirmPassword);
        if(success){
            forgotPasswordHandler();
        }
        else {
            const newErrors = {...errors };
            newErrors.confirmPassword=`${message}`;
            setErrors(newErrors);
        }
	}
	const { values, errors, setErrors, handleChange, handleSubmit } = useForm(initialState, onSuccess);
    
    return (
        <form onSubmit={handleSubmit} noValidate>
            <div className="my-3">
					<Label>Password</Label>
					<Input 
						type="password" 
						name="password"
                        value={values.password}
						onChange={handleChange} />
						<div className="text-danger">{errors.password}</div>
				</div>
            <div className="my-3">
					<Label>Confirm Password</Label>
					<Input 
						type="password" 
						name="confirmPassword" 
                        value={values.confirmPassword }
						onChange={(e) => {
                            setErrors((prevState): any => {
                                const parentObj = {...prevState};
                                if(values.password !== e.target.value) {                                    
                                    parentObj.confirmPassword = 'Not'
                                    return parentObj
                                } else {
                                    return parentObj.confirmPassword = null
                                }
                            })
                            handleChange(e)
                        }} />
                        {/* {values.password !== values.confirmPassword && values.confirmPassword.length > 0 && <div className="text-danger">Password did not matched</div>} */}
						<div className="text-danger">{errors.confirmPassword}</div>
				</div>
                <Button
                style={{ borderRadius: '10px' }}
                variant="black"
                className="w-100 mt-3"
                type="submit"
            >
                Change Password
            </Button>
        </form>
    );
};

const initialState ={
    password:{
        value: '',
		message: null,
		validate: [isNotEmpty, passValidation],
    },
    confirmPassword:{
        value: '',
		message: null,
		validate: [isNotEmpty],
    }
}

export default ChangePassword;