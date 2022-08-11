/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type User = {
    id?: string;
    email: string;
    role: User.role;
};

export namespace User {

    export enum role {
        ADMIN = 'admin',
        CUSTOMER = 'customer',
        STUDENT = 'student',
        GUEST = 'guest',
    }


}
