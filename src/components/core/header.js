import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

import { User } from './user';

import './header.scss';

export function Header() {
    return (
        <header className="header">
            <FontAwesomeIcon icon={faBookOpen} className="header__icon" />
            <User />
        </header>
    );
}
