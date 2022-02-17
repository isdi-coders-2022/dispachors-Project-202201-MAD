import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { User } from './user';

import './header.scss';

export function Header() {
    return (
        <header className="header">
            <Link to="/home">
                <FontAwesomeIcon icon={faBookOpen} className="header__icon" />
            </Link>
            <User />
        </header>
    );
}
