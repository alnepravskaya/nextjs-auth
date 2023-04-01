import { client } from '../../lib/utils';

import { NEXTJS_PAGE } from '../../graphQL/nextJsPage';
import ContentNode from '../../components/content/ContentNode/ContentNode';
import NextJsQuestions from '../../components/questions/NextJsQuestions/NextJsQuestions';

const NextJsPage = (props) => <NextJsQuestions data={props.data} />;

export default NextJsPage;

export async function getStaticProps() {
    const { data } = await client.query({
        query: NEXTJS_PAGE,
    });

    return {
        props: {
            data: data.nextJsQuestionsCollection.items,
        },
    };
}
