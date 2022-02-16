/* eslint-disable no-underscore-dangle */
import './book.scss';
import { Link } from 'react-router-dom';

export function Book({ book }) {
    return (
        <li>
            <Link to={`/details/${book.isbn}`}>
                <img
                    className="image-book"
                    src={book._links[1].href}
                    alt="book cover"
                />
            </Link>
        </li>
    );
}
