import StartingPageContent from '../components/home/StartingPage/StartingPage';
import { client } from '../lib/utils';

import { HOME_PAGE } from '../graphQL/homePage';

const HomePage = ({ title, description }) => {
    return <StartingPageContent title={title} description={description} />;
};

export default HomePage;

export async function getStaticProps() {
    const { data } = await client.query({
        query: HOME_PAGE,
    });

    return {
        props: {
            title: data.homePageCollection.items[0].title,
            description: data.homePageCollection.items[0].desc.json.content,
        },
    };
}
