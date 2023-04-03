import {
    CODE,
    DOCUMENT,
    HEADING_1,
    HEADING_2,
    HEADING_3,
    HEADING_4,
    HEADING_5,
    HEADING_6,
    HYPERLINK,
    LIST_ITEM,
    ORDERED_LIST,
    PARAGRAPH,
    TEXT,
    UNORDERED_LIST,
} from './constants';

const ContentNode = (props)=>{
    switch (props.nodeType) {
        case DOCUMENT:
            return (
                <div>
                    {props.content.map((item, index) => (
                        <ContentNode key={index.toString()} {...item} />
                    ))}
                </div>
            );
        case HEADING_1:
            return (
                <h1>
                    <ContentNode {...props.content[0]} />
                </h1>
            );
        case HEADING_2:
            return (
                <h2>
                    <ContentNode {...props.content[0]} />
                </h2>
            );
        case HEADING_3:
            return (
                <h3>
                    <ContentNode {...props.content[0]} />
                </h3>
            );
        case HEADING_4:
            return (
                <h4>
                    <ContentNode {...props.content[0]} />
                </h4>
            );
        case HEADING_5:
            return (
                <h4>
                    <ContentNode {...props.content[0]} />
                </h4>
            );
        case HEADING_6:
            return (
                <h4>
                    <ContentNode {...props.content[0]} />
                </h4>
            );
        case UNORDERED_LIST:
            return (
                <ul>
                    {props.content.map((item, index) => (
                        <ContentNode key={index.toString()} {...item} />
                    ))}
                </ul>
            );
        case ORDERED_LIST:
            return (
                <ol>
                    {props.content.map((item, index) => (
                        <ContentNode key={index.toString()} {...item} />
                    ))}
                </ol>
            );
        case LIST_ITEM: {
            return (
                <li>
                    {props.content.map((item, index) => (
                        <ContentNode key={index.toString()} {...item} />
                    ))}
                </li>
            );
        }
        case PARAGRAPH: {
            const childItems = props.content.filter(
                (item) => item.nodeType !== 'text' || !!item.value
            );

            return (
                <>
                    {!!childItems.length && (
                        <p>
                            {childItems.map((item, index) => (
                                <ContentNode key={index.toString()} {...item} />
                            ))}
                        </p>
                    )}
                </>
            );
        }
        case TEXT: {
            const fixedValue =
                (!props.value.indexOf('[]')
                    ? props.value.slice(2)
                    : props.value) ?? '';

            let value = <>{fixedValue.replace(/\s+/g, ' ')}</>;

            if (props.marks.some((m) => m.type === 'bold')) {
                value = <b>{value}</b>;
            }
            if (props.marks.some((m) => m.type === 'italic')) {
                value = <i>{value}</i>;
            }
            if (props.marks.some((m) => m.type === 'underline')) {
                value = <u>{value}</u>;
            }

            return value;
        }
        case HYPERLINK: {
            return (
                <a target="_blank" href={props.data.uri}>
                    {props.content.map((item, idx) => (
                        <ContentNode key={idx.toString()} {...item} />
                    ))}
                </a>
            );
        }
        case CODE:
            return (
                <pre>
                    <code>
                        <ContentNode {...props.content[0]} />
                    </code>
                </pre>
            );

        default:
            return null;
    }
};

export default ContentNode;
