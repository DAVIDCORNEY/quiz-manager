/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserCredentialsWithRelations } from './UserCredentialsWithRelations';

/**
 * (tsType: UserWithRelations, schemaOptions: { includeRelations: true })
 */
export type UserWithRelations = {
    id?: string;
    email: string;
    role: UserWithRelations.role;
    userCredentials?: UserCredentialsWithRelations;
};

export namespace UserWithRelations {

    export enum role {
        ADMIN = 'admin',
        CUSTOMER = 'customer',
        STUDENT = 'student',
        GUEST = 'guest',
    }


}
