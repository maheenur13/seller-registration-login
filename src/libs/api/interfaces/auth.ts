/* eslint-disable @typescript-eslint/no-empty-interface */
export interface IAuth {
	id: string;
	adminName: string;
	email: string;
	token: string;
}

interface NavBarItem {}

interface RoleID {
	title: string;
	navBarItems: NavBarItem[];
	endPoints: string[];
	createdBy: string;
	isActive: boolean;
	id: string;
}

export interface IAuthAdmin {
	avatarURL: string;
	roleID: RoleID;
	username: string;
	firstName: string;
	lastName: string;
	email: string;
	isActive: boolean;
	createdAt: Date;
	updatedAt: Date;
	id: string;
}
