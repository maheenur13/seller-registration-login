import styled from 'styled-components';

export const RegistrationContainer = styled.section`
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
		.policyAndHelpLg{
			display: none!important;
		}
		.policyAndHelpSm {
			justify-content: space-between!important;
			margin: 0!important;
			display: block!important;
		}
	}

	@media only screen and (max-width: 1440px) {
		margin-left: 0;
}
`