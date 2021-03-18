// 1. graphql/language module 
// export * as graphqlLanguage from 'graphql/language';

// 2. whole graphql module
// export * as graphql from 'graphql';

// 3. only { parse, visit } funtions from graphql/language
import { parse, visit } from 'graphql/language';
export {
    parse,
    visit
};
