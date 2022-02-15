import { useState, useEffect, useContext } from 'react';
import { Context } from '../../context/context-provider';
import { Book } from '../book';

export function BooksToRead({}) {
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
        /*        <div className="books-to-read">
            <section className="books-to-read__section">
                <h2 className="books-to-read__title">Libros pendientes</h2>
                <span role="button" className="books-to-read__more">
                    Ver más
                </span>
            </section>
            <ul className="pending__books">
                {<Book></Book>}
            </ul>
        </div> */
    );
}
