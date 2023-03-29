import { gql } from '@apollo/client';

export const HOME_PAGE = gql`
    query homePageEntryQuery {
        homePageCollection {
            items {
                title
                desc {
                    json
                }
            }
        }
    }
`;
