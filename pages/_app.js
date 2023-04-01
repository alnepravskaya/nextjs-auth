import '../styles/globals.css';
import Layout from '../components/layout/Layout/Layout';
import { SessionProvider, useSession } from 'next-auth/react';

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
    return (
        <SessionProvider session={pageProps.session}>
            <Layout>
                <div className="wrapper">
                    <Component {...pageProps} />
                </div>
            </Layout>
        </SessionProvider>
    );
};

export default MyApp;
