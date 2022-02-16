import { Routes, Route } from 'react-router-dom';
import { Header } from './components/core/header';
import { Menu } from './components/core/menu';
import { Home } from './components/home/home';
import './app.scss';
import { Details } from './components/details/details';

export function App() {
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/details/:isbn" element={<Details />} />
            </Routes>
            <Menu />
        </div>
    );
}
