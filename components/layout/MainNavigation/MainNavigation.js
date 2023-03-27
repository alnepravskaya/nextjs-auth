import Link from 'next/link'

import {signOut, useSession} from "next-auth/react";
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
    const {status} = useSession();
    const isAuthed = status === 'authenticated';

    const logoutHandler =async ()=> {
       await signOut();
    }

    return (
        <header className={classes.header}>
            <Link href="/">
                <div className={classes.logo}>Next Auth</div>
            </Link>
            <nav>
                <ul>
                    {!isAuthed &&<li>
                        <Link href="/auth">Login</Link>
                    </li>}
                    {isAuthed && <li>
                        <Link href="/profile">Profile</Link>
                    </li>}
                    { isAuthed && <li onClick={logoutHandler}>
                        <button>Logout</button>
                    </li>}
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation
