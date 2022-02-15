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

export const randomCategories = () => {
    const randomCat = [...categories];
    for (let i = 0; i < 7; i += 1) {
        const randomNum = Math.floor(Math.random() * randomCat.length);
        randomCat.splice(randomNum, 1);
    }
    return randomCat;
};
