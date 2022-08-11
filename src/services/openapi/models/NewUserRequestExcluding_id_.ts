/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<NewUserRequest, 'id'>, schemaOptions: { exclude: [ 'id' ] })
 */
export type NewUserRequestExcluding_id_ = {
    email: string;
    role: NewUserRequestExcluding_id_.role;
    password: string;
};

export namespace NewUserRequestExcluding_id_ {

    export enum role {
        ADMIN = 'admin',
        CUSTOMER = 'customer',
        STUDENT = 'student',
        GUEST = 'guest',
    }


}
