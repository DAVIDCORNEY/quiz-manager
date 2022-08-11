/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { QuestionWithRelations } from './QuestionWithRelations';

/**
 * (tsType: QuizWithRelations, schemaOptions: { includeRelations: true })
 */
export type QuizWithRelations = {
    id?: string;
    title: string;
    description: string;
    questions?: Array<QuestionWithRelations>;
};
