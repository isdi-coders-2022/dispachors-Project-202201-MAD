import { Category } from './components/category';
import { Header } from './components/core/header';
import { Menu } from './components/core/menu';
import { BooksToRead } from './components/core/books-to-read';
import { ReadBooks } from './components/read-books';

export function App() {
    return (
        <div className="app">
            <Header />
            <ReadBooks />
            {randomCategories().map((item) => (
                <Category
                    key={item.id}
                    catID={item.id}
                    categoryName={item.catName}
                />
            ))}
            <BooksToRead />
            <Menu />
        </div>
    );
}

const categories = [
    { id: 2000101307, catName: 'History' },
    { id: 3000000792, catName: 'Computers' },
    { id: 90000140898, catName: 'C. G. Jung' },

    {
        id: 3000004583,
        catName: 'Young Adult Fiction - Comics & Graphic Novels - Horror',
    },
    { id: 316, catName: 'Poetry' },
    { id: 93, catName: 'Drama' },
    { id: 201, catName: 'Art' },
    { id: 202, catName: 'Award winners' },
    { id: 225, catName: 'Mythology and Folklore' },
];

const randomCategories = () => {
    const randomCat = [...categories];
    for (let i = 0; i < 6; i += 1) {
        const aleatorio = Math.floor(Math.random() * randomCat.length);
        randomCat.splice(aleatorio, 1);
    }
    return randomCat;
};
