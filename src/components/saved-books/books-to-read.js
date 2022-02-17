import { useAuth0 } from '@auth0/auth0-react';
import { useContext } from 'react';
import { Context } from '../../context/context-provider';
import { Book } from '../core/book';

export function BooksToRead() {
    const { userBooks } = useContext(Context);
    const { user } = useAuth0();
    const booksToPrint = userBooks.filter(
        (item) => item.user === user?.sub && item.isRead === false
    );

    return (
        <div className="pending">
            <h2 className="pending__title">Books to Read</h2>
            <ul className="pending__books">
                {booksToPrint.length === 0 ? (
                    <p>You have not saved any book yet</p>
                ) : (
                    booksToPrint.map((item) => (
                        <Book key={item.isbn} book={item} />
                    ))
                )}
            </ul>
        </div>
    );
}
