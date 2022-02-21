/* eslint-disable no-underscore-dangle */
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { getFromCategory } from '../../services/PRH-api';
import { Category } from './category';

jest.mock('../../services/PRH-api');

const item = { id: 123, catName: 'Shakespeare' };

const mockResponse = {
    data: {
        titles: [
            {
                isbn: 9780143128618,
                _links: [
                    {},
                    {
                        rel: 'icon',
                        href: 'https://images.randomhouse.com/cover/9780143128618',
                        method: 'GET',
                        parameters: null,
                    },
                ],
            },
            {
                isbn: 9780143128618,
                _links: [
                    {},
                    {
                        rel: 'icon',
                        href: 'https://images.randomhouse.com/cover/9780143128618',
                        method: 'GET',
                        parameters: null,
                    },
                ],
            },
        ],
    },
};

describe('Given the component Category', () => {
    beforeEach(() => {
        getFromCategory.mockResolvedValue({ data: mockResponse });
    });
    describe('When rendering it', () => {
        test('Then it should appear on the screen', () => {
            render(
                <MemoryRouter>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Category
                                    key={item.id}
                                    catID={item.id}
                                    categoryName={item.catName}
                                />
                            }
                        />
                    </Routes>
                </MemoryRouter>
            );

            expect(screen.getByText(/Shakespeare/i)).toBeTruthy();
        });
    });
});
