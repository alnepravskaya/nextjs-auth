import { client } from '../../lib/utils';

import { NEXTJS_PAGE } from '../../graphQL/nextJsPage';

const NextJsPage = (props) => {
    console.log(props);
    return (
        <>
            {props.data.map((content, i) => (
                <div key={content.sys.id}>
                    {/*
            <ContentNode key={content.sys.id + "answer"} {...content.answer.json.content}/>
*/}
                    {/*
            <ContentNode key={content.sys.id + "question"} {...content.question.json.content}/>
*/}
                </div>
            ))}
        </>
    );
};

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
