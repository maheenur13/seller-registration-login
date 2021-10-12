import React, { FC, MouseEvent, useEffect, useState } from 'react';
import { setTimeValidation } from '../../../helpers/formValidation';
import { IUseFormValues, useForm } from '../../../hooks/useForm/userForm';
import { isNotEmpty, isPhoneNumber } from '../../../hooks/useForm/utils/validate.helpers';
import { authAPI } from '../../../libs/api';
import { Button } from '../../atoms';
import { Input } from '../../atoms/Input';
import { Label } from '../../atoms/Label';

interface PropsType {
	forgotPasswordHandler: () => void;
	phoneNumber: string;
}
const VerifyCode: FC<PropsType> = ({ forgotPasswordHandler, phoneNumber }) => {
	const [timer, setTimer] = useState<number>(60);
	const [isSendCodeDisabled, setIsSendCodeDisabled] = useState(false);

    useEffect(()=>{
        const newValues = { ...values};
        newValues.phoneNumber = phoneNumber;
        setValues(newValues);
    },[])

	const onSuccess = async (formData: IUseFormValues<typeof initialState>) => {
		const { success, data, message } = await authAPI.resetOTPCheck(
			phoneNumber,
			parseInt(values.verificationCode),
		);
		if (success) {
			console.log(data);
			forgotPasswordHandler();
		} else {
			console.log(message);
			const newErrors = { ...errors };
			newErrors.verificationCode = `${message}`;
			setErrors(newErrors);
		}
	};
	const { values, setValues, setErrors, errors, handleChange, handleSubmit } = useForm(initialState, onSuccess);
    console.log(values.phoneNumber)
	const codeVerification = async (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		const { success, data, message } = await authAPI.sendOtp(values.phoneNumber);
		if (success) {
			console.log(data);
			setIsSendCodeDisabled(true);
			setTimeValidation({
                iSendCodeDisabled: [isSendCodeDisabled, setIsSendCodeDisabled],
                timer: [timer, setTimer],
            });
		} else {
			console.log(message);
			const newErrors = { ...errors };
			newErrors.phoneNumber = `${message}`;
			setErrors(newErrors);
		}
	};
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
					onClick={codeVerification}
				>
					Send Again
				</button>
				{isSendCodeDisabled && timer > 0 && <p className="pr-3">{`00:${timer < 10 ? `0` : ''}${timer}`}</p>}
			</div>
			<div className="text-danger">{errors.verificationCode}</div>
			<div className="mt-3">
				<Button style={{ borderRadius: '10px' }} variant="black" className="w-100" type="submit">
					Proceed
				</Button>
			</div>
		</form>
	);
};

const initialState = {
	phoneNumber: {
        value: '',
		message:null,
        validate: [isNotEmpty,isPhoneNumber]
	},
	verificationCode: {
		value: '',
		message: null,
		validate: [isNotEmpty],
	},
};

export default VerifyCode;
