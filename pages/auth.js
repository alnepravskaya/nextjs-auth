import AuthForm from '../components/auth/AuthForm/AuthForm';
import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const AuthPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { replace } = useRouter();

    useEffect(() => {
        getSession().then((session) => {
            if (session) {
                // replace('/');
            } else {
                setIsLoading(false);
            }
        });
    }, [replace]);

    return <>{isLoading ? <p>Loading</p> : <AuthForm />}</>;
};

export default AuthPage;
