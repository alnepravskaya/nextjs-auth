import { getSession } from 'next-auth/react';
import UserProfile from '../components/profile/UserProfile/UserProfile';

const ProfilePage = () => {
    return <UserProfile />;
};

/*export const getServerSideProps = async (context) => {
    const session = await getSession({ req: context.req });

    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false,
            },
        };
    }

    return {
        props: { session },
    };
};*/

export default ProfilePage;
