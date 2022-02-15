/* eslint-disable no-underscore-dangle */

export function Book({ book }) {
    return (
        <li>
            <img src={book._links[1].href} alt="book cover" />
        </li>
    );
}
