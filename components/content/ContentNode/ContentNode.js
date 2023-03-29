const ContentNode = (props) => {
    switch (props.nodeType) {
        case 'document':
            return (
                <div>
                    {props.content.map((item, index) => (
                        <ContentNode key={index} {...item} />
                    ))}
                </div>
            );
        case 'heading-2':
            return (
                <h2>
                    <ContentNode {...props.content[0]} />
                </h2>
            );
        case 'unordered-list':
            return (
                <ul className="content-node-list">
                    {props.content.map((item, index) => (
                        <ContentNode key={index.toString()} {...item} />
                    ))}
                </ul>
            );
        case 'list-item': {
            return (
                <li className="content-node-list-item">
                    {props.content.map((item, index) => (
                        <ContentNode key={index.toString()} {...item} />
                    ))}
                </li>
            );
        }
        case 'paragraph': {
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
        case 'text': {
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
        case 'hyperlink': {
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
