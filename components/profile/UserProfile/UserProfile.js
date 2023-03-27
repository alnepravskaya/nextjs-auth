import classes from './UserProfile.module.css';
import ProfileForm from '../ProfileForm/ProfileForm';

const UserProfile = () => {
    const changePasswordHandler = async ({ oldPassword, newPassword }) => {
        const result = await fetch('/api/user/change-password', {
            method: 'PATCH',
            body: JSON.stringify({ oldPassword, newPassword }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await result.json();

        console.log(data);
    };

    return (
        <section className={classes.profile}>
            <h1>Your User Profile</h1>
            <ProfileForm onChangePassword={changePasswordHandler} />
        </section>
    );
};

export default UserProfile;
