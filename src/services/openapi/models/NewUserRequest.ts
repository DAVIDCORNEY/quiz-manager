/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NewUserRequest = {
    id?: string;
    email: string;
    role: NewUserRequest.role;
    password: string;
};

export namespace NewUserRequest {

    export enum role {
        ADMIN = 'admin',
        CUSTOMER = 'customer',
        STUDENT = 'student',
        GUEST = 'guest',
    }


}
