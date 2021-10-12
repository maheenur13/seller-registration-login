import React, { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FormContainer } from '../atoms/FormContainer/FormContainer';
import RegistrationPageHeader from '../atoms/RegistrationPageHeader/RegistrationPageHeader';
import { RegistrationContainer } from '../atoms/RegistrationSection/RegistrationSection';
import NeedHelpAndPolicies from '../molecules/NeedHelpAndPolicies/NeedHelpAndPolicies';
import RegForm from './SellerForm/SellerForm';

const SellerRegistration: FC = () => {
	return (
		<RegistrationContainer>
			<Row className="align-items-center m-auto justify-content-center w-100">
				<Col md={5}>
					<div className="p-md-2 p-3">
						<div className="mb-4 text-md-left text-center">
							<img style={{ width: '8rem' }} src="/images/logo.svg" alt="logo" />
						</div>
						<RegistrationPageHeader/> 
						<NeedHelpAndPolicies />
					</div>
				</Col>
				<Col md={5}>
					<FormContainer className="py-2 py-md-0">
						<RegForm />
					</FormContainer>
				</Col>
			</Row>
		</RegistrationContainer>
	);
};

export default SellerRegistration;
