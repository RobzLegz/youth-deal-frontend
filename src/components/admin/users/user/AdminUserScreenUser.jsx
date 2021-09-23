import React from 'react'

function AdminUserScreenUser({user}) {
    return (
        <div>
            {user.is_employer ? (
                <div>
                    <img src={user.profile.logo} alt="profile" />
                    <h4>{user.profile.company_name}</h4>
                    {user.is_admin && (<h3>Admin</h3>)}
                </div>
            ) : (
                <div>
                    <img src={user.profile.photo} alt="profile" />
                    <h4>{user.first_name}</h4>
                    {user.is_admin && (<h3>Admin</h3>)}
                </div>
            )}
        </div>
    )
}

export default AdminUserScreenUser
