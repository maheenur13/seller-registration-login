import styled from 'styled-components';
import { TitleProps } from '.';

export const TitleWrapper = styled.h1<TitleProps>`
	color: ${({ variant }) => (variant === 'black' ? 'var(--black)' : 'var(--white)')};
	font-size: ${({ size }) => (size === 'sm' ? '1rem' : size === 'md' ? '1.5rem' : '2.8rem')};
	font-weight: 600;
	text-align: center;
`;
