/* eslint-disable jsx-a11y/control-has-associated-label */
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBookmark } from '@fortawesome/free-solid-svg-icons';

import './menu.scss';

export function Menu() {
    return (
        <div className="menu">
            <Link to="/home">
                <div role="menuitem">
                    <FontAwesomeIcon className="menu__icon" icon={faHouse} />
                </div>
            </Link>
            <Link to="/my-books">
                <div role="menuitem">
                    <FontAwesomeIcon className="menu__icon" icon={faBookmark} />
                </div>
            </Link>
        </div>
    );
}
