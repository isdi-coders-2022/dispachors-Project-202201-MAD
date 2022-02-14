/* eslint-disable jsx-a11y/control-has-associated-label */
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
            <FontAwesomeIcon icon={faHouse} />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faBookmark} />
        </div>
    );
}
