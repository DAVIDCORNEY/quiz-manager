/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Question, 'id' | 'quizId'>, schemaOptions: { title: 'NewQuestionInQuiz', exclude: [ 'id', 'quizId' ] })
 */
export type NewQuestionInQuiz = {
    question: string;
    answer: string;
    options: Array<string>;
};
