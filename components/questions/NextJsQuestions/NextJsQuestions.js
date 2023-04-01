import ContentNode from '../../content/ContentNode/ContentNode';

const NextJsQuestions = (props) => {
    return (
        <>
            {props.data.map((content, i) => (
                <div key={content.sys.id}>
                    {content.question.json.content.map((info, i) => (
                        <ContentNode
                            key={content.sys.id + 'question' + i}
                            {...info}
                        />
                    ))}

                    {content.answer.json.content.map((info, i) => (
                        <ContentNode
                            key={content.sys.id + 'answer' + i}
                            {...info}
                        />
                    ))}
                </div>
            ))}
        </>
    );
};

export default NextJsQuestions;
