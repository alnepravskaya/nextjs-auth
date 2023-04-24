import {
    BOLD,
    CODE,
    DOCUMENT,
    HEADING_1,
    HEADING_2,
    HEADING_3,
    HEADING_4,
    HEADING_5,
    HEADING_6,
    HYPERLINK, ITALIC,
    LIST_ITEM,
    ORDERED_LIST,
    PARAGRAPH,
    TEXT, UNDELINE, UNDERLINE,
    UNORDERED_LIST,
} from './constants';

const ContentNode = (props) => {

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
            let value = props.value

            if (props.marks.some((m) => m.type === BOLD)) {
                value = <b>{value}</b>;
            }
            if (props.marks.some((m) => m.type === ITALIC)) {
                value = <i>{value}</i>;
            }
            if (props.marks.some((m) => m.type === UNDERLINE)) {
                value = <u>{value}</u>;
            }
            if (props.marks.some((m) => m.type === CODE)) {
                value = <pre><code>{value}</code></pre>;
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

        default:
            return null;
    }
};

export default ContentNode;
