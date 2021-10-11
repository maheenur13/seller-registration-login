import React, { useState } from 'react';
import ChangePassword from './ChangePassword/ChangePassword';
import PhoneNumber from './PhoneNumber/PhoneNumber';
import Verification from './Verification/Verification';

const ForgotPassword = ({ handleSignIn }: any) => {
	
	type forgotPasswordPages = 'PHONE_NUMBER' | 'VERIFICATION' | 'CHANGE_PASSWORD';
	const [currentPage, setCurrentPage] = useState<forgotPasswordPages>('PHONE_NUMBER');
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
							<PhoneNumber
							forgotPasswordHandler = {() => setCurrentPage('VERIFICATION')}
							/>
						);

					case 'VERIFICATION':
						return (
							<Verification
							forgotPasswordHandler = {() => setCurrentPage('CHANGE_PASSWORD')}
							/>

						);

					case 'CHANGE_PASSWORD':
						return (
							<ChangePassword 
							forgotPasswordHandler = {handleSignIn}
							/>
						);
				}
			})()}
			
		</>
	);
};

export default ForgotPassword;
