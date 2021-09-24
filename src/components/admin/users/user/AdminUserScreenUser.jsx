import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { deleteUser } from '../../../../logic/user/profile';
import { userData } from '../../../../slices/user/userSlice'

function AdminUserScreenUser({user}) {
    const userInfo = useSelector(userData);
    const dispatch = useDispatch();

    return (
        <div>
            {user.is_employer ? (
                <div>
                    <img src={user.profile.logo} alt="profile" />
                    <h4>{user.profile.company_name}</h4>
                </div>
            ) : (
                <div>
                    <img src={user.profile.photo} alt="profile" />
                    <h4>{user.first_name}</h4>
                </div>
            )}
            {user.is_admin && (<h3>Admin</h3>)}
            <button onClick={() => deleteUser(user.id, userInfo.token, dispatch, userInfo.info.if)}>Delete user</button>
        </div>
    )
}

export default AdminUserScreenUser
