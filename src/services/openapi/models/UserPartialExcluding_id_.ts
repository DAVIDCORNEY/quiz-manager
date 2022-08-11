/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Partial<User>, 'id'>, schemaOptions: { partial: true, exclude: [ 'id' ] })
 */
export type UserPartialExcluding_id_ = {
    email?: string;
    role?: UserPartialExcluding_id_.role;
};

export namespace UserPartialExcluding_id_ {

    export enum role {
        ADMIN = 'admin',
        CUSTOMER = 'customer',
        STUDENT = 'student',
        GUEST = 'guest',
    }


}
