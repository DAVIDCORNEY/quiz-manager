/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Question } from '../models/Question';
import type { QuestionExcluding_id_quizId_WithRelations } from '../models/QuestionExcluding_id_quizId_WithRelations';
import type { QuestionPartialExcluding_id_quizId_ } from '../models/QuestionPartialExcluding_id_quizId_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class QuestionControllerService {

    /**
     * @param id 
     * @param requestBody 
     * @returns void 
     * @throws ApiError
     */
    public static questionControllerReplaceById(
id: string,
requestBody?: Question,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/questions/{id}',
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
    public static questionControllerUpdateById(
id: string,
requestBody?: QuestionPartialExcluding_id_quizId_,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/questions/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @param filter 
     * @returns QuestionExcluding_id_quizId_WithRelations Question model instance
     * @throws ApiError
     */
    public static questionControllerFindById(
id: string,
filter?: any,
): CancelablePromise<QuestionExcluding_id_quizId_WithRelations> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/questions/{id}',
            path: {
                'id': id,
            },
            query: {
                'filter': filter,
            },
        });
    }

    /**
     * @param id 
     * @returns void 
     * @throws ApiError
     */
    public static questionControllerDeleteById(
id: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/questions/{id}',
            path: {
                'id': id,
            },
        });
    }

}
