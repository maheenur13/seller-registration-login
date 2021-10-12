/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import { IUseFormValues, useForm } from '../../hooks/useForm/userForm';
import { isNotEmpty, isPhoneNumber } from '../../hooks/useForm/utils/validate.helpers';
import { authAPI } from '../../libs/api';
import { Button } from '../atoms';
import { Input } from '../atoms/Input';
import { Label } from '../atoms/Label';

type Props = {
	handleSignIn: () => void;
	forgetPassword: () => void;
};

const SellerSignIn: FC<Props> = ({ handleSignIn, forgetPassword }) => {
	
	const onSuccess = async (d: IUseFormValues<typeof initialState>) => {
		const phoneNumber = d?.phoneNumber;
		const {success, data, message } = await authAPI.signIn(phoneNumber, d?.password);
		if(success)
		{ 
			console.log(data);
		}
		else {
			console.log(message);
			const newErrors = {...errors};
			newErrors.password= `${message}`;
			setErrors(newErrors);
		}
	}
	const { values, errors,setErrors, handleChange, handleSubmit } = useForm(initialState, onSuccess);
	return (
		<div>
			<p className="my-3" style={{ cursor: 'pointer', fontSize: '.8rem' }}>
				New User?
				<a onClick={handleSignIn} style={{ fontSize: '.8rem' }} className="text-primary">
					{' '}Create An Account
				</a>
			</p>
			<form onSubmit={handleSubmit} noValidate>
				<div className="my-3">
					<Label>Phone Number</Label>
					<div
						style={{
							borderRadius: '10px',
							border: '1px solid #cbcbcb',
						}}
					>
						<Input
							style={{ border: 'none'}}
							name="phoneNumber"
							onChange={handleChange}
						/>
					</div>
					<div className="text-danger">{errors.phoneNumber}</div>
				</div>
				<div className="my-3">
					<Label>Password</Label>
					<Input 
						type="password" 
						name="password" 
						onChange={handleChange} />
						<div className="text-danger">{errors.password}</div>
				</div>
				<p
					onClick={forgetPassword}
					style={{
						textAlign: 'right',
						color: '#999999',
						cursor: 'pointer',
					}}
				>
					Forgot Password
				</p>
				<div className="mt-3">
					<Button
						style={{ borderRadius: '10px' }}
						variant="black"
						className="w-100"
						type="submit"
					>
						Sign In
					</Button>
				</div>
			</form>
		</div>
	);
};
export default SellerSignIn;

const initialState = {
	phoneNumber:{
		value: '',
		message: null,
		validate: [isNotEmpty,isPhoneNumber],
	},
	password: {
		value: '',
		message: null,
		validate: [isNotEmpty]
	}
}