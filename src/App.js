import { getFromCategory } from './services/PRH-api';

export async function App() {
    const catBooks = await getFromCategory(93);
    console.log(catBooks);

    return <div className="app" />;
}
