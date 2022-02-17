import { Routes, Route } from 'react-router-dom';
import { Header } from './components/core/header';
import { Menu } from './components/core/menu';
import { Home } from './components/home/home';
import './app.scss';
import { Details } from './components/details/details';
import { SavedBooks } from './components/saved-books/saved';

export function App() {
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/details/:isbn" element={<Details />} />
                <Route path="/my-books" element={<SavedBooks />} />
            </Routes>
            <Menu />
        </div>
    );
}
