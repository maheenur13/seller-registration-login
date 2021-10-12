import React, { useState } from 'react';
import ChangePassword from './ChangePassword/ChangePassword';
import PhoneNumberOTP from './PhoneNumber/PhoneNumber';
import VerifyCode from './Verification/VerifyCode';

const ForgotPassword = ({ handleSignIn }: any) => {
	
	type forgotPasswordPages = 'PHONE_NUMBER' | 'VERIFICATION' | 'CHANGE_PASSWORD';
	const [currentPage, setCurrentPage] = useState<forgotPasswordPages>('PHONE_NUMBER');
	const [mobileNumber, setMobileNumber] = useState<string>('');
	
	return (
		<>
			<p onClick={handleSignIn} className="my-3" style={{ cursor: 'pointer', fontSize: '.8rem' }}>
				Already have an account?
				<span style={{ fontSize: '.8rem' }} className="text-primary">
					{' '}Sign in
				</span>
			</p>

			{(() => {
				switch (currentPage) {
					case 'PHONE_NUMBER':
						return (
							<PhoneNumberOTP
							forgotPasswordHandler = {() => setCurrentPage('VERIFICATION')}
							phoneNumber = {[setMobileNumber]}
							/>
						);
					case 'VERIFICATION':
						return (
							<VerifyCode
							forgotPasswordHandler = {() => setCurrentPage('CHANGE_PASSWORD')}
							phoneNumber = {mobileNumber}
							/>
						);

					case 'CHANGE_PASSWORD':
						return (
							<ChangePassword 
							forgotPasswordHandler = {handleSignIn}
							phoneNumber = {mobileNumber}
							/>
						);
				}
			})()}
			
		</>
	);
};

export default ForgotPassword;
