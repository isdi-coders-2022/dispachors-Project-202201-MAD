/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import { useAuth0 } from '@auth0/auth0-react';
import './user.scss';

export function User() {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    const userStatus = isAuthenticated ? 'Logout' : 'Login';
    const userPic = isAuthenticated ? user.picture : '';
    const handleClick = () => {
        isAuthenticated ? logout() : loginWithRedirect();
    };

    return (
        <div className="app-user">
            {isAuthenticated ? (
                <>
                    <img
                        role="button"
                        onClick={handleClick}
                        className="app-user__image"
                        src={userPic}
                        alt="el pepe"
                    />
                    <span
                        tabIndex={0}
                        role="button"
                        onClick={handleClick}
                        className="app-user__user-name"
                    >
                        {userStatus}
                    </span>
                </>
            ) : (
                <span
                    tabIndex={0}
                    role="button"
                    onClick={handleClick}
                    className="app-user__user-name"
                >
                    {userStatus}
                </span>
            )}
        </div>
    );
}
