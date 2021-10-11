import { Dispatch, SetStateAction } from "react";

export const passLengthValidation = (value: number) => {
	let validation = value >= 8;
	if (validation) {
		return true;
	} else if (!validation) {
		return false;
	}
};

export const setTimeValidation  = (props: any) => {
	let count = 59;
	const [isSendCodeDisabled, setIsSendCodeDisabled] = props.iSendCodeDisabled;
	const [timer, setTimer] = props.timer;
	setIsSendCodeDisabled(true);
	const setTime = setInterval(function () {
		if (count <= -1) {
			setIsSendCodeDisabled(false);
			clearInterval(setTime);
		} else {
			setTimer(count--);
		}
	}, 1000);
};

