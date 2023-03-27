import classes from './ProfileForm.module.css'
import {useState} from "react";

const ProfileForm = (props) =>{
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        props.onChangePassword({oldPassword,newPassword})
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="new-password">New Password</label>
                <input type="password" id="new-password" value={oldPassword} onChange={e=>setOldPassword(e.target.value)}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="old-password">Old Password</label>
                <input type="password" id="old-password" value={newPassword} onChange={e=>setNewPassword(e.target.value)}/>
            </div>
            <div className={classes.action}>
                <button>Change Password</button>
            </div>
        </form>
    )
}

export default ProfileForm
