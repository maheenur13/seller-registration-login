import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

export const ButtonWrapper = styled.button<ButtonProps>`
	cursor: pointer;
	border: none;

	${({ variant }) => {
		switch (variant) {
			case 'black':
				return css`
					color: #ffffff;
					background-color: #000000;
					min-height: 45px;
					min-width: 220px;
					padding: 0 25px;
					font-weight: 500;
					display: inline-block;
					text-align: center;
					border-radius: 23px;
					box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
				`;

			case 'dark':
				return css`
					color: #ffffff;
					background-color: #2b2b2b;
					min-height: 45px;
					min-width: 220px;
					padding: 0 25px;
					font-weight: 500;
					text-align: center;
					border-radius: 23px;
					box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
				`;
			case 'normal':
				return css`
					background: none!important;
					outline: none;
					font-size: 0.8rem;
					font-weight: 500;
					white-space: nowrap;
					width: 0px;
				`;

			default:
				return css`
					color: #000000;
					background-color: #ffffff;
					min-height: 45px;
					min-width: 220px;
					padding: 0 25px;
					font-weight: 500;
					display: inline-block;
					text-align: center;
					border-radius: 23px;
					box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
				`;
		}
	}}

	& + & {
		margin-left: 20px;
	}
	:disabled,
	[disabled] {
		background-color: #959595;
		cursor:normal;
	}
`;
