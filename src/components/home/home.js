import { useAuth0 } from '@auth0/auth0-react';
import { Category } from './category';
import { randomCategories } from '../../services/helpers';
import { BooksToRead } from './books-to-read';
import './home.scss';

export function Home() {
    const { isAuthenticated } = useAuth0();

    return (
        <>
            {isAuthenticated ? <BooksToRead /> : ''}
            {randomCategories().map((item) => (
                <Category
                    key={item.id}
                    catID={item.id}
                    categoryName={item.catName}
                />
            ))}
            <div className="buffer" />
        </>
    );
}
