/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export { ApiError } from './core/ApiError';
export { CancelablePromise, CancelError } from './core/CancelablePromise';
export { OpenAPI } from './core/OpenAPI';
export type { OpenAPIConfig } from './core/OpenAPI';

export type { loopback_Count } from './models/loopback_Count';
export type { NewQuestionInQuiz } from './models/NewQuestionInQuiz';
export type { NewQuiz } from './models/NewQuiz';
export { NewUserRequest } from './models/NewUserRequest';
export { NewUserRequestExcluding_id_ } from './models/NewUserRequestExcluding_id_';
export type { NewUserRequestExcluding_id_role_ } from './models/NewUserRequestExcluding_id_role_';
export type { PingResponse } from './models/PingResponse';
export type { Question } from './models/Question';
export type { Question_Filter } from './models/Question_Filter';
export type { Question_IncludeFilter_Items } from './models/Question_IncludeFilter_Items';
export type { Question_ScopeFilter } from './models/Question_ScopeFilter';
export type { QuestionExcluding_id_quizId_WithRelations } from './models/QuestionExcluding_id_quizId_WithRelations';
export type { QuestionPartialExcluding_id_quizId_ } from './models/QuestionPartialExcluding_id_quizId_';
export type { QuestionWithRelations } from './models/QuestionWithRelations';
export type { Quiz } from './models/Quiz';
export type { Quiz_Filter } from './models/Quiz_Filter';
export type { Quiz_IncludeFilter_Items } from './models/Quiz_IncludeFilter_Items';
export type { Quiz_ScopeFilter } from './models/Quiz_ScopeFilter';
export type { QuizExcluding_id_quizId_WithRelations } from './models/QuizExcluding_id_quizId_WithRelations';
export type { QuizPartialExcluding_id_ } from './models/QuizPartialExcluding_id_';
export type { QuizWithRelations } from './models/QuizWithRelations';
export { User } from './models/User';
export type { User_Filter } from './models/User_Filter';
export type { User_IncludeFilter_Items } from './models/User_IncludeFilter_Items';
export type { User_ScopeFilter } from './models/User_ScopeFilter';
export type { UserCredentialsWithRelations } from './models/UserCredentialsWithRelations';
export { UserPartialExcluding_id_ } from './models/UserPartialExcluding_id_';
export { UserWithRelations } from './models/UserWithRelations';

export { PingControllerService } from './services/PingControllerService';
export { QuestionControllerService } from './services/QuestionControllerService';
export { QuizControllerService } from './services/QuizControllerService';
export { QuizQuestionControllerService } from './services/QuizQuestionControllerService';
export { UserControllerService } from './services/UserControllerService';
