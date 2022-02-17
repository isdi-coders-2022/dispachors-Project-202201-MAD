import { Category } from './category';
import { randomCategories } from '../../services/helpers';
import { BooksToRead } from './books-to-read';
import './home.scss';

export function Home() {
    return (
        <>
            <BooksToRead />
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
