/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, MouseEvent, useState } from 'react';
import styled from 'styled-components';
import { setTimeValidation } from '../../../helpers/formValidation';
import { IUseFormValues, useForm } from '../../../hooks/useForm/userForm';
import { isMinLength, isNotEmpty, isPhoneNumber, passValidation } from '../../../hooks/useForm/utils/validate.helpers';
import { authAPI } from '../../../libs/api';
import { Button } from '../../atoms';
import { Input } from '../../atoms/Input';
import { Label } from '../../atoms/Label';

const RegistrationForm:FC<PropsType> = ({signInHandler})  => {
	const [timer, setTimer] = useState<number>(60);
	const [isSendCodeDisabled, setIsSendCodeDisabled] = useState(false);

	const onSuccess = async (formData: IUseFormValues<typeof initialState>) => {
		console.log(formData)
		const {success, data, message } = await authAPI.registration(formData.storeName,formData.accountType,formData.category,formData.phoneNumber,parseInt(formData.verificationCode),formData.password,formData.confirmPassword);

		if(success){
			console.log(data);
		}
		else {
			console.log(message)
		}
	}

	const { values,setErrors, errors, handleChange, handleSubmit } = useForm(initialState, onSuccess);
	
	const codeVerification = async(event:MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		const {success, data , message} = await authAPI.sendOtp(values.phoneNumber);
		if(success){
			console.log(data);
			setIsSendCodeDisabled(true);	
		setTimeValidation({
			iSendCodeDisabled: [isSendCodeDisabled, setIsSendCodeDisabled],
			timer: [timer, setTimer],
		});
		}
		else {
			console.log(message)
			const newErrors = {...errors};
			newErrors.phoneNumber= `${message}`
			setErrors(newErrors);
		}
		
	};
	return (
		<>
			<p className="my-3" style={{ cursor: 'pointer', fontSize: '.8rem' }}>
				Already Have an account?
				<a onClick={signInHandler} style={{ fontSize: '.8rem' }} className="text-primary">
					{' '}Sign In
				</a>
			</p>
			<form onSubmit={handleSubmit} noValidate>
				<div className="my-3">
					<Label>Store Name</Label>
					<Input 
						name="storeName"
						type="text"
						onChange={handleChange}
						 />
						 <div className="text-danger">{errors.storeName}</div>
				</div>
				<div className="my-3">
					<Label>Account Type</Label>
					<FormSelect  onChange={handleChange} name="accountType" className="px-3">
						<option selected disabled hidden>
							select one
						</option>
						<option>Business</option>
						<option>Individual</option>
					</FormSelect>
					<div className='text-danger'>{errors.accountType }</div>
				</div>
				<div className="my-3">
					<Label>Product category</Label>
					<FormSelect 
						name="category" 
						className="px-3"
						onChange={handleChange}
						>
						<option selected disabled hidden>
							select one
						</option>
						<option className="my-5">Business</option>
						<option>Individual</option>
					</FormSelect>
					<div className='text-danger'>{errors.category}</div>
				</div>
				<div className="my-3">
					<Label>Phone Number</Label>
					<div
						style={{
							borderRadius: '10px',
							border: '1px solid #cbcbcb',
						}}
						className="d-flex justify-content-between align-items-center px-3"
					>
						<p className="pr-2 mr-1" style={{ borderRight: '1px solid gray' }}>+88</p>
						<>
							<Input
								style={{ border: 'none'}}
								name="phoneNumber"
								onChange={handleChange}
							/>
							<Button
								onClick={codeVerification}
								className="my-auto"
								variant="normal"
								style={{
									width: '30%',
								}}
								type='button'
								disabled={isSendCodeDisabled }
							>
								Send Code
							</Button>
							{ isSendCodeDisabled && timer > 0 && <p>{`00:${timer < 10 ? `0` : ''}${timer}`}</p>}
						</>
					</div>
					<div className="text-danger">{errors.phoneNumber}</div>
				</div>
				<div style={{ borderRadius: '10px',border:'1px solid #cbcbcb' }} className="mt-3 d-flex align-items-center">
					<Input
						style={{ border: 'none', width: '80%' }}
						placeholder="SMS Verification Code"
						type="text"
						name="verificationCode"
						onChange={handleChange}
					/>
				</div>
				<div className='text-danger'>{errors.verificationCode}</div>
				<div className="my-3">
					<Label>Password</Label>
					<Input 
						type="password"
						name="password"
						onChange={handleChange}
					 />
					 <div className="text-danger">{errors.password}</div>
				</div>
				<div className="mt-4 mb-3">
					<Label>Confirm Password</Label>
					<Input
						type="password"
						name="confirmPassword"
						onChange={handleChange}
					/>
					<div className="text-danger" >{errors.confirmPassword}</div>
				</div>
				<div className="my-3 d-flex justify-content-between align-items-start">
					<img className="mr-1" src="/images/info.svg" alt="info-icon" />
					<p style={{ fontSize: '.75rem' }}>
						{' '}
						By continuing, you agree to zDrop's Conditions of Use and Privacy Policy.{' '}
					</p>
				</div>
				<div className="mt-3">
					<Button
						style={{ borderRadius: '10px' }}
						type="submit"
						variant="black"
						className="w-100"
					>
						Register
					</Button>
				</div>
			</form>
		</>
	);
};
export default RegistrationForm;

interface PropsType {
	 signInHandler: () => void
}

const initialState = {
	storeName: {
		value: '',
		message: null,
		validate: [isNotEmpty, isMinLength(3)],
	},
	phoneNumber:{
		value: '',
		message: null,
		validate: [isPhoneNumber]
	},
	verificationCode:{
		value:'',
		message:null,
		validate: [isNotEmpty],
	},
	accountType: {
		value:'',
		message:null,
		validate:[isNotEmpty],
	},
	category: {
		value: '',
		message : null,
		validate: [isNotEmpty],
	},
	password: {
		value: '',
		message : null,
		validate : [isNotEmpty, passValidation]
	},
	confirmPassword: {
		value: '',
		message: null,
		validate: [isNotEmpty]
	}
};

const FormSelect = styled.select`
	border-radius: 10px;
	border: 1px solid #cbcbcb;
	color: #2b2b2b;
	width: 100%;
	height: 43px;
	-moz-appearance: none; /* Firefox */
	-webkit-appearance: none; /* Safari and Chrome */
	background-image: url('/images/arrow-down.svg');
	background-repeat: no-repeat;
	background-position-x: 97%;
	background-position-y: 10px;

	:focus {
		outline: none;
	}
	option {
		:active {
			background-color: transparent !important;
		}
	}
`;