/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NewQuiz } from '../models/NewQuiz';
import type { Quiz } from '../models/Quiz';
import type { QuizPartialExcluding_id_ } from '../models/QuizPartialExcluding_id_';
import type { QuizWithRelations } from '../models/QuizWithRelations';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class QuizControllerService {

    /**
     * @param id 
     * @param requestBody 
     * @returns void 
     * @throws ApiError
     */
    public static quizControllerReplaceById(
id: string,
requestBody?: Quiz,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/quizzes/{id}',
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
    public static quizControllerUpdateById(
id: string,
requestBody?: QuizPartialExcluding_id_,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/quizzes/{id}',
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
    public static quizControllerDeleteById(
id: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/quizzes/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns Quiz Quiz model instance
     * @throws ApiError
     */
    public static quizControllerCreate(
requestBody?: NewQuiz,
): CancelablePromise<Quiz> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/quizzes',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param filter 
     * @returns QuizWithRelations Array of Quiz model instances
     * @throws ApiError
     */
    public static quizControllerFind(
filter?: any,
): CancelablePromise<Array<QuizWithRelations>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/quizzes',
            query: {
                'filter': filter,
            },
        });
    }

}
