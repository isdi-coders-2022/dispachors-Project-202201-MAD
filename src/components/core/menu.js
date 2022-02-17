/* eslint-disable jsx-a11y/control-has-associated-label */
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouse,
    faMagnifyingGlass,
    faBookmark,
} from '@fortawesome/free-solid-svg-icons';

import './menu.scss';

export function Menu() {
    return (
        <div className="menu">
            <Link to="/home">
                <div role="menuitem">
                    <FontAwesomeIcon icon={faHouse} />
                </div>
            </Link>
            {/* <div role="menuitem">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div> */}
            <Link to="/my-books">
                <div role="menuitem">
                    <FontAwesomeIcon icon={faBookmark} />
                </div>
            </Link>
        </div>
    );
}
