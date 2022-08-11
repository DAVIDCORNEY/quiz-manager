/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Quiz_IncludeFilter_Items } from './Quiz_IncludeFilter_Items';

export type Quiz_Filter = {
    offset?: number;
    limit?: number;
    skip?: number;
    order?: (string | Array<string>);
    where?: any;
    fields?: ({
id?: boolean;
title?: boolean;
description?: boolean;
} | Array<'id' | 'title' | 'description'>);
    include?: Array<(Quiz_IncludeFilter_Items | string)>;
};
