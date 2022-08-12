/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Question_IncludeFilter_Items } from './Question_IncludeFilter_Items';

export type Question_Filter = {
    offset?: number;
    limit?: number;
    skip?: number;
    order?: (string | Array<string>);
    fields?: ({
id?: boolean;
question?: boolean;
answer?: boolean;
option1?: boolean;
option2?: boolean;
option3?: boolean;
quizId?: boolean;
} | Array<'id' | 'question' | 'answer' | 'option1' | 'option2' | 'option3' | 'quizId'>);
    include?: Array<(Question_IncludeFilter_Items | string)>;
};
