import { Category } from './components/category';
import { Header } from './components/core/header';
import { Menu } from './components/core/menu';

export function App() {
    return (
        <div className="app">
            <Header />
            {randomCategories().map((item) => (
                <Category catID={item.id} categoryName={item.catName} />
            ))}
            <Menu />
        </div>
    );
}

const categories = [
    { id: 2000101307, catName: 'History' },
    { id: 3000000792, catName: 'Computers' },
    { id: 90000140898, catName: 'C. G. Jung' },
    { id: 2000070138, catName: 'Romance' },
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
    for (let i = 0; i < 7; i += 1) {
        const aleatorio = Math.floor(Math.random() * randomCat.length);
        const numRandom = randomCat[aleatorio];
        randomCat.splice(aleatorio, 1);
    }
    return randomCat;
};
