/* eslint-disable no-underscore-dangle */
import './book.scss';

export function Book({ book }) {
    return (
        <li>
            <img
                className="image-book"
                src={book._links[1].href}
                alt="book cover"
            />
        </li>
    );
}
