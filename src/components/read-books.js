import { useContext } from 'react';
import { Context } from '../context/context-provider';
import { Book } from './book';

export function ReadBooks() {
    const { userBooks } = useContext(Context);
    console.log(userBooks);

    return (
        <div className="read">
            <h2 className="read__title">Libros leídos</h2>
            <ul className="read__books">
                {userBooks.map((item) => (
                    <Book key={item.isbn} book={item} />
                ))}
            </ul>
        </div>
    );
}