/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User_IncludeFilter_Items } from './User_IncludeFilter_Items';

export type User_Filter = {
    offset?: number;
    limit?: number;
    skip?: number;
    order?: (string | Array<string>);
    where?: any;
    fields?: ({
id?: boolean;
email?: boolean;
role?: boolean;
} | Array<'id' | 'email' | 'role'>);
    include?: Array<(User_IncludeFilter_Items | string)>;
};
