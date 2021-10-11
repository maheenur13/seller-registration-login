import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Title } from '../../atoms';
import ForgotPassword from '../../ForgotPassword/ForgotPassword';
import SellerSignIn from '../../SellerSignIn/SellerSignIn';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

export const RegForm: FC = () => {

	type FormPages = 'SIGN_UP' | 'SIGN_IN' | 'FORGET_PASSWORD';

	const [currentPage, setCurrentPage] = useState<FormPages>('SIGN_UP');

	return (
		<FormSection>
			<Title style={{ fontSize: '1.3rem' }} className="text-left" variant="black" size="md">
				Seller Registration
			</Title>

			{(() => {
				switch (currentPage) {
					case 'SIGN_UP':
						return (
							<RegistrationForm
									signInHandler= {() => setCurrentPage('SIGN_IN')}
							/>
						);

					case 'SIGN_IN':
						return (
							<SellerSignIn
								handleSignIn={() => setCurrentPage('SIGN_UP')}
								forgetPassword={() => setCurrentPage('FORGET_PASSWORD')}
							/>
						);

					case 'FORGET_PASSWORD':
						return (
							<ForgotPassword	
								handleSignIn= {() => setCurrentPage('SIGN_IN')}
								
							/>
						);
				}
			})()}
		</FormSection>
	);
};

const FormSection = styled.div`
	width: 390px;
	border-radius: 25px;
	box-shadow: 0px 0px 6px #8a8a8a3d;
	border: 1px solid #ececec;
	background-color: var(--white);
	margin-left: 125px;
	padding: 24px 30px;
	@media only screen and (max-width: 425px) {
		width: 95%;
		padding: 24px 30px;
	}
	@media only screen and (max-width: 768px) {
		padding: 18px 25px;
	}
	@media only screen and (max-width: 1440px) {
		margin-left: 0px;
	}
`;

export default RegForm;