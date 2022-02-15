import { useEffect, useState } from 'react';
import { Book } from './book';
import * as api from '../services/PRH-api';

export function Category({ catID, categoryName }) {
    const [categoryBooks, setCategoryBooks] = useState([]);

    useEffect(() => {
        api.getFromCategory(catID).then((Response) => {
            setCategoryBooks(Response.data.data.titles);
        });
    }, []);

    return (
        <div className="category">
            <h2 className="category__title">{categoryName}</h2>
            <ul className="category__books">
                {categoryBooks.map((item) => (
                    <Book book={item} />
                ))}
            </ul>
        </div>
    );
}