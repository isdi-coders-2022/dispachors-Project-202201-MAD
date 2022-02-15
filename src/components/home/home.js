import { ReadBooks } from '../read-books';
import { Category } from './category';
import { randomCategories } from '../../services/helpers';

export function Home() {
    return (
        <>
            <ReadBooks />
            {randomCategories().map((item) => (
                <Category
                    key={item.id}
                    catID={item.id}
                    categoryName={item.catName}
                />
            ))}
        </>
    );
}
