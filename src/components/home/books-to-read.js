import { useAuth0 } from '@auth0/auth0-react';
import { useContext } from 'react';
import { Context } from '../../context/context-provider';
import { Book } from '../core/book';

export function BooksToRead() {
    const { userBooks } = useContext(Context);
    const { user, isAuthenticated } = useAuth0();
    const booksToPrint = isAuthenticated
        ? userBooks.find((item) => item.user === user.sub).books
        : {};

    console.log(booksToPrint);

    return (
        <div className="pending">
            <h2 className="pending__title">Libros por leer</h2>
            <ul className="pending__books">
                {booksToPrint.map((item) => (
                    <Book key={item.isbn} book={item} />
                ))}
            </ul>
        </div>
    );
}
