import axios from 'axios';

export function App() {
    const apiTest = () => {
        // fetch(
        //     'https://api.penguinrandomhouse.com/resources/v2/title/domains/PRH.US/categories?start=200&rows=50&api_key=mdmzpbe68gz2cc23pc7dhs28'
        // )
        //     .then((resp) => resp.json())
        //     .then((data) => {
        //         console.log(data.data.categories);
        //     });
    };
    apiTest();

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

    return <div className="app" />;
}
