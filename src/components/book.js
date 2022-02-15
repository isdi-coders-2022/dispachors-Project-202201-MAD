/* eslint-disable no-underscore-dangle */
import { Link } from 'react-router-dom';

export function Book({ book }) {
    console.log(book._links);
    return (
        <li>
            <img src={book._links[1].href} alt="book cover" />
        </li>
    );
}
