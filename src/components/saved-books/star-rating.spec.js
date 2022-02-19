import { render, screen } from '@testing-library/react';
import { useAuth0 } from '@auth0/auth0-react';
import { ReadBooks } from './read-books';
import { Context } from '../../context/context-provider';
import { StarRating } from './star-rating';

const mockBook = {
    user: 'google-oauth2|117072913009179683499',
    isbn: '9780767920384',
    _links: [
        {},
        {
            href: 'https://images.randomhouse.com/cover/9780767920384',
        },
    ],
    isRead: true,
    rating: '3',
    id: 2,
};

describe('Given the component StarRating', () => {
    describe('When rendering with a book passed by props', () => {
        test('Then it should render a number of stars', () => {
            render(
                <Context.Provider>
                    <StarRating />
                </Context.Provider>
            );
        });
    });
});
