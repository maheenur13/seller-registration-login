import React, { FC, useState } from 'react';
import { Title } from '../../atoms';
import { RegistrationFormContainer } from '../../atoms/RegitrationFormSection/RegistrationFormContainer';
import ForgotPassword from '../../ForgotPassword/ForgotPassword';
import SellerSignIn from '../../SellerSignIn/SellerSignIn';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

export const RegForm: FC = () => {
	type formPages = 'SIGN_UP' | 'SIGN_IN' | 'FORGET_PASSWORD';

	const [currentPage, setCurrentPage] = useState<formPages>('SIGN_UP');

	return (
		<RegistrationFormContainer>
			<Title style={{ fontSize: '1.3rem' }} className="text-left" variant="black" size="md">
				Seller Registration
			</Title>
			{(() => {
				switch (currentPage) {
					case 'SIGN_UP':
						return <RegistrationForm signInHandler={() => setCurrentPage('SIGN_IN')} />;

					case 'SIGN_IN':
						return (
							<SellerSignIn
								handleSignIn={() => setCurrentPage('SIGN_UP')}
								forgetPassword={() => setCurrentPage('FORGET_PASSWORD')}
							/>
						);

					case 'FORGET_PASSWORD':
						return <ForgotPassword handleSignIn={() => setCurrentPage('SIGN_IN')} />;
				}
			})()}
		</RegistrationFormContainer>
	);
};

export default RegForm;
