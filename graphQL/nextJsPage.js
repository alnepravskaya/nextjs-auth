import { gql } from '@apollo/client';

export const NEXTJS_PAGE = gql`
    query nextJsQuestionsEntryQuery {
        nextJsQuestionsCollection {
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
