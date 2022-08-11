/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NewUserRequestExcluding_id_ } from '../models/NewUserRequestExcluding_id_';
import type { NewUserRequestExcluding_id_role_ } from '../models/NewUserRequestExcluding_id_role_';
import type { User } from '../models/User';
import type { UserPartialExcluding_id_ } from '../models/UserPartialExcluding_id_';
import type { UserWithRelations } from '../models/UserWithRelations';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserControllerService {

    /**
     * @param requestBody 
     * @returns User User model instance
     * @throws ApiError
     */
    public static userControllerCreateAdmin(
requestBody?: NewUserRequestExcluding_id_role_,
): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/admin',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody 
     * @returns any Token
     * @throws ApiError
     */
    public static userControllerLogin(
requestBody?: NewUserRequestExcluding_id_role_,
): CancelablePromise<{
token?: string;
}> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any The current user profile
     * @throws ApiError
     */
    public static userControllerPrintCurrentUser(): CancelablePromise<{
id: string;
email?: string;
name?: string;
}> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/me',
        });
    }

    /**
     * @param id 
     * @param requestBody 
     * @returns void 
     * @throws ApiError
     */
    public static userControllerReplaceById(
id: string,
requestBody?: User,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @param requestBody 
     * @returns void 
     * @throws ApiError
     */
    public static userControllerUpdateById(
id: string,
requestBody?: UserPartialExcluding_id_,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/users/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns void 
     * @throws ApiError
     */
    public static userControllerDeleteById(
id: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns User User model instance
     * @throws ApiError
     */
    public static userControllerCreate(
requestBody?: NewUserRequestExcluding_id_,
): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param filter 
     * @returns UserWithRelations Array of User model instances
     * @throws ApiError
     */
    public static userControllerFind(
filter?: any,
): CancelablePromise<Array<UserWithRelations>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
            query: {
                'filter': filter,
            },
        });
    }

}
