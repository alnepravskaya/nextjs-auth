import { client } from '../../lib/utils';
import AnswersQuestions from '../../components/questions/AnswersQuestions/AnswersQuestions';
import { TYPESCRIPT_PAGE } from '../../graphQL/typescript';

const TypescriptPage = (props) => <AnswersQuestions data={props.data} />;

export default TypescriptPage;

export async function getStaticProps() {
    const { data } = await client.query({
        query: TYPESCRIPT_PAGE,
    });

    return {
        props: {
            data: data.typeScriptQuestionsCollection.items,
        },
    };
}
