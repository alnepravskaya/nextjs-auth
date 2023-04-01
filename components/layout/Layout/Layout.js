import MainNavigation from '../MainNavigation/MainNavigation';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Layout = (props) => {
    const { push } = useRouter();
    const { status } = useSession();

    const isNotAuthed = status === 'unauthenticated';
    const isLoading = status === 'loading';

    useEffect(() => {
        if (isNotAuthed) {
            push('/auth');
        }
    }, [isNotAuthed, push]);

    return (
        <>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <MainNavigation />
                    <main>{props.children}</main>
                </>
            )}
        </>
    );
};

export default Layout;
