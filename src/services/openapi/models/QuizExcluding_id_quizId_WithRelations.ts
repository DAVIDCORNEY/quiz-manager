/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { QuestionExcluding_id_quizId_WithRelations } from './QuestionExcluding_id_quizId_WithRelations';

/**
 * (tsType: Omit<QuizWithRelations, 'id' | 'quizId'>, schemaOptions: { includeRelations: true, exclude: [ 'id', 'quizId' ] })
 */
export type QuizExcluding_id_quizId_WithRelations = {
    title: string;
    description: string;
    questions?: Array<QuestionExcluding_id_quizId_WithRelations>;
};
