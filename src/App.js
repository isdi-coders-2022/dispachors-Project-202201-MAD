import { Category } from './components/category';
import { Header } from './components/core/header';
import { Menu } from './components/core/menu';
import { randomCategories } from './services/helpers';
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
            <Menu />
        </div>
    );
}
