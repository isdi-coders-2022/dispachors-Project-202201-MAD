import { useAuth0 } from '@auth0/auth0-react';
import { useContext } from 'react';
import { Context } from '../context/context-provider';
import { Book } from './core/book';

export function ReadBooks() {
    const { userBooks } = useContext(Context);
    const { user, isAuthenticated } = useAuth0();
    const booksToPrint = isAuthenticated
        ? userBooks.find((item) => item.user === user.sub)
        : {};

    return (
        <div className="read">
            <h2 className="read__title">Libros leídos</h2>
            <ul className="read__books">
                {booksToPrint.books === undefined ? (
                    <p>Aún no has guardado ningún libro</p>
                ) : (
                    booksToPrint.map((item) => (
                        <Book key={item.isbn} book={item} />
                    ))
                )}
            </ul>
        </div>
    );
}
