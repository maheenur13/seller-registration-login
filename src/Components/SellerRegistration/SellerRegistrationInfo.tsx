import React, { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Title } from '../atoms';
import RegForm from './SellerForm/SellerForm';

const SellerRegistration: FC = () => {
	return (
		<RegistrationSection className="">
			<Row className="align-items-center m-auto justify-content-center w-100">
				<Col md={5}>
					<div className="p-md-2 p-3">
						<div className="mb-4 text-md-left text-center">
							<img style={{ width: '8rem' }} src="/images/logo.svg" alt="logo" />
						</div>
						<div className="text-md-left text-center">
							<p
								style={{
									fontSize: '1.7rem',
									fontWeight: 'lighter',
								}}
							>
								A fresh <br /> approach to
								<br />
								<span
								className="big-text"
									style={{
										padding: '0',
										fontWeight: '300' as 'bold',
										fontSize: '4.3rem',
										display: 'inline-block',
										marginTop: '-19px',
									}}
								>
									shopping
								</span>
								<br />
								online powered by <br /> creativity and <br /> innovation.
							</p>
						</div>
						<div className="mt-5 mb-5 d-flex flex-wrap policyAndHelp justify-content-md-start justify-content-center align-items-center">
							<div className="mr-md-5">
								<Title className="text-center text-md-left" size="sm" variant="black">
									Policies
								</Title>
								<p className="mb-1 text-center text-md-left">Privacy Policy</p>
								<p className="text-center text-md-left">Terms And Conditions</p>
							</div>
							<div className="">
								<Title className="text-center mt-md-0 mt-2 text-md-left" size="sm" variant="black">
									Need Help?
								</Title>
								<p className="mb-1 text-center text-md-left">Call: 09638 121212</p>
								<p className="text-center text-md-left px-md-0 px-2">Mail: sellersupport@zdrop.com.bd</p>
							</div>
						</div>
					</div>
				</Col>
				<Col className="" md={5}>
					<FormContainer className="py-2 py-md-0">
						<RegForm />
					</FormContainer>
				</Col>
				
			</Row>
			
		</RegistrationSection>
	);
};

const RegistrationSection = styled.section`
	background-image: url('/images/back-img.svg');
	background-repeat: no-repeat;
	background-size: cover 100vh;
	margin-left: 100px;
	position: relative;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;

	::before {
		content: '';
		background-color: #fffffffa;
		position: absolute;
		height: 100%;
		width: 100%;
	}
	@media only screen and (max-width: 768px) {
		.big-text{
			font-size:3.5rem!important;
		}
	}
	@media only screen and (max-width: 767px) {
		.policyAndHelp{
			display: none!important;
		}
	}

	@media only screen and (max-width: 1440px) {
		margin-left: 0;
}
`;

const FormContainer = styled.div`
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url('/images/form-bg.svg');
	background-repeat: no-repeat;
	background-size: 100% 92%;
	background-position: 55px 100%;
	min-height: 100vh;

	@media only screen and (max-width: 1440px) {
		background-size: 100% 92%;
		background-position: 100% 95%;
		min-height:80vh;
	}
	
`;

export default SellerRegistration;
