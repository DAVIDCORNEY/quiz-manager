/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { QuizExcluding_id_quizId_WithRelations } from './QuizExcluding_id_quizId_WithRelations';

/**
 * (tsType: Omit<QuestionWithRelations, 'id' | 'quizId'>, schemaOptions: { includeRelations: true, exclude: [ 'id', 'quizId' ] })
 */
export type QuestionExcluding_id_quizId_WithRelations = {
    question: string;
    answer: string;
    option1: string;
    option2: string;
    option3: string;
    quiz?: QuizExcluding_id_quizId_WithRelations;
};
