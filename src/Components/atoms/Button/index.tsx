import { ButtonHTMLAttributes, FC } from 'react';
import { ButtonWrapper } from './styles';

export const Button: FC<ButtonProps> = ({ children, ...rest }) => {
	return <ButtonWrapper {...rest}>{children}</ButtonWrapper>;
};

Button.defaultProps = {
	variant: 'white',
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'black' | 'white' | 'dark' | 'normal';
}
