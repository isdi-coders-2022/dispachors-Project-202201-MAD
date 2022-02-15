import { useContext } from 'react';
import { Context } from '../../context/context-provider';
import { Book } from './book';

export function BooksToRead() {
    const { userBooks } = useContext(Context);
    console.log(userBooks);

    return (
        <div className="pending">
            <h2 className="pending__title">Libros por leer</h2>
            <ul className="pending__books">
                {userBooks.map((item) => (
                    <Book key={item.isbn} book={item} />
                ))}
            </ul>
        </div>
    );
}
