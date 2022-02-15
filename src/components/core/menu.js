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
            <div role="menuitem">
                <FontAwesomeIcon icon={faHouse} />
            </div>
            <div role="menuitem">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div role="menuitem">
                <FontAwesomeIcon icon={faBookmark} />
            </div>
        </div>
    );
}
