import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Button, Title } from '../atoms';

const helpSectionData = [
	{
		title: 'Need more help? Contact us for any help',
		email: 'sellersupport@zdrop.com.bd',
		phone: '09638121212',
		date: 'Monday- Friday: 9AM- 6PM',
		address: 'Bashati Dream, Plot- 03, Road- 20, Level-05 (C/5), Gulshan- 1, Dhaka- 1212, Bangladesh',
	},
];

const Help: FC = () => {
	return (
		<HelpContainer className="mb-3">
			<div className="back-image"></div>
			<div className="py-5 px-3 px-md-5 px-lg-4 mb-3 mb-md-0">
				<Row className="justify-content-around">
					<Col md={12} lg={5}>
						{helpSectionData?.map((data) => {
							return (
								<div>
									<Title className="mb-3 text-sm-left text-md-left text-lg-left md-title" size="md">
										{data?.title}
									</Title>
									<div className="px-4 px-md-0 px-lg-0 px-xl-0">
										<Description>Mail: {data?.email}</Description>
										<Description>Call: {data?.phone}</Description>
										<Description>{data?.date}</Description>
										<Description className="mt-3">{data?.address}</Description>
									</div>
								</div>
							);
						})}
					</Col>
					<Col md={12} lg={4} className=" mt-5 mt-lg-0">
						<div className="button-box mt-md-3">
							<Button className="mx-md-auto mx-sm-auto mx-auto mx-lg-0" variant="white">
								Call Seller Support Center
							</Button>
						</div>
					</Col>
				</Row>
			</div>
		</HelpContainer>
	);
};

export default Help;

const Description = styled.p``;

const HelpContainer = styled.div`
	overflow: hidden;
	position: relative;
	background-color: var(--black);
	color: var(--white);
	border-radius: 35px;
	@media only screen and (max-width: 425px) {
		.md-title {
			padding: 0px 10px;
		}
	}
	.button-box {
		display: flex;
		height: 100%;
		justify-content: flex-end;
		align-items: center;
	}
	.back-image::before {
		content: '';
		background: url('/images/bg-3.svg') right top no-repeat;
		width: 93%;
		height: 100%;
		display: block;
	}
	.back-image {
		position: absolute;
		width: 100%;
		height: 100%;
	}
`;
