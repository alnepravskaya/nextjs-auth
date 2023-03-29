import classes from './StartingPage.module.css';
import ContentNode from '../../content/ContentNode/ContentNode';

const StartingPageContent = (props) => {
    return (
        <section className={classes.starting}>
            <h1>{props.title}</h1>
            {props.description.map((content, i) => {
                debugger;
                return <ContentNode key={i} {...content}></ContentNode>;
            })}
        </section>
    );
};

export default StartingPageContent;
