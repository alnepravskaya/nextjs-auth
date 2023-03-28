import classes from './ProfileForm.module.css';
import { useEffect, useState } from 'react';

const ProfileForm = (props) => {
    const [message, setMessage] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage('');
                setOldPassword('');
                setNewPassword('');
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [message]);

    const submitHandler = async (event) => {
        event.preventDefault();

        const data = await props.onChangePassword({ oldPassword, newPassword });

        setMessage(data.message);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="new-password">New Password</label>
                <input
                    type="password"
                    id="new-password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                />
            </div>
            <div className={classes.control}>
                <label htmlFor="old-password">Old Password</label>
                <input
                    type="password"
                    id="old-password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
            </div>
            <p className={classes.text}>{message}</p>
            <div className={classes.action}>
                <button>Change Password</button>
            </div>
        </form>
    );
};

export default ProfileForm;
