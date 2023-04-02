import MainNavigation from '../MainNavigation/MainNavigation';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { LOADING, UNAUTHENTICATED } from './constants';

const Layout = (props) => {
    const { push } = useRouter();
    const { status } = useSession();

    const isNotAuthed = status === UNAUTHENTICATED;
    const isLoading = status === LOADING;

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
