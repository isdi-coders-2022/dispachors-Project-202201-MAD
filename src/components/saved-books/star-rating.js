export function StarRating({ rating }) {
    const blankStars = 5 - rating;
    const arrayOfStars = [];
    for (let i = 0; i < rating; i += 1) {
        arrayOfStars.push(
            '<img className="book-data__rating" src="/assets/estrella-solid.png" alt="" />'
        );
    }
    for (let i = 1; i <= blankStars; i += 1) {
        arrayOfStars.push(
            `<img onClick={handleclick} className="book-data__rating ${i}" src="/assets/estrella-regular.png" alt=""/>`
        );
    }

    const handleclick = () => {};

    return (
        <div
            className="book-data__star-container"
            dangerouslySetInnerHTML={{ __html: arrayOfStars }}
        />
    );
}
