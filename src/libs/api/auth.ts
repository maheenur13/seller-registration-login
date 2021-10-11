/* eslint-disable @typescript-eslint/no-useless-constructor */

import { BaseAPI } from './baseAPI';
import { BR } from './interfaces';

class AuthAPI extends BaseAPI {
	constructor(baseURL: string) {
		super(baseURL);
	}

	signIn = (mobileNumber: string, password: string) => this.post<BR<string>>('auth/login', {mobileNumber, password})
	registration = (storeName:string,accountType:string,category:string,phoneNumber:string,verificationCode:number,password:string,confirmPassword:string) => this.post<BR<string>>('auth/seller_reg_form',{
		storeName,
		accountType,
		category,
		phoneNumber,
		verificationCode,
		password,
		confirmPassword,
	})
	

}

export const authAPI = new AuthAPI('http://182.160.120.69:1000');
