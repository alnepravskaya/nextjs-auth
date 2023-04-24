import ContentNode from '../../content/ContentNode/ContentNode';

const AnswersQuestions = (props) => {

    return (
        <>
            {props.data.map((content, i) => (
                <div key={content.sys.id}>
                    <div className="bold">
                    {content.question.json.content.map((info, i) => (
                        <ContentNode
                            key={content.sys.id + 'question' + i}
                            {...info}
                        />
                    ))}
                    </div>
                    {content.answer?.json.content.map((info, i) => (
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

export default AnswersQuestions;
