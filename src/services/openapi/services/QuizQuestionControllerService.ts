/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { loopback_Count } from '../models/loopback_Count';
import type { NewQuestionInQuiz } from '../models/NewQuestionInQuiz';
import type { Question } from '../models/Question';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class QuizQuestionControllerService {

    /**
     * @param id 
     * @param requestBody 
     * @returns Question Quiz model instance
     * @throws ApiError
     */
    public static quizQuestionControllerCreate(
id: string,
requestBody?: NewQuestionInQuiz,
): CancelablePromise<Question> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/quizzes/{id}/questions',
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
     * @returns Question Array of Quiz has many Question
     * @throws ApiError
     */
    public static quizQuestionControllerFind(
id: string,
filter?: any,
): CancelablePromise<Array<Question>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/quizzes/{id}/questions',
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
     * @param where 
     * @returns loopback_Count Quiz.Question DELETE success count
     * @throws ApiError
     */
    public static quizQuestionControllerDelete(
id: string,
where?: any,
): CancelablePromise<loopback_Count> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/quizzes/{id}/questions',
            path: {
                'id': id,
            },
            query: {
                'where': where,
            },
        });
    }

}
