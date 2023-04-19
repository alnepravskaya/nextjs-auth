import { gql } from '@apollo/client';

export const TYPESCRIPT_PAGE = gql`
    query typeScriptQuestionsEntryQuery {
        typeScriptQuestionsCollection {
            items {
                sys {
                    id
                }

                question {
                    json
                }
                answer {
                    json
                }
            }
        }
    }
`;
