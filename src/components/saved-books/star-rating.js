/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useAuth0 } from '@auth0/auth0-react';
import { useContext } from 'react';
import { Context } from '../../context/context-provider';

export function StarRating({ bookState }) {
    const { userBooks, updateBook } = useContext(Context);
    const { user } = useAuth0();
    const rating = userBooks.find(
        (item) => item.isbn === bookState.isbn && item.user === user?.sub
    )?.rating;
    const blankStars = 5 - rating;
    const arrayOfStars = [];
    for (let i = 0; i < rating; i += 1) {
        arrayOfStars.push(true);
    }
    for (let i = 1; i <= blankStars; i += 1) {
        arrayOfStars.push(false);
    }

    const handleStarClick = (ev) => {
        const bookToUpdate = userBooks.find(
            (item) => item.isbn === bookState.isbn && item.user === user.sub
        );
        const newRating = ev.target.classList[1];
        updateBook({ ...bookToUpdate, isRead: true, rating: newRating });
    };

    return (
        <div className="book-data__star-container">
            {' '}
            {arrayOfStars.map((item, i) =>
                item ? (
                    <img
                        key={i}
                        value={i + 1}
                        onKeyPress={handleStarClick}
                        onClick={handleStarClick}
                        className={`book-data__rating ${i + 1}`}
                        src="/assets/estrella-solid.png"
                        alt="solid star"
                    />
                ) : (
                    <img
                        key={i}
                        value={i + 1}
                        onKeyPress={handleStarClick}
                        onClick={handleStarClick}
                        className={`book-data__rating ${i + 1}`}
                        src="/assets/estrella-regular.png"
                        alt="empty star"
                    />
                )
            )}
        </div>
    );
}
