import { useEffect, useState } from 'react';
import { Book } from '../core/book';
import * as api from '../../services/PRH-api';
import './category.scss';

export function Category({ catID, categoryName }) {
    const [categoryBooks, setCategoryBooks] = useState([]);

    useEffect(() => {
        api.getFromCategory(catID).then((Response) => {
            setCategoryBooks(Response.data.data.titles);
        });
    }, [catID]);

    return (
        <div className="category">
            <h2 className="category__title">{categoryName}</h2>
            <ul className="category__books">
                {categoryBooks.map((item) => (
                    <Book key={item.isbn} book={item} />
                ))}
            </ul>
        </div>
    );
}
