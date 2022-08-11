/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { QuizWithRelations } from './QuizWithRelations';

/**
 * (tsType: QuestionWithRelations, schemaOptions: { includeRelations: true })
 */
export type QuestionWithRelations = {
    id?: string;
    question: string;
    answer: string;
    options: Array<string>;
    quizId?: string;
    quiz?: QuizWithRelations;
};
