import { Category } from './components/category';
import { Header } from './components/core/header';
import { Menu } from './components/core/menu';
import { randomCategories } from './services/helpers';

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
